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
  head() {
    return {
      title: `${this.$route.params.genre}`,
      meta: [
        {
          hid: `${this.$route.params.genre}`,
          name: `${this.$route.params.genre}`,
          content: 'Watch free movies online',
        }
      ],
    }
  },
  async fetch() {
    this.movies = await movieAPI.getMoviesByGenre(
      this.$axios,
      this.$route.params.genre
    )
  },
}
</script>

<style>
</style>