<template>
  <div>
    <bread-crumb />
    <div class="container py-[50px]">
      <base-movie-detail :movie="movie" />
      <div class="mt-[50px]">
        <h3 class="text-[25px] font-semibold leading-[35px] my-[25px]">
          Movie Story
        </h3>
        <p class="text-[16px] my-[25px]">
          {{ movie.overview }}
        </p>
        <div class="w-[800px] m-auto">
          <img
            :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
            alt=""
          />
        </div>
        <p class="text-[16px] my-[25px]">
          {{ movie.overview }}
        </p>
      </div>
      <div
        class="bg-gray-theme-color h-[500px] my-[50px] p-[50px] rounded-[15px]"
      >
        <h2 class="text-[25px] font-semibold leading-[35px] mb-[25px]">
          Comments(10)
        </h2>
      </div>
      <ads-section />
    </div>
  </div>
</template>

<script>
import movieAPI from '../../apis/movie'
export default {
  data() {
    return {
      movie: []
    }
  },
  async fetch() {
    this.movie = await movieAPI.getMovieDetail(this.$route.params.id)
  }
}
</script>

<style>
</style>