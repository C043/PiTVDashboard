<script setup>
import TileContainer from "./components/TileContainer.vue";
import Hero from "./components/Hero.vue";
</script>

<template>
  <div class="flex flex-col gap-10 justify-center items-center pt-5 text-white">
    <div class="flex justify-center">
      <Hero />
    </div>
    <div class="flex justify-center items-center">
      <TileContainer />
    </div>
  </div>
</template>

<style scoped></style>
