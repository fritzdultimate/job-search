<template>
  <input
    :value="value"
    type="text"
    :placeholder="placeholder"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    handleInput($event) {
      this.value = $event.target.value;
    },
  },
};
</script>
