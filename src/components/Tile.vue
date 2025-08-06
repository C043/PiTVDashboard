<script setup>
const { logo, color, href } = defineProps(["logo", "color", "href"])
</script>

<template>
  <a :href="href">
    <div
      class="flex justify-center items-center h-50 w-100 xl:w-92 rounded-2xl backdrop-blur-2xl border border-white/20 hover:scale-[1.04] transition-all shadow-sm p-5"
      :class="color"
    >
      <img :src="logo" class="h-full" />
    </div>
  </a>
</template>
