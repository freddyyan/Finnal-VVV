<template>
<div :key="componentKey">
  <Navbar />
  <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      componentKey: 0, // key value for triggering re-render
    };
  },
  mounted() {
    // 15 minutes in milliseconds
    const refreshInterval = 6 * 60 * 1000;

    setInterval(() => {
      // Incrementing the key to force re-render
      this.componentKey += 1;
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