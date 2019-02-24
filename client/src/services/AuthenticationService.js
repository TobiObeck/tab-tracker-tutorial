import Api from '@/services/Api';

export default {
    register (credentials){
        return Api().post('register', credentials);
    }
}

// how to call this file
// AuthenticationService.register({
//    email: 'testing@gmail.com',
//    passwort: '123456'
// });