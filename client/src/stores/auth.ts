import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import router from '@/router'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import type { JwtPayload } from 'jwt-decode' // Import the base JwtPayload type

// 1. Define the custom User type for your application's state
interface User {
  id: number | string // Assuming id is a number or string
  email: string
  name: string
}

// 2. Define the expected structure of your decoded JWT payload
// This extends the base JwtPayload from the library
interface CustomJwtPayload extends JwtPayload {
  id: number | string
  email: string // Note: Double-check the spelling for 'email' vs 'emial' here
  name: string // The key in your JWT payload is 'name'
}

export const useAuthStore = defineStore('auth', () => {
  // --- State (Add explicit types) ---
  const token = ref<string | null>(Cookies.get('authToken') || null)
  const userCookie = Cookies.get('user')
  // Use the User type
  const user = ref<User | null>(userCookie ? JSON.parse(userCookie) : null)

  // --- Getters ---
  const isAuthenticated = computed(() => !!token.value && !!user.value)

  // --- Actions ---

  /**
   * Decodes JWT, sets auth data in store and cookies.
   * @param {string} authToken - The JWT received from the API.
   */
  // 3. Fix: Parameter 'authToken' implicitly has an 'any' type.
  function setAuthData(authToken: string) {
    // Decode the token, explicitly casting the result to your CustomJwtPayload
    // 4. Fix: Property 'id', 'email', 'name' does not exist on type 'JwtPayload'.
    const decodedPayload = jwtDecode<CustomJwtPayload>(authToken)

    // Create the user object from the decoded token payload
    const userObject: User = {
      id: decodedPayload.id,
      email: decodedPayload.email,
      name: decodedPayload.name,
    }

    // Update the state
    token.value = authToken
    user.value = userObject

    // Set cookies to persist the session
    // 5. Fix: Type 'string' is not assignable to type '"none" | "Lax" | "strict" ...'
    // The SameSite value must be one of the literal strings. Use a literal string type.
    const cookieOptions = { expires: 7, secure: true, sameSite: 'Lax' as const }
    Cookies.set('authToken', authToken, cookieOptions)
    Cookies.set('user', JSON.stringify(userObject), cookieOptions)

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
