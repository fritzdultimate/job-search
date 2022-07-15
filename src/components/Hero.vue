<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20 bg-yellow-200">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1 border border-blue-700">
          1 column
        </div>
        <div class="col-start-2 col-span-5 border border-blue-700">
          5 columns
        </div>
        <div class="col-start-7 col-span-5 border border-blue-700">
          5 columns
        </div>
        <div class="col-start-12 col-span-1 border border-blue-700">
          1 column
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Hero",
  beforeCreate() {
    console.log("component about to be created");
  },
  created() {
    console.log("component created");
  },
  beforeMount() {
    console.log("component is about to be mounted");
  },
  mounted() {
    console.log("component mounted");
  },
};
</script>
