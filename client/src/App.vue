<template>
  <div id="app">
    <v-app>
      <TheHeader/>
      <main>
        <v-container fluid>
          <router-view/>
        </v-container>
      </main>
    </v-app>
  </div>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
import "material-design-icons-iconfont/dist/material-design-icons.css";

export default {
  name: "App",
  components: {
    TheHeader
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
