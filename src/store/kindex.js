import Vue from 'vue'
import KVuex from '../kvuex'

Vue.use(KVuex);

export default new KVuex.Store({
    state: {
        count: 0
    },
    mutations: {
        add(state, num = 1) {
            state.count += num;
        }
    },
    getters: {  //计算属性 过滤数据
        score(state) {
            return "score:" + state.count
        }
    },
    actions: { // 复杂业务逻辑 异步操作 ajax请求
        // asyncAdd({ commit }) {
        //   setTimeout(() => {
        //     commit("add")
        //   }, 1000)
        // },
        asyncAdd({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit("add")
                    resolve({ ok: 1 })
                }, 1000)
            })
        }
    }
})
