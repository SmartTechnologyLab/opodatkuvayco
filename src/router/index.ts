import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { guard } from './guard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
guard(router)

export default router
