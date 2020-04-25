import Vue from 'vue'
import VueRouter from './kvue-router'
import Home from './views/Home';
import About from './views/About';


Vue.use(VueRouter)

export default new VueRouter({
    routers:[
        {
          path: '/',
          component: Home
        },
        {
          path: '/about',
          component: About
        }
      ]
})
