import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import router from '@/router'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

export const useAuthStore = defineStore('auth', () => {
  // --- State ---
  const token = ref(Cookies.get('authToken') || null)
  const userCookie = Cookies.get('user')
  const user = ref(userCookie ? JSON.parse(userCookie) : null)

  // --- Getters ---
  const isAuthenticated = computed(() => !!token.value && !!user.value)

  // --- Actions ---

  /**
   * 🔧 2. Modified Action: Decodes JWT, sets auth data in store and cookies.
   * Now it only needs the token string.
   * @param {string} authToken - The JWT received from the API.
   */
  function setAuthData(authToken) {
    // Decode the token to get the payload
    const decodedPayload = jwtDecode(authToken)

    // ✨ 3. Create the user object from the decoded token payload
    const userObject = {
      id: decodedPayload.id,
      email: decodedPayload.email,
      name: decodedPayload.name, // The key in your JWT payload is 'name'
    }

    // Update the state
    token.value = authToken
    user.value = userObject

    // Set cookies to persist the session
    const cookieOptions = { expires: 7, secure: true, sameSite: 'Lax' }
    Cookies.set('authToken', authToken, cookieOptions)
    Cookies.set('user', JSON.stringify(userObject), cookieOptions) // Store the user object too

    router.push('/') // Redirect to home
  }

  /**
   * Clears authentication data from the store and cookies.
   */
  function logout() {
    token.value = null
    user.value = null

    Cookies.remove('authToken')
    Cookies.remove('user')

    router.push('/login')
  }

  return { token, user, isAuthenticated, setAuthData, logout }
})
