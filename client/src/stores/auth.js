import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import router from '@/router'
import Cookies from 'js-cookie' // 👈 Import the library

export const useAuthStore = defineStore('auth', () => {
  // --- State ---
  // Read initial state from cookies
  const token = ref(Cookies.get('authToken') || null)
  const userCookie = Cookies.get('user')
  const user = ref(userCookie ? JSON.parse(userCookie) : null)

  // --- Getters ---
  const isAuthenticated = computed(() => !!token.value && !!user.value)

  // --- Actions ---

  /**
   * Sets authentication data in the store and cookies.
   * @param {object} authData - The authentication data containing token and user info.
   */
  function setAuthData(authData) {
    // Update the state
    token.value = authData.token
    user.value = authData.user

    // Set cookies to persist the session
    // Options: expires in 7 days, secure flag for HTTPS, SameSite for CSRF protection
    const cookieOptions = { expires: 7, secure: true, sameSite: 'Lax' }

    Cookies.set('authToken', authData.token, cookieOptions)
    Cookies.set('user', JSON.stringify(authData.user), cookieOptions)

    router.push('/') // Redirect to home on successful login/register
  }

  /**
   * Clears authentication data from the store and cookies.
   */
  function logout() {
    // Clear the state
    token.value = null
    user.value = null

    // Remove the cookies
    Cookies.remove('authToken')
    Cookies.remove('user')

    router.push('/login')
  }

  return { token, user, isAuthenticated, setAuthData, logout }
})
