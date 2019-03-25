import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

export const eventBus = new Vue()

const routes = [
    { path: '/:personID', component: App },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})
// Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')