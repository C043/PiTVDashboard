<script setup>
const props = defineProps(["logo", "color", "href"]);
</script>

<template>
  <a :href="href">
    <div
      class="flex justify-center items-center h-50 w-92 rounded-2xl backdrop-blur-sm border border-white/20 hover:scale-[1.1] transition-all shadow-sm"
      :class="color"
    >
      <img :src="logo" class="h-40" />
    </div>
  </a>
</template>
