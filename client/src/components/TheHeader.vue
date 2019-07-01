<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <span class="home" @click="$router.push({ 'name': 'root' });">Tab tracker</span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat dark to="/">Home</v-btn>
      <!-- <v-btn flat dark>
                Browse
      </v-btn>-->
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark to="register">Sign Up</v-btn>
      <v-btn flat dark to="login">Log In</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: #cecece;
}
</style>
