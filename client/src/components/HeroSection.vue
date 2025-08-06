<template>
  <div class="hero-section">
    <div class="hero-content">
      <h1>Find Your Perfect Ride</h1>
      <p>
        Rent the car of your dreams. Unbeatable prices, unlimited miles, and flexible pick-up options. Your next adventure starts here.
      </p>
      <button class="cta-button">Browse Our Fleet</button>
    </div>

    <div class="hero-image-container">
      <img
        src="/images/land_rover_PNG69.png"
        alt="Blue BMW i8 driving on a wave"
        class="car-image"
      />
    </div>

    <div class="wave">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-17,148.63,10.06,209.1,35.73,48.55,20.6,101.71,32.23,158.42,35.85,53.27,3.35,101.17-23.72,150.48-39.78C1151.71,37.22,1200,42.88,1200,42.88V120H0V42.88c0,0,45.51,3.22,86.86-10.79,34.14-11.45,64.5-24.16,94.49-33.7Z" class="shape-fill"></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>

<style scoped>
.hero-section {
  position: relative;
  /* Navbar is ~88px tall (p-4 + my-2 + content). This padding pushes the content down. */
  padding-top: 85px;
  height: 85vh;
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
  z-index: 10;
  flex-basis: 50%; /* Take up 50% of the width */
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
  flex-basis: 50%; /* Take up the other 50% */
  height: 100%;
  position: relative;
}

.car-image {
  position: absolute;
  z-index: 6;
  width: 110%; /* Make image slightly larger than its container */
  max-width: 700px;
  bottom: 5vh;
  right: -5%;
  transform: rotate(-4deg);
  -webkit-user-drag: none;
  user-select: none;
}

.wave {
  position: absolute;
  bottom: -1px; /* Avoid potential thin line artifact */
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 5;
}

.wave svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px;
}

.wave .shape-fill {
  fill: #FFFFFF;
}

/* --- Responsive Design --- */

/* For Tablets and smaller laptops */
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
}

/* For mobile phones */
@media (max-width: 767px) {
  .hero-section {
    flex-direction: column; /* Stack content on top of image */
    justify-content: flex-start; /* Align content to the top */
    text-align: center;
    height: auto;
    min-height: 100vh; /* Ensure it still takes up the full screen */
    padding-bottom: 200px; /* Add space at the bottom for the wave and car */
  }

  .hero-content {
    flex-basis: auto; /* Let content size itself */
    width: 100%;
    margin-top: 5vh; /* Add some space from the top */
  }

  .hero-content p {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-image-container {
    flex-basis: auto;
    width: 100%;
    position: absolute; /* Keep it absolute to position relative to hero-section */
    bottom: 0;
    left: 0;
    height: 300px; /* Give it an explicit height */
  }

  .car-image {
    position: absolute;
    width: 90%;
    max-width: 450px;
    bottom: 80px; /* Position it on top of the wave */
    left: 50%;
    transform: translateX(-50%) rotate(0deg); /* Center it and reset rotation */
  }

  .wave svg {
    height: 100px; /* Make wave smaller on mobile */
  }
}
</style>
