<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="errorMessage">{{errorMessage}}</p>
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  name: "KInputitim",
  inject: ["form"],
  props: {
    label: {
      type: String,
      defalut: ""
    },
    prop: String
  },
  data() {
    return {
      errorMessage: ""
    };
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      let rules = this.form.rules[this.prop];
      let value = this.form.model[this.prop];
      let desc = {
        [this.prop]: rules
      };
      let schema = new Schema(desc);
      return schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errorMessage = errors[0].message;
        } else {
          this.errorMessage = "";
        }
      });
    }
  }
};
</script>

<style>
</style>