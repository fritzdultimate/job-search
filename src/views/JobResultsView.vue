<template>
  <h1 class="text-6xl font-bold">JobResults View</h1>
  <button @click="goToHome">Go to Home Page</button>
</template>

<script>
export default {
  name: "JobResultsView",
  methods: {
    goToHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
