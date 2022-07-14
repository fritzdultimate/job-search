<template>
  <button class="primary">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["text"],
};
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium rounded;
}

.primary {
  @apply text-white bg-brand-blue-1 hover:shadow-blue;
}
</style>
