<template>
  <div>
    Detial
    <p>
      <!-- {{$route.params.id}} -->
      {{id}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      tyep: String
    }
  }
};
</script>

<style lang="scss" scoped>
</style>