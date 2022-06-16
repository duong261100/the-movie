<template>
  <div class="mb-[2px] overflow-hidden flex">
    <div class="w-1/3 mr-[15px] pb-[25px]">
      <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" alt="">
    </div>
    <div class="w-2/3 relative">
      <a href="" class="font-semibold text-[15px] leading-[17px]">{{ movie.title }}</a>
      <p class="text-[13px]">{{ movie.vote_count }} views</p>
      <p class="text-[14px] italic mt-[4px]">28 days ago</p>
      <p class="text-[14px] absolute bottom-[30px] right-[10px]">1:53:27</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['movie']
}
</script>