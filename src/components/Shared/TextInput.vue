<template>
  <input
    :value="modelValue"
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
    modelValue: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleInput($event) {
      this.$emit("update:modelValue", $event.target.value);
    },
  },
};
</script>
