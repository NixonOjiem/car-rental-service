<template>
  <div class="min-h-screen bg-gray-100 flex text-gray-800">
    <div class="relative hidden lg:flex lg:w-1/2 items-center justify-center bg-gray-800">
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=2600&auto=format&fit=crop');"
      ></div>
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

        <form @submit.prevent="handleRegister">
          <div class="mb-4">
            <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
              </div>
              <input id="fullName" v-model="fullName" type="text" required placeholder="John Doe" class="w-full py-2.5 pl-10 pr-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"/>
            </div>
          </div>

          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" /><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" /></svg>
              </div>
              <input id="email" v-model="email" type="email" required placeholder="you@example.com" class="w-full py-2.5 pl-10 pr-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"/>
            </div>
          </div>

          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" /></svg>
              </div>
              <input id="password" v-model="password" type="password" required placeholder="••••••••" class="w-full py-2.5 pl-10 pr-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"/>
            </div>
          </div>

          <div class="mb-6">
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" /></svg>
              </div>
              <input id="confirmPassword" v-model="confirmPassword" type="password" required placeholder="••••••••" class="w-full py-2.5 pl-10 pr-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"/>
            </div>
          </div>

          <div>
            <button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0056D2] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
              Create Account
            </button>
          </div>
        </form>

        <div class="mt-8 text-center">
          <p class="text-sm text-gray-600">
            Already have an account?
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
import { useRouter } from 'vue-router'; // Import useRouter

const fullName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const router = useRouter(); // Initialize router instance

const handleRegister = () => {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match!");
    return;
  }

  // In a real app, you would make an API call to your backend here
  console.log('Registering user:', {
    fullName: fullName.value,
    email: email.value,
    password: password.value,
  });

  alert(`Account created for ${fullName.value}! (Check console for details)`);
  // Optional: Redirect to a different page after successful registration
  // router.push('/');
};
</script>
