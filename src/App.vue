<template>
  <div>
    <main-nav />
    <router-view />
  </div>
</template>

<script>
import MainNav from "@/components/Navigation/MainNav.vue";
export default {
  name: "App",
  components: {
    MainNav,
  },
};
</script>
