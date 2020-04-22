<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import FormTest from "./components/form/index";
import router from "./router/index";

export default {
  name: "App",
  router,
  components: {
    // FormTest
  }
};
</script>

<style>
</style>
