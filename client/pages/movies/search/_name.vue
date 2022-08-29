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
  head() {
    return {
      title: `${this.$route.params.name}`,
      meta: [
        {
          hid: `${this.$route.params.name}`,
          name: `${this.$route.params.name}`,
          content: 'Watch free movies online',
        }
      ],
    }
  },
  async fetch() {
    this.movies = await movieAPI.searchMoviesByName(
      this.$axios,
      this.$route.params.name
    )
  },
}
</script>

<style>
</style>