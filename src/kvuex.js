// 1.维护状态 state
// 2.修改状态 commit
// 3.业务逻辑控制 dispatch
// 4.状态派发getter
// 5.实现state响应式
// 6.实现state 插件
// 7.实现一个混入

let Vue;

function install(_Vue, storeName = "$store") {
    Vue = _Vue;
    //混入， 把store选项置顶到vue原型上
    Vue.mixin({
        beforeCreate() {
            if (this.$options.store) {
                Vue.prototype[storeName] = this.$options.store;
            }
        }
    })
}

class Store {
    // options :{state:{count:0},mutations:{}}
    constructor(options = {}) {
        // 利用Vue数据响应式
        this.state = new Vue({
            data: options.state
        })
        // 初始化 mutations
        this.mutations = options.mutations || {};
        // 初始化 action
        this.actions = options.actions || {};

        options.getters && this.handleGetters(options.getters)
    }

    // 触发mutatios,需要实现commit
    commit = (type, ...arg) => {
        // this 指向Store
        const fn = this.mutations[type]; //获取变更函数
        fn(this.state, ...arg)
    }

    dispatch = (type, arg) => {
        const fn = this.actions[type]; //获取变更函数
        return fn({ commit: this.commit, state: this.state, }, arg)
    }

    handleGetters(getters) {
        this.getters = {};
        Object.keys(getters).forEach(key => {
            // 定义只读
            Object.defineProperty(this.getters,key,{
                get:()=>{
                    return getters[key](this.state);
                }
            })
        })
    }
}

export default { Store, install };