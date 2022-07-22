<template>
  <div>
    <job-filter-sidebar />
  </div>
</template>

<script>
import JobFilterSidebar from "@/components/JobResults/JobFilterSidebar/JobFilterSidebar.vue";
export default {
  name: "JobResultsView",
  components: {
    JobFilterSidebar,
  },
};
</script>
