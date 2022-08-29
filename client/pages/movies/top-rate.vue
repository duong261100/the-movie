<template>
  <div class="container">
    <grid-section :movies="movies" />
  </div>
</template>

<script>
import movieAPI from '../../apis/movie'
export default {
  data() {
    return {
      movies: [],
    }
  },
  head() {
    return {
      title: 'Top Rate Movies',
      meta: [
        {
          hid: 'Top Rate Movies',
          name: 'Top Rate Movies',
          content: 'Watch free movies online',
        }
      ],
    }
  },
  async fetch() {
    this.movies = await movieAPI.getTopRateMovie(this.$axios)
  },
}
</script>

<style>
</style>