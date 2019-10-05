<template>
  <v-layout column>
    <v-flex mx-5>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Songs</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <div v-for="song in songs" :key="song.title">{{ song.title }} {{ song.artist }}</div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      songs: [
        {
          title: "a song",
          artist: "lel"
        },
        {
          title: "Second Song",
          artist: "nice "
        }
      ]
    };
  }
};
</script>

<style>
</style>
