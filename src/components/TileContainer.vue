<script setup>
import Tile from "./Tile.vue"

const env = import.meta.env

const jellyfinUrl = env.VITE_JELLYFIN_URL
const audiobookShelfUrl = env.VITE_AUDIOBOOKSHELF_URL
</script>

<template>
  <div>
    <div class="flex flex-wrap justify-center gap-2 container mb-10">
      <Tile
        logo="/jellyfinLogo.png"
        color="bg-[#4E83D1]/40"
        :href="jellyfinUrl"
      />

      <Tile
        logo="/netflixLogo.png"
        color="bg-[#8E0000]/30"
        href="https://www.netflix.com"
      />

      <Tile
        logo="/primeVideoLogo.webp"
        color="bg-[#2897D3]/20"
        href="https://www.primevideo.com"
      />

      <Tile
        logo="/disneyLogo.png"
        color="bg-[#010340]/30"
        href="https://www.disneyplus.com"
      />

      <Tile
        logo="/appleTvPlusLogo.svg"
        color="bg-[#000000]/30"
        href="https://tv.apple.com/it"
      />

      <Tile
        logo="/nowTvLogo.png"
        color="bg-[#007B83]/20"
        href="https://www.nowtv.it"
      />

      <Tile
        logo="/raiPlayLogo.png"
        color="bg-[#009FF9]/20"
        href="https://www.raiplay.it"
      />

      <Tile
        logo="/audioBookLogo.svg"
        color="bg-[#CD9D49]/30"
        :href="audiobookShelfUrl"
      />
      <Tile
        logo="/youtubeLogo.png"
        color="bg-[#E32C27]/30"
        href="https://www.youtube.com"
      />
      <Tile
        logo="/twitchLogo.png"
        color="bg-[#65459B]/20"
        href="https://www.twitch.tv"
      />
    </div>
  </div>
</template>
