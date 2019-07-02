//const Promise = require('bluebird');
//const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));
const bcrypt = require('bcrypt');

function hashPasswordHook(user) {
    const SALT_ROUNDS = 10;

    if (!user.changed('password')) {
        return;
    }

    return bcrypt.hash(user.password, SALT_ROUNDS).then((hash) => {
        console.log('generated for saving', hash);
        console.log('====================');
        user.password = hash;
        //user.setDataValue('password', hash);
    });
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    }, {
            hooks: {
                beforeCreate: hashPasswordHook,
                beforeUpdate: hashPasswordHook
                //beforeSave: hashPasswordHook
            }
        });

    User.prototype.isPasswordEqualAsync = async function (enteredPlainTextPassword) {
        return bcrypt.compare(enteredPlainTextPassword, this.password);
    }

    return User;
}
