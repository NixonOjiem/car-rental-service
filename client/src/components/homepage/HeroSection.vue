<template>
  <div class="hero-section">
    <div class="hero-content">
      <h1>Find Your Perfect Ride</h1>
      <p>
        Rent the car of your dreams. Unbeatable prices, unlimited miles, and flexible pick-up options. Your next
        adventure starts here.
      </p>
      <button class="cta-button">Browse Our Fleet</button>
    </div>

    <div class="hero-image-container">
      <img src="/images/land_rover_PNG69.png" alt="Grey Land Rover" class="car-image" />
    </div>

    <div class="wave-container">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HeroSection',
}
</script>

<style scoped>
/* --- ALL YOUR PREVIOUS STYLES (hero-section, hero-content, etc.) REMAIN THE SAME --- */

.hero-section {
  position: relative;
  padding-top: 85px;
  height: 75vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 5%;
  padding-right: 5%;
  background: linear-gradient(45deg, #0077b6, #00b4d8, #90e0ef);
  overflow: hidden;
  box-sizing: border-box;
}

.hero-content {
  z-index: 99;
  flex-basis: 50%;
  color: white;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
}

.hero-content h1 {
  font-family: 'Poppins', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 550px;
}

.cta-button {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #0077b6;
  background-color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.hero-image-container {
  flex-basis: 50%;
  height: 100%;
  position: relative;
}

.car-image {
  position: absolute;
  z-index: 6;
  width: 110%;
  max-width: 700px;
  bottom: 5vh;
  right: -5%;
  transform: rotate(-4deg);
  -webkit-user-drag: none;
  user-select: none;
}


/* --- NEW AND IMPROVED WAVE STYLES --- */

/* This is the main container for our new SVG */
.wave-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 5;
}

.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  min-height: 100px;
  max-height: 150px;
}

/* This is the group of <use> tags inside the SVG */
.parallax>use {
  /* The 'move-forever' animation is applied here */
  animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}

/* We make each wave move at a different speed to create a parallax effect */
.parallax>use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
  /* Slower, bigger wave */
}

.parallax>use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.parallax>use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}

.parallax>use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
  /* Faster, smaller wave */
}

/* The Keyframes for our wave animation */
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }

  100% {
    transform: translate3d(85px, 0, 0);
  }
}

/* --- Responsive Design --- */

@media (max-width: 1024px) {
  .hero-content h1 {
    font-size: 3.2rem;
  }

  .hero-content p {
    font-size: 1.1rem;
  }

  .car-image {
    max-width: 550px;
  }

  .hero-section {
    position: relative;
    padding-top: 85px;
    height: 48vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 5%;
    padding-right: 5%;
    background: linear-gradient(45deg, #0077b6, #00b4d8, #90e0ef);
    overflow: hidden;
    box-sizing: border-box;
  }
}

@media (max-width: 767px) {
  .hero-section {
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    height: auto;
    min-height: 85vh;
    padding-bottom: 200px;
  }

  .hero-content {
    flex-basis: auto;
    width: 100%;
    margin-top: 5vh;
  }

  .hero-content p {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-image-container {
    flex-basis: auto;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 300px;
  }

  .car-image {
    position: absolute;
    width: 90%;
    max-width: 450px;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%) rotate(0deg);
  }

  /* Adjust wave height on mobile */
  .waves {
    height: 10vh;
    min-height: 80px;
  }
}
</style>
