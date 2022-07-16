<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <headline />
          <job-search-form />
        </div>

        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img class="w-80 h-80 object-contain" src="">
        </div>

        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
  </main>
</template>

<script>
import Headline from "@/components/Headline.vue";
import JobSearchForm from "@/components/JobSearchForm.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Hero",
  components: {
    Headline,
    JobSearchForm,
  },
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
