<template>
  <div class="container">
    <list-column-movies :movies="movies" />
  </div>
</template>

<script>
import movieAPI from '../../../apis/search'
export default {
  data() {
    return {
      movies: [],
    }
  },
  async fetch() {
    this.movies = await movieAPI.searchMoviesByName(
      this.$route.params.name
    )
  },
}
</script>

<style>
</style>