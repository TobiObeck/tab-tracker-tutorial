<template>
  <v-layout column>
    <v-flex mx-5>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <h1>Login</h1>

          <v-text-field label="Email" v-model="email"></v-text-field>

          <v-text-field
            label="password"
            @keydown.enter="login"
            type="password"
            name="password"
            placeholder="password"
            v-model="password"
          ></v-text-field>

          <v-btn @click="login" dark class="cyan">Login</v-btn>

          <v-alert
            :value="errorMessage"
            type="error"
            transition="scale-transition"
            icon="new_releases"
          >{{ errorMessage }}</v-alert>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: null,
      alert
    };
  },
  computed: {
    isError: () => (this.errorMessage ? false : true)
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });

        console.log(response, response.data.token, response.data.user);

        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);

        this.errorMessage = null;
      } catch (error) {
        console.log("error", error);
        this.errorMessage = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
input {
  border: solid black 1px;
  border-radius: 4px;
  padding: 4px;
  margin: 6px;
}
</style>
