<template>
  <div>
    <div class="mb-[50px]">
      <section-title path="/movies/new-movies">
        <template #title> Latest Movies </template>
        <template #description> Recently movies released this month </template>
      </section-title>
    </div>
    <div>
      <div class="container max-h-[600px] flex overflow-hidden">
        <div class="w-2/3 pr-[20px]">
          <base-movie-card class="w-full bg-cover bg-center" />
        </div>
        <div class="w-1/3 pl-[20px]">
          <div class="w-full h-full bg-gray-theme-color">
            <div class="p-[15px] border-b-[2px] border-b-dark-theme-color">
              <h2 class="font-semibold text-[17px] capitalize">New Movie</h2>
              <p class="capitalize mt-[5px]">Playing 2/{{ movies.length }}</p>
            </div>
            <div class="px-[17px] py-[22px] overflow-y-scroll overflow-x-hidden h-full">
              <movie-playlist-item v-for="(movie, index) in movies" :key="index" :movie="movie" />
            </div>
          </div>
        </div>
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
    }
  }
}
</script>