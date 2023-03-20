import { createRouter, createWebHistory } from 'vue-router'
import monsterslayer from "@/components/monsterslayer.vue"


const routes = [
  {
    path: '/',
    name: 'monsterslayer',
    component: monsterslayer
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
