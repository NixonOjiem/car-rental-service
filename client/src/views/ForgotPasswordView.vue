<template>
  <div class="min-h-screen bg-gray-100 flex text-gray-800">
    <div class="relative hidden lg:flex lg:w-1/2 items-center justify-center bg-gray-800">
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2600&auto=format&fit=crop');"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>

      <div class="relative z-10 text-center text-white p-12">
        <h1 class="text-5xl font-extrabold tracking-tight mb-4">Locked Out?</h1>
        <p class="text-xl font-medium text-gray-200">
          We can help you get back into your account and back on the road.
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

        <h3 class="text-2xl font-bold text-gray-800 text-center mb-2">Forgot Password?</h3>
        <p class="text-gray-600 text-center mb-8">No worries, we'll send you reset instructions.</p>

        <form @submit.prevent="handleResetRequest">
          <div class="mb-6">
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" /><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" /></svg>
              </div>
              <input
                id="email"
                v-model="email"
                type="email"
                required
                placeholder="Enter your email"
                class="w-full py-2.5 pl-10 pr-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0056D2] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Send Reset Link
            </button>
          </div>
        </form>

        <div class="mt-8 text-center">
            <p class="text-sm text-gray-600">
                Remember your password?
                <router-link to="/login" class="font-medium text-[#0056D2] hover:text-indigo-500 hover:underline">Sign In</router-link>
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
import { ref } from 'vue';

const email = ref('');

const handleResetRequest = () => {
  if (!email.value) {
    alert("Please enter your email address.");
    return;
  }

  // In a real app, you'd call an API to trigger the password reset email
  console.log('Password reset requested for:', email.value);

  alert(`If an account exists for ${email.value}, password reset instructions have been sent.`);
};
</script>
