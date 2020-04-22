let Vue;

class VueRouter {
    constructor(options) {
        this.$options = options;

        // 创建一个路由 path 和 route 映射
        this.routeMap = {};

        // 将来当前路径current需要响应式
        // 利用vue响应式原理可以做到这一点
        this.app = new Vue({
            data: {
                current: '/'
            }
        })
    }

    init(){
        // 绑定浏览器时间
        this.bindEvents();
    }

    bindEvents(){
        window.addEventListener('hashchange',this.onHashChange.bind(this))
        window.addEventListener('load',this.onHashChange.bind(this))
    }
}

// 把VueRouter变为插件
VueRouter.install = function (_vue) {
    Vue = _vue; // 这里保存,上面使用

    // 混入任务
    Vue.mixin({ //混入：就是扩展Vue
        beforeCreate() {
            // 这里的代码将来会在外面初始化的时候被调用
            // 这样我们就实现了Vue扩展
            // this是谁? Vue组件实例
            // 但是这里只希望根组件执行一次
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router;
                this.$options.router.init();
            }
        }
    })
}