<template>
  <h1 class="text-6xl font-bold">JobResults View</h1>
  <h2>{{ experiment }}</h2>
</template>

<script>
export default {
  name: "JobResultsView",
  computed: {
    experiment() {
      console.log(this.$router);
      return "Irrelevant";
    },
  },
};
</script>
