<template>
  <div>
    <h3>vuex text</h3>
    <p>{{$store.state.a.count}}</p>
    <br />
    <p>{{$store.getters['a/score']}}</p>
    <button @click="add">add</button>
    <button @click="asyncAdd">add</button>
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      this.$store.commit("a/add", 2);
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
      const result = await this.$store.dispatch("a/asyncAdd");
      if(result.ok === 1){
          alert("操作成功！！")
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>