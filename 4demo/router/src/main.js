import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
router.beforeEach((to, from, next) => {
    console.log("from:",from)
    console.log("to:",to)
    if (to.path==='/vip/info'){
        alert('no permission')
        next(false) //拦截
    }else{
        next()
    }

})
createApp(App).use(router).mount('#app')
