<template>
  <div>
    <div class="mb-[50px]">
      <section-title path="/movies/trailer-movies">
        <template #title> Upcoming Movie </template>
        <template #description> Find the latest new movies coming soon to theaters </template>
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
    }
  }
}
</script>