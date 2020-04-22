<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      form: this
    };
  },
  props: {
    model: {
      type: Object,
    },
    rules: {
      type: Object
    }
  },
  methods: {
    validate(cb) {
      let tacks = this.$children.filter(i => i.prop).map(it => it.validate());
      Promise.all(tacks)
        .then(() => cb(true))
        .catch(() => cb(false));
    }
  }
};
</script>

<style>
</style>