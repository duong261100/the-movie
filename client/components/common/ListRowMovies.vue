<template>
  <div>
    <div class="scrollX container overflow-hidden">
      <div class="w-[4290px] flex left-0 space-x-[40px]">
        <base-movie-card
          v-for="(movie, index) in movies"
          :key="index"
          class="rounded-[20px] min-w-[350px]"
          :movie="movie"
        />
      </div>
    </div>
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
  },
  mounted() {
    const scrollContainer = document.querySelector('.scrollX')

    scrollContainer.addEventListener('wheel', (evt) => {
      evt.preventDefault()
      scrollContainer.scrollLeft += evt.deltaY / 2
    })
  },
}
</script>