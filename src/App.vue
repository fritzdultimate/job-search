<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/jobs/results">Jobs Results</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
