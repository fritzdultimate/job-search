<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a :href="url" class="flex items-center h-full text-xl">
          {{ company }}
        </a>

        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li class="h-full">
              <a href="" class="flex items-center h-full py-2.5">Teams</a>
            </li>

            <li class="h-full ml-9" v-for="menuItem in menuItems">
              <a href="" class="flex items-center h-full py-2.5">
                {{ menuItem }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Fritz Careers",
      url: "https://careers.google.com",
      menuItems: ["Teams", "Locations", "How we hire", "Students", "Jobs"],
    };
  },
};
</script>
