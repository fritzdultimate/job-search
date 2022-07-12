<template>
  <button
    @click="handleClick"
    class="px-5 py-3 font-medium text-white border-0 rounded bg-brand-blue-1 hover:shadow-blue"
  >
    Sign In
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  methods: {
    handleClick() {
      console.log("I have been clicked");
    },
  },
};
</script>
