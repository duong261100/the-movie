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
      title: 'New Movies',
      meta: [
        {
          hid: 'New Movies',
          name: 'New Movies',
          content: 'Watch free movies online',
        }
      ],
    }
  },
  async fetch() {
    this.movies = await movieAPI.getLatestMovie(this.$axios)
  },
}
</script>

<style>
</style>