<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
    mounted() {
    // 15 minutes in milliseconds
    const refreshInterval = 30 * 57 * 1000;

    setInterval(() => {
      window.location.reload();
    }, refreshInterval); // Refresh every 15 minutes
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #013525;
}
</style>