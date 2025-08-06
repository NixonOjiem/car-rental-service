import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import GAuth from 'vue-google-oauth2'

const app = createApp(App)
const gauthOption = {
  clientId: '1088773727270-h7t9gs2vsg0iqokiuh9pn172gqt6001p.apps.googleusercontent.com', // Use your client ID
  scope: 'profile email',
  prompt: 'consent',
  fetch_basic_profile: true
}
app.use(GAuth, gauthOption);

app.use(createPinia())
app.use(router)

app.mount('#app')
