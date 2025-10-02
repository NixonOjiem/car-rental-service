import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import router from '@/router'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('authToken') || null)

  // --- FIX IS HERE ---
  // 1. Get the raw data from localStorage
  const userDataFromStorage = localStorage.getItem('user')
  // 2. Only parse it if it's not null, otherwise default to null
  const user = ref(userDataFromStorage ? JSON.parse(userDataFromStorage) : null)

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
