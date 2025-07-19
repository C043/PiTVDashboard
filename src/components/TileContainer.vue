<script setup>
import Tile from "./Tile.vue";
</script>

<template>
  <div class="bg-red-100 h-dvh">
    <div class="flex flex-wrap justify-center gap-5 container m-auto pt-10">
      <Tile
        logo="/jellyfinLogo.png"
        color="bg-[#4E83D1]/30"
        href="http://100.98.112.15:8096/web/#/home.html"
      />

      <Tile
        logo="/netflixLogo.png"
        color="bg-[#8E0000]/30"
        href="https://www.netflix.com"
      />

      <Tile
        logo="/primeVideoLogo.webp"
        color="bg-[#2897D3]/30"
        href="https://www.primevideo.com"
      />

      <Tile
        logo="/disneyLogo.png"
        color="bg-[#010340]/30"
        href="https://www.disneyplus.com"
      />

      <Tile
        logo="/nowTvLogo.png"
        color="bg-[#007880]/30"
        href="https://www.nowtv.it"
      />

      <Tile
        logo="/raiPlayLogo.png"
        color="bg-[#009FF9]/30"
        href="https://www.raiplay.it"
      />
    </div>
  </div>
</template>
