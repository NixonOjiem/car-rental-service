import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import GAuth from 'vue-google-oauth2'

const app = createApp(App)
const gauthOption = {
  clientId: 'YOUR_GOOGLE_CLIENT_ID_HERE', // Use your client ID
  scope: 'profile email',
  prompt: 'consent',
  fetch_basic_profile: true
}
app.use(GAuth, gauthOption);

app.use(createPinia())
app.use(router)

app.mount('#app')
