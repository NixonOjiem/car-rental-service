<template>
  <section class="bg-white py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative bg-sky-400 rounded-lg shadow-xl overflow-visible max-w-5xl mx-auto">
        <!-- Mobile: image as subtle background -->
        <div class="absolute inset-0 z-0 flex justify-center items-center lg:hidden">
          <img
            src="/images/subaru_PNG119245.png"
            alt="Car"
            class="object-contain opacity-20
                   w-[260px] h-[195px] sm:w-[360px] sm:h-[270px]"
          />
        </div>

        <!-- Desktop: image poking outside the card -->
        <div
          class="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 z-10 hidden lg:block
                 lg:translate-x-1/2"
          aria-hidden="true"
        >
          <img
            src="/images/subaru_PNG119245.png"
            alt="Car"
            class="object-contain drop-shadow-xl
                   lg:w-[640px] lg:h-[480px]"
          />
        </div>

        <!-- Text content -->
        <div class="relative z-10 p-8 sm:p-12 lg:p-16">
          <div class="space-y-6 text-center lg:text-left">
            <h3 class="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to get started?
            </h3>
            <p class="text-lg text-white">
              We stand as your trusted partner, guiding you through every turn of the road ahead.
            </p>
            <div>
              <a
                href="#"
                class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-sky-600 bg-white hover:bg-gray-100"
              >
                Contact Us
                <svg class="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'SecondaryCTA',
};
</script>
