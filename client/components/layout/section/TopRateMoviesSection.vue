<template>
  <div>
    <div class="mb-[50px]">
      <section-title path="/movies/top-rate">
        <template #title> Top Rating </template>
        <template #description> Top rating movies of all time </template>
      </section-title>
    </div>
    <list-row-movies :movies="movies" />
  </div>
</template>

<script>
export default {
  props: {
    movies: {
      type: Array,
      require: true,
      default: () => [],
    },
  }
}
</script>