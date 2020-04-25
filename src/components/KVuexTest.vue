<template>
  <div>
    <h3>vuex text</h3>
    <p>{{$store.state.count}}</p>
    <p>{{$store.getters['score']}}</p>
    <button @click="add">add</button>
    <button @click="asyncAdd">add</button>
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      this.$store.commit("add", 2);
    },
    // asyncAdd(){
    //     this.$store.dispatch("asyncAdd")
    // },
    // asyncAdd(){
    //     this.$store.dispatch("asyncAdd").then(res=>{
    //         if(res.ok === 1){
    //             alert("成功")
    //         }
    //     })
    // },
    async asyncAdd() {
      const result = await this.$store.dispatch("asyncAdd");
      if(result.ok === 1){
          alert("操作成功！！")
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>