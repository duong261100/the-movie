<template>
  <div class="container">
    <grid-section :movies="movies" />
  </div>
</template>

<script>
import movieAPI from '../../../apis/movie'
export default {
  data() {
    return {
      movies: [],
    }
  },
  async fetch() {
    this.movies = await movieAPI.getMoviesByGenre(
      this.$route.params.genre
    )
  },
}
</script>

<style>
</style>