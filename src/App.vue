<template>
  <div id="app">
    <router-link to="/">Homesdd</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
    <!-- <VueText></VueText> -->
    <KVuexTest></KVuexTest>
    <FormTest></FormTest>
  </div>
</template>

<script>
import FormTest from "./components/form/index";
// import VueText from "./components/VuexTest";
import KVuexTest from "./components/KVuexTest";
export default {
  name: "App",
  components: {
    FormTest,
    // VueText,
    KVuexTest,
  }
};
</script>

<style>
</style>
