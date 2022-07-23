<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <li class="mb-7">
        <router-link
          to="/jobs/results/1"
          class="block mx-auto bg-white border border-solid border-brand-gray-2 rounded hover:shadow-gray"
        >
          <div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-gray-2">
            <h2 class="mb-2 text-2xl">
              Technical Program Manager, Perception, Augmented Reality
            </h2>

            <div class="mr-5">
              <span>C2GEN</span>
            </div>

            <div>
              <span>Ifite Awka, Anambra, Nigeria</span>
            </div>
          </div>
        </router-link>
      </li>
    </ol>
  </main>
</template>

<script>
export default {
  name: "JobListings",
};
</script>
