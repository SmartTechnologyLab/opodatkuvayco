import type { Router } from 'vue-router'
import { useSupabase } from 'vue-supabase'
import { Routes } from './common'

export const guard = (router: Router) => {
  router.beforeEach((to, _, next) => {
    const { auth } = useSupabase()

    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (auth.user()) {
        next()
      } else {
        next({
          path: Routes.REGISTER_PAGE
        })
      }
    } else {
      next()
    }
  })
}
