<template>
  <div class="min-h-screen bg-gray-100 flex text-gray-800">
    <div class="relative hidden lg:flex lg:w-1/2 items-center justify-center bg-gray-800">
      <div class="absolute inset-0 bg-cover bg-center" style="
          background-image: url('/images/LoginPic.avif');
        "></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>

      <div class="relative z-10 text-center text-white p-12">
        <h1 class="text-5xl font-extrabold tracking-tight mb-4">Your Journey Starts Here</h1>
        <p class="text-xl font-medium text-gray-200">
          The best cars, unbeatable prices. Log in to get back on the road.
        </p>
      </div>
    </div>

    <div class="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
      <div class="max-w-md w-full">
        <div class="text-center mb-8">
          <h2 class="text-4xl font-bold text-gray-900">
            <span class="text-[#0056D2]">CarGo</span> Rentals
          </h2>
        </div>

        <h3 class="text-2xl font-bold text-gray-800 text-center mb-2">Welcome Back!</h3>
        <p class="text-gray-600 text-center mb-8">Sign in to book your rentals.</p>

        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                </svg>
              </div>
              <input id="email" v-model="email" type="email" required autocomplete="email" placeholder="you@example.com"
                class="w-full py-2.5 pl-10 pr-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0056D2] focus:border-indigo-500 transition" />
            </div>
          </div>

          <div class="mb-6">
            <div class="flex justify-between items-baseline">
              <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <router-link to="/forgot-password"
                class="text-sm text-[#0056D2] hover:text-indigo-500 hover:underline">Forgot password?</router-link>
            </div>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <input id="password" v-model="password" type="password" required autocomplete="current-password"
                placeholder="••••••••"
                class="w-full py-2.5 pl-10 pr-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0056D2] focus:border-indigo-500 transition" />
            </div>
          </div>

          <div>
            <button type="submit" :disabled="loginLoading"
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0056D2] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors disabled:opacity-50">
              {{ loginLoading ? 'Signing In...' : 'Sign In' }}
            </button>
          </div>
        </form>

        <div class="my-6 flex items-center justify-center">
          <div class="h-px w-full bg-gray-300"></div>
          <div class="px-4 text-sm text-gray-500">OR</div>
          <div class="h-px w-full bg-gray-300"></div>
        </div>

        <div>
          <div id="google-btn" class="flex justify-center">Google login</div>

        </div>

        <div class="mt-8 text-center">
          <p class="text-sm text-gray-600">
            Don't have an account?
            <router-link to="/register" class="font-medium text-[#0056D2] hover:text-indigo-500 hover:underline">Sign up
              for free</router-link>
          </p>
          <p class="mt-2 text-sm text-gray-600">
            <router-link to="/" class="font-medium text-[#0056D2] hover:text-indigo-500 hover:underline">
              Go back home
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { useAuthStore } from '@/stores/auth'

// --- State and Store ---
const email = ref('')
const password = ref('')
const authStore = useAuthStore()

// --- GraphQL Mutations ---

// 1. Manual Login Mutation
const {
  mutate: loginUser,
  loading: loginLoading,
  onError: onLoginError,
} = useMutation(gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      # user {
      #   id
      #   fullname
      #   email
      # }
    }
  }
`)

// --- Event Handlers ---
const handleLogin = async () => {
  if (!email.value || !password.value) return // Basic validation

  try {
    const result = await loginUser({
      email: email.value,
      password: password.value,
    })

    if (result && result.data.loginUser) {
      // On success, use Pinia store to save data and redirect
      authStore.setAuthData(result.data.loginUser.token)
      alert(`Welcome back, ${result.data.loginUser.user.fullname}!`)
    }
  } catch (e) {
    // Errors are handled by the onError hook, so this catch is for any other unexpected issues.
    console.error('An unexpected error occurred during login:', e)
  }
}

// --- Google Login Mutation ---
const {
  mutate: loginWithGoogle,
  loading: googleLoading,
  onError: onGoogleError,
} = useMutation(gql`
  mutation LoginWithGoogle($googleToken: String!) {
    loginWithGoogle(googleToken: $googleToken) {
      token
      # user {
      #   id
      #   fullname
      #   email
      # }
    }
  }
`)

// --- Google Sign-In Logic (New Approach) ---

// This function will be called by the Google script once it authenticates the user
const handleGoogleCredentialResponse = async (response) => {
  console.log('Received Google Credential:', response)
  // The token is now in `response.credential` (it's a JWT ID token, not an access token)
  if (!response.credential) {
    console.error('Google credential response did not contain a credential.')
    alert('Google sign-in failed.')
    return
  }

  try {
    const result = await loginWithGoogle({ googleToken: response.credential })

    if (result && result.data.loginWithGoogle) {
      authStore.setAuthData(result.data.loginWithGoogle.token)
      alert(`Successfully signed in with Google!`)
    }
  } catch (error) {
    console.error('Backend login with Google failed:', error)
    // The onGoogleError hook will also handle this
  }
}

const loadGoogleScript = () => {
  if (window.google) {
    return Promise.resolve()
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.defer = true
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}

// Use the onMounted lifecycle hook to initialize and render the button
onMounted(async () => {
  try {
    await loadGoogleScript()

    // 1. Initialize the Google Identity Services client
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleGoogleCredentialResponse, // The function to call on success
    });

    // 2. Render the "Sign In With Google" button
    window.google.accounts.id.renderButton(
      document.getElementById('google-btn'), // Target the div we created
      { theme: 'outline', size: 'large', width: '350' } // Customize the button
    );

  } catch (error) {
    console.error('Failed to load or initialize Google Sign-In:', error)
    alert('Could not load Google Sign-In. Please try again later.')
  }
})

// Cleanup to avoid issues with Hot Module Replacement (HMR) in dev
onUnmounted(() => {
  // Optional: You can add cleanup logic here if needed
  window.google?.accounts.id.cancel();
})


// --- GraphQL Error Handling ---
onLoginError((error) => {
  console.error('GraphQL login error:', error.message)
  alert(`Login failed: ${error.message}`)
})

onGoogleError((error) => {
  console.error('GraphQL Google login error:', error.message)
  alert(`Google login failed: ${error.message}`)
})
</script>

<style scoped>
/* Your component-specific styles can go here */
</style>
