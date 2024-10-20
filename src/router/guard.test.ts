import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createRouterMock, injectRouterMock } from 'vue-router-mock'
import { guard } from './guard'
import HomePage from '@/pages/HomePage.vue'

const mockedRoutes = [
  { path: '/public-page', component: HomePage },
  { path: '/protected-page', component: HomePage, meta: { requiresAuth: true } },
  { path: '/register', component: HomePage }
]

const router = createRouterMock({
  spy: {
    create: vi.fn,
    reset: vi.fn
  },
  routes: mockedRoutes,
  runInComponentGuards: true
})

vi.mock('vue-supabase', () => ({
  useSupabase: () => ({
    auth: {
      user: vi.fn()
    }
  })
}))

describe('Routes guard', () => {
  beforeEach(() => {
    injectRouterMock(router)
    guard(router)
  })

  it('allows navigation if no auth required', async () => {
    router.push('/public-page')

    await router.push('/public-page')

    const protectedRoute = router.getRoutes().find((route) => route.path === '/public-page')?.meta.requiresAuth

    expect(protectedRoute).toBeUndefined()
    expect(router.currentRoute.value.path).toBe('/public-page')
  })

  it('redirects to register if auth required and user not authenticated', async () => {
    await router.push('/protected-page')
    expect(router.currentRoute.value.path).toBe('/register')
  })
})
