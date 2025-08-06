<template>
  <div class="min-h-screen bg-gray-100 flex text-gray-800">
    <div class="relative hidden lg:flex lg:w-1/2 items-center justify-center bg-gray-800">
      <div class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=2600&auto=format&fit=crop');">
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>

      <div class="relative z-10 text-center text-white p-12">
        <h1 class="text-5xl font-extrabold tracking-tight mb-4">Join Us Today</h1>
        <p class="text-xl font-medium text-gray-200">
          Create an account to start your adventure and manage your car rentals with ease.
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

        <h3 class="text-2xl font-bold text-gray-800 text-center mb-2">Create Your Account</h3>
        <p class="text-gray-600 text-center mb-8">It's free and only takes a minute.</p>

        <div class="mb-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="bg-gray-100 px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div class="mt-6">
            <button @click="handleGoogleLogin" type="button"
              class="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
              <svg class="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px"
                height="48px">
                <path fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.61,4.925-6.604,8.532-11.303,8.532c-6.685,0-12.127-5.442-12.127-12.127c0-6.685,5.442-12.127,12.127-12.127c3.15,0,5.992,1.242,8.152,3.292l5.656-5.656C34.046,6.002,29.368,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,19.06-8.156,19.06-19.167C43.06,23.333,43.611,22.222,43.611,20.083z" />
                <path fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.803,1.077,7.994,2.909l5.591-5.591C34.004,6.671,29.155,4,24,4C16.31,4,9.656,8.384,6.306,14.691z" />
                <path fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.62-3.328-11.238-7.989l-6.48,4.78C9.619,39.049,16.208,44,24,44z" />
                <path fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.219-4.138,5.666c0.001,0.001,0.002,0.003,0.003,0.004l6.19,5.238C36.97,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                <path d="M1 1h22v22H1z" fill="none"></path>
              </svg>
              Sign up with Google
            </button>
          </div>
        </div>

        <form @submit.prevent="handleRegister">
          <div class="mb-4">
            <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <input id="fullName" v-model="fullName" type="text" required placeholder="John Doe"
                class="w-full py-2.5 pl-10 pr-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" />
            </div>
          </div>
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
              <input id="email" v-model="email" type="email" required placeholder="you@example.com"
                class="w-full py-2.5 pl-10 pr-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" />
            </div>
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <input id="password" v-model="password" type="password" required placeholder="••••••••"
                class="w-full py-2.5 pl-10 pr-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" />
            </div>
          </div>
          <div class="mb-6">
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <input id="confirmPassword" v-model="confirmPassword" type="password" required placeholder="••••••••"
                class="w-full py-2.5 pl-10 pr-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" />
            </div>
          </div>
          <div>
            <button type="submit"
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0056D2] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
              Create Account
            </button>
          </div>
        </form>

        <div class="mt-8 text-center">
          <p class="text-sm text-gray-600">
            Already have an account?
            <router-link to="/login" class="font-medium text-[#0056D2] hover:text-indigo-500 hover:underline">Sign
              In</router-link>
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
import { ref, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { useAuthStore } from '@/stores/auth';

// Component state
const fullName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

// Hooks
const router = useRouter();
const authStore = useAuthStore();

// Get the component instance to access the global `$gAuth` plugin
const { proxy } = getCurrentInstance();

// -- GraphQL Mutation --
// Manual Registration Mutation
const { mutate: registerUser, loading: registerLoading, onError: onRegisterError } = useMutation(gql`
  mutation RegisterUser($fullname: String!, $email: String!, $password: String!) {
    registerUser(fullname: $fullname, email: $email, password: $password) {
      token
      user {
        id
        fullname
        email
      }
    }
  }
`);

// Google Login Mutation
const { mutate: loginWithGoogle, loading: googleLoading, onError: onGoogleError } = useMutation(gql`
  mutation LoginWithGoogle($googleToken: String!) {
    loginWithGoogle(googleToken: $googleToken) {
      token
      user {
        id
        fullname
        email
      }
    }
  }
`);

// -- Methods & Event Handlers --
const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match!");
    return;
  }

  try {
    console.log('Attempting to register user:', {
      fullname: fullName.value,
      email: email.value,
      password: password.value,
    });
    const result = await registerUser({
      fullname: fullName.value,
      email: email.value,
      password: password.value,
    });

    if (result && result.data.registerUser) {
      authStore.setAuthData(result.data.registerUser);
      alert(`Welcome, ${result.data.registerUser.user.fullname}!`);
    }
  } catch (e) {
    // Error is handled by the onError hook below
    console.error('An unexpected error occurred during registration:', e);
  }
};

const handleGoogleLogin = async () => {
  try {
    // Correctly call the signIn method on the global plugin instance
    const googleUser = await proxy.$gAuth.signIn();
    const token = googleUser.getAuthResponse().id_token;

    const result = await loginWithGoogle({ googleToken: token });

    if (result && result.data.loginWithGoogle) {
      authStore.setAuthData(result.data.loginWithGoogle);
      alert(`Welcome, ${result.data.loginWithGoogle.user.fullname}!`);
    }
  } catch (error) {
    console.error('Google login process failed:', error);
    if (error?.error !== 'popup_closed_by_user') {
      alert('An error occurred during Google sign-in.');
    }
  }
};

// --- Error Handling Hooks ---
onRegisterError(error => {
  console.error("Registration error:", error.message);
  alert(`Registration failed: ${error.message}`);
});

onGoogleError(error => {
  console.error("Google login error:", error.message);
  alert(`Google login failed: ${error.message}`);
});

</script>
