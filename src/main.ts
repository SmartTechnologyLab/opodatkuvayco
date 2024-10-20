import { createApp } from 'vue'
import { createPinia } from 'pinia'
import generalConfig from '@/config'
import VueSupabase from 'vue-supabase'

import App from './App.vue'
import router from './router'

const app = createApp(App)

generalConfig(app)

app.use(createPinia())
app.use(router)
app.use(VueSupabase, {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  supabaseOptions: {}
})

app.mount('#app')
