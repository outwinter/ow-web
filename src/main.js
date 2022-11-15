// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

/* 路由 */
import router from './router'
app.use(router)
/* 重置样式 */
import './assets/css/reset.min.css'

/* jquery */
import 'jquery'

/* bootstarp */
import './assets/css/bootstrap.min.css'

/* animate.css */
import 'animate.css'




/* animate.css */
import 'animate.css'

router.beforeEach((to, from, next) => {
    if(to.meta.title){
      document.title = to.meta.title
    }
    next();
});

// Vue.use(ElementPlus)

app.mount("#app")
