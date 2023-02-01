import {createRouter,createWebHistory} from 'vue-router'

import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Contact from '../pages/contact.vue'
import Services from '../pages/services.vue'
import Team from '../pages/team.vue'
//import Team from '../pages/team.vue'
// import Dashboard from '../dashboard/dashboard.vue'
// import Login from '../dashboard/login.vue'
import App from '../component/front.vue'
//import About from '../pages/about.vue'
const routes = [
    { path: '/',name:'app', component: App,
      children:[
        { path: '/',name:'home', component: Home },
        { path: '/about',name:'about', component: About },
        { path: '/contacts',name:'contact', component: Contact },
        { path: '/services',name:'services', component: Services },
        { path: '/team',name:'team', component: Team },
      ]
  },
    
    // { path: '/dashboard',name:'dashboard', component: Dashboard },
    // { path: '/admin',name:'login', component: Login },
     
  ]
  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })
  // const router = createRouter({
  //   history: createWebHistory(process.env.BASE_URL),
  //   routes
  // })
  export default router