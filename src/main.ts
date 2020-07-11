import { createApp, App as VueApp } from 'vue'
import App from './App.vue'
import { routerHistory, router } from './router'

import './assets/tailwind.css';

declare global {
    interface Window {
        h: typeof routerHistory;
        r: typeof router;
        vm: ReturnType<VueApp['mount']>
    }
}

const app = createApp(App);
app.use(router)

// for debug
window.h = routerHistory
window.r = router
window.vm = app.mount('#app')