<template lang="">
  <div>
    <NavbarComponent />
    <p>this is book view</p>
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import NavbarComponent from '../components/layouts/NavbarComponent.vue';
import FooterComponent from '../components/layouts/FooterComponent.vue';

export default {
  components: { NavbarComponent, FooterComponent },
  methods: {},
  data() {
    return {}
  },
  computed: {},

}
</script>

<style lang=""></style>
