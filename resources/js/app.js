 
import './bootstrap';

import '../sass/app.scss'
import {createApp} from 'vue'

//import App from './component/App.vue'
import App from './App.vue'

import router from './router/index'
//import routerr from './router/index2'
//import Foot from './foot.vue'
createApp(App).use(router).mount("#app")
createApp(Appp).use(router).mount("#appp")
//App.use(router)
//createApp(Foot).mount("#foot")