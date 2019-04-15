<template>
    <v-toolbar fixed class="cyan" dark>
        <v-toolbar-title class="mr-4">
            Tab tracker
        </v-toolbar-title>
        <v-toobar-items>
            <v-btn flat dark>
                Browse
            </v-btn>
        </v-toobar-items>

        <v-spacer></v-spacer>

        <v-toobar-items>
            <v-btn flat dark>
                Sign Up
            </v-btn>
            <v-btn flat dark>
                Log In
            </v-btn>
        </v-toobar-items>
    </v-toolbar>
</template>

<script>


export default {
  name: 'TheHeader',
  data() {
    return {
    };
  },
  methods: {
    
  }
};
</script>

<style scoped>
</style>
