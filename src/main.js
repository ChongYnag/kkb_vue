import Vue from 'vue'
import App from './App.vue'

// import router from './Krouter'
import router from './router'

// import store from './store'
import store from './store/kindex'

Vue.config.productionTip = false

// 注册组件渲染
// <div id="box" class="foo"><span>ssss</span></div>
Vue.component('comp',{
  // template:'<div id="box" class="foo"><span>ssss</span></div>',
  render:h=>{
    return h('div',{class:{foo:true},attrs:{id:"box"}},[h("span","sss")]);
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
