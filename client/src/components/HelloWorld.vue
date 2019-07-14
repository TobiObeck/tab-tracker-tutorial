<template>
  <div class="hello">
    <h1>Welcome{{$store.state.user? ' ' + $store.state.user.email : '' }}!</h1>
    {{ $store.state.user? $store.state.user : '' }}
    <br />
    count: {{ $store.state.count }}
    <br />
    delay: {{ $store.state.delay }}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
