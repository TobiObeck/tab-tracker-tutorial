<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">        
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>          
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          
          <h1>Register</h1>
  
            <v-text-field 
              label="Email"
              v-model="email"
            ></v-text-field>
           
            <v-text-field 
              label="password"
              @keydown.enter="register"
              type="password" name="password" 
              placeholder="password"
              v-model="password"
            ></v-text-field>      

          <v-btn
           @click="register"
           dark
           class="cyan"
           >Register</v-btn>

          <v-alert
            :value="errorMessage"
            type="error"
            transition="scale-transition"
            icon="new_releases"            
          >
            {{ errorMessage }}
          </v-alert>

        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: null,
      alert
    };
  },
  computed:{
    isError: () => this.errorMessage? false : true
  },
  methods: {
    async register() {
      try{
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        });

        this.errorMessage = null;

        console.log(response.data);
      } catch(error){
        console.log('error', error)
        this.errorMessage = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
input{
  border: solid black 1px;
  border-radius: 4px;
  padding: 4px;
  margin: 6px;
}
</style>
