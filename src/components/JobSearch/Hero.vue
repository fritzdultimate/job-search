<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <headline />
          <job-search-form />
        </div>

        <div class="col-start-7 col-span-5 self-start justify-self-center">
          <img
            class="w-[500px] h-[500px] object-contain"
            src="https://careers.google.com/jobs/dist/img/assets/hero-04_1x.5377e160fa426c8b388a861f23cc185b.png"
          />
        </div>

        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
  </main>
</template>

<script>
import Headline from "@/components/JobSearch/Headline.vue";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";
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
