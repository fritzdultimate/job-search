<template>
  <img :src="imageLink" class="w-8 h-8 object-contain rounded-3xl" />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://png.pngitem.com/pimgs/s/487-4876417_link-head-png-toon-link-face-png-transparent.png",
    };
  },
};
</script>
