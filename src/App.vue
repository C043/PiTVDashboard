<script setup>
import TileContainer from "./components/TileContainer.vue";
import Hero from "./components/Hero.vue";
const backgroundStyle = {
  backgroundImage: `
        linear-gradient(to right, #262626 1px, transparent 1px),
        linear-gradient(to bottom, #262626 1px, transparent 1px)
      `,
  backgroundSize: "20px 20px",
};
</script>

<template>
  <div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
    <div className="absolute inset-0 z-0" :style="backgroundStyle" />
    <div class="flex flex-col gap-10 justify-center items-center pt-5">
      <div class="flex justify-center">
        <Hero />
      </div>
      <div class="flex justify-center items-center">
        <TileContainer />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
