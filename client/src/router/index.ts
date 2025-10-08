import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/IndexView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import ForgotPasswordView from '@/views/ForgotPasswordView.vue';
import MarketplaceView from '@/views/MarketplaceView.vue';
import RentCarView from '@/views/RentCarView.vue';
import BookView from '@/views/BookView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPasswordView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/marketplace',
      name: 'marketplace',
      component: MarketplaceView,
    },
    {
      path: '/rent',
      name: 'RentCarView',
      component: RentCarView,
    },
    {
      path: '/book/:id',
      name: 'BookView',
      component: BookView,
    },
  ],
})

export default router
