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
      title: 'All Movies',
      meta: [
        {
          hid: 'All Movies',
          name: 'All Movies',
          content: 'Watch free movies online',
        }
      ],
    }
  },
  async fetch() {
    this.movies = await movieAPI.getAllMovie(this.$axios)
  },
}
</script>

<style>
</style>