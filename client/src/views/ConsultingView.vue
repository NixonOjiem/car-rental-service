<template>
  <div>
    <NavbarComponent />

    <main class="consulting-page">
      <section class="hero">
        <div class="container hero__content">
          <h1 class="hero__title">Smarter Fleet & Travel Solutions</h1>
          <p class="hero__subtitle">Expert guidance for your personal and business vehicle needs. Optimize costs,
            improve efficiency, and travel with confidence.</p>
          <a href="#contact" class="btn btn-primary">Get a Free Consultation</a>
        </div>
      </section>

      <section class="services">
        <div class="container">
          <h2 class="section-title">What We Offer</h2>
          <p class="section-intro">Tailored advice to meet your unique challenges.</p>
          <div class="services__grid">
            <div v-for="service in services" :key="service.title" class="service-card">
              <div class="service-card__icon" v-html="service.icon"></div>
              <h3 class="service-card__title">{{ service.title }}</h3>
              <p class="service-card__description">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="why-us">
        <div class="container why-us__container">
          <div class="why-us__image">

          </div>
          <div class="why-us__content">
            <h2 class="section-title">Why Partner With Us?</h2>
            <p class="section-intro">We combine industry expertise with a commitment to your success.</p>
            <ul class="why-us__list">
              <li><strong>Data-Driven Insights:</strong> We analyze your usage to provide concrete, cost-saving
                recommendations.</li>
              <li><strong>Vendor Neutral:</strong> Our advice is unbiased. We find the best vehicles and solutions for
                you, regardless of the brand.</li>
              <li><strong>Scalable Solutions:</strong> From a single family trip to a full corporate fleet, our
                strategies grow with you.</li>
              <li><strong>Dedicated Support:</strong> Your personal consultant is always just a call or email away.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="process">
        <div class="container">
          <h2 class="section-title">Our Simple 4-Step Process</h2>
          <div class="process__steps">
            <div class="process__step">
              <div class="process__number">1</div>
              <h3>Discovery Call</h3>
              <p>We listen to your needs, goals, and current challenges.</p>
            </div>
            <div class="process__step">
              <div class="process__number">2</div>
              <h3>Analysis & Strategy</h3>
              <p>We analyze your data and develop a custom-tailored plan.</p>
            </div>
            <div class="process__step">
              <div class="process__number">3</div>
              <h3>Proposal</h3>
              <p>We present a clear, actionable proposal with transparent pricing.</p>
            </div>
            <div class="process__step">
              <div class="process__number">4</div>
              <h3>Execution & Support</h3>
              <p>We help you implement the plan and provide ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="cta">
        <div class="container cta__content">
          <h2 class="cta__title">Ready to Optimize Your Rentals?</h2>
          <p class="cta__text">Let's talk about how we can help you save money and streamline your transportation needs.
            Your initial consultation is always free.</p>
          <a href="mailto:consulting@yourcarrental.com" class="btn btn-secondary">Contact Us Today</a>
        </div>
      </section>

    </main>

    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavbarComponent from '../components/layouts/NavbarComponent.vue';
import FooterComponent from '../components/layouts/FooterComponent.vue';

// Service data - easy to update
const services = ref([
  {
    title: 'Corporate Fleet Management',
    description: 'Optimize your company\'s vehicle fleet for cost-efficiency, reliability, and reduced administrative overhead.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 16h-4a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z"></path><path d="M14 4h-4a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z"></path><path d="M6 10h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2"></path><path d="M18 10h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2"></path><path d="M6 14v-4"></path><path d="M18 14v-4"></path></svg>`
  },
  {
    title: 'Personal Trip Planning',
    description: 'From family vacations to cross-country road trips, we help you select the perfect vehicle and route for a seamless journey.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 17.5l-2.5 2.5l-2.5-2.5l2.5-2.5l2.5 2.5z"></path><path d="M12 21l-7 -7a4 4 0 0 1 0 -5.5a4 4 0 0 1 5.5 -0.5l1.5 1.5l1.5-1.5a4 4 0 0 1 5.5 0.5a4 4 0 0 1 0 5.5l-7 7"></path></svg>`
  },
  {
    title: 'Event & Group Logistics',
    description: 'Coordinating transportation for weddings, conferences, or tours? We provide logistical support and group vehicle planning.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0 -4 -4h-6a4 4 0 0 0 -4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0 -3 -3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
  }
]);
</script>

