<template>
  <div class="container">
    <bread-crumb />
    <base-paginator
      class="my-[30px] mr-[30px]"
      :total-pages="totalPages"
      :total="totalMovies"
      :per-page="perPage"
      :current-page="currentPage"
      :has-more-pages="hasMorePages"
      @pagechanged="showMore"
    />
    <div class="container flex flex-wrap w-[100%] min-h-screen justify-around">
      <base-movie-card
        v-for="(movie, index) in showedMovie"
        :key="index"
        :movie="movie"
        class="mb-[30px]"
      />
    </div>
    <base-paginator
      class="mb-[30px] mr-[30px]"
      :total-pages="totalPages"
      :total="totalMovies"
      :per-page="perPage"
      :current-page="currentPage"
      :has-more-pages="hasMorePages"
      @pagechanged="showMore"
    />
  </div>
</template>

<script>
export default {
  props: {
    movies: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      page: 1,
      perPage: 9,
      currentPage: 1,
    }
  },
  computed: {
    totalMovies() {
      return this.movies.length
    },
    totalPages() {
      return Math.ceil(this.movies.length / this.perPage)
    },
    showedMovie() {
      const start = (this.currentPage - 1) * this.perPage
      return this.movies.slice(start, start + this.perPage)
    },
    hasMorePages() {
      return this.currentPage === this.totalPages
    }
  },
  methods: {
    showMore(page) {
      this.page = page
      this.currentPage = page
    },
  },
}
</script>

<style>
</style>