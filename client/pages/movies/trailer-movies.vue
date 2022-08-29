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
      title: 'Trailer',
      meta: [
        {
          hid: 'Trailer',
          name: 'Trailer',
          content: 'Watch free movies online',
        }
      ],
    }
  },
  async fetch() {
    this.movies = await movieAPI.getUpcomingMovie(this.$axios)
  },
}
</script>

<style>
</style>