<style scoped>
/* Google Font Import */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

/* CSS Variables for Colors */
:root {
  --primary-color: #00B4D8;
  --secondary-color: #ADD8E6;
  --dark-color: #0E100F;
  --light-color: #FFFFFF;
  --text-color: #333;
}

/* Base Styles */
.consulting-page {
  font-family: 'Poppins', sans-serif;
  color: var(--text-color);
  background-color: var(--light-color);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

section {
  padding: 80px 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--dark-color);
  text-align: center;
  margin-bottom: 1rem;
}

.section-intro {
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto 4rem auto;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 12px 28px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background-color: var(--primary-color);
  color: var(--light-color);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0, 180, 216, 0.4);
}

.btn-secondary {
  background-color: var(--light-color);
  color: var(--primary-color);
}

.btn-secondary:hover {
  background-color: var(--secondary-color);
  color: var(--dark-color);
}

/* Hero Section */
.hero {
  background-color: var(--secondary-color);
  text-align: center;
  padding: 120px 0;
}

.hero__content {
  max-width: 800px;
}

.hero__title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--dark-color);
  line-height: 1.2;
  margin-bottom: 1rem;
}

.hero__subtitle {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 2rem;
}

/* Services Section */
.services {
  background-color: #f9f9f9;
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.service-card {
  background-color: var(--light-color);
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 180, 216, 0.15);
}

.service-card__icon {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.service-card__title {
  font-size: 1.5rem;
  color: var(--dark-color);
  margin-bottom: 0.5rem;
}

.service-card__description {
  color: #666;
  line-height: 1.6;
}

/* Why Us Section */
.why-us__container {
  display: flex;
  align-items: center;
  gap: 60px;
}

.why-us__image {
  flex: 1;
  background-color: var(--secondary-color);
  border-radius: 10px;
  height: 400px;
  min-width: 300px;
  /* In a real app, you would use an <img> tag */
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
  color: #888;
}

.why-us__content {
  flex: 1;
}

.why-us__content .section-title,
.why-us__content .section-intro {
  text-align: left;
  margin-left: 0;
  margin-right: 0;
}

.why-us__list {
  list-style-type: none;
  padding-left: 0;
}

.why-us__list li {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  padding-left: 35px;
  position: relative;
}

.why-us__list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0;
  color: var(--primary-color);
  font-weight: 700;
  font-size: 1.2rem;
}

/* Process Section */
.process {
  background-color: var(--secondary-color);
}

.process__steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  text-align: center;
}

.process__step {
  background: var(--light-color);
  padding: 30px;
  border-radius: 10px;
}

.process__number {
  width: 50px;
  height: 50px;
  background-color: var(--primary-color);
  color: var(--light-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto 1rem auto;
}

/* CTA Section */
.cta {
  background-color: var(--dark-color);
  color: var(--light-color);
  text-align: center;
}

.cta__content {
  max-width: 700px;
}

.cta__title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--light-color);
}

.cta__text {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: var(--secondary-color);
}


/* Responsive Styles */
@media (max-width: 992px) {
  .hero__title {
    font-size: 2.8rem;
  }

  .section-title {
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  section {
    padding: 60px 0;
  }

  .hero {
    padding: 100px 0;
  }

  .hero__title {
    font-size: 2.2rem;
  }

  .hero__subtitle {
    font-size: 1rem;
  }

  .why-us__container {
    flex-direction: column;
  }

  .why-us__image {
    width: 100%;
    height: 300px;
  }

  .why-us__content .section-title,
  .why-us__content .section-intro {
    text-align: center;
  }
}
</style>
