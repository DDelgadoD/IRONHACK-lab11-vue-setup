import { createRouter, createWebHashHistory } from 'vue-router'

import Component1 from "./components/component-1.vue";
import Component2 from "./components/component-2.vue"


const routes = [
    { path: '/', name:"Home", component: Component1 },
    { path: '/component1', name:"Component1", component: Component1 },
    { path: '/component2', name:"Component2", component: Component2 },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })
  
  
  export default router;