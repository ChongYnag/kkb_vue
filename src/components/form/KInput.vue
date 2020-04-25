<template>
  <div>
    <input v-bind="$attrs" :value="value" @input="onInput" />
  </div>
</template>

<script>
export default {
  model:{
    props:""
  },
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
    };
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
      this.$parent.$emit("validate");
    }
  }
};
</script>

<style>
</style>