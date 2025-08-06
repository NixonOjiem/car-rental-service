import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import router from '@/router'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('authToken') || null)
  const user = ref(JSON.parse(localStorage.getItem('user')) || null)

  const isAuthenticated = computed(() => !!token.value)

  function setAuthData(authData) {
    token.value = authData.token
    user.value = authData.user
    localStorage.setItem('authToken', authData.token)
    localStorage.setItem('user', JSON.stringify(authData.user))
    router.push('/') // Redirect to home on successful login/register
  }

  function logout() {
    token.value = null
    user.value = null
    localStorage.removeItem('authToken')
    localStorage.removeItem('user')
    router.push('/login')
  }

  return { token, user, isAuthenticated, setAuthData, logout }
})
