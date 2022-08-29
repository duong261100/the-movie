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
      title: `${this.$route.params.language}`,
      meta: [
        {
          hid: `${this.$route.params.language}`,
          name: `${this.$route.params.language}`,
          content: 'Watch free movies online',
        }
      ],
    }
  },
  async fetch() {
    this.movies = await movieAPI.getMoviesByLanguage(
      this.$axios,
      this.$route.params.language
    )
  },
}
</script>

<style>
</style>