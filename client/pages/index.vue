<template>
  <div class="">
    <the-slider :movies="nowPlayingMovie" />
    <div class="mt-[50px] mb-[100px] space-y-[100px]">
      <top-rate-movies-section :movies="topRateMovie" />
      <latest-movies-section :movies="latestMovie" class="hidden lg:block" />
      <ads-section />
      <upcoming-movies-section :movies="upcomingMovie" />
    </div>
  </div>
</template>

<script>
import movieAPI from '../apis/movie'
export default {
  name: 'IndexPage',
  layout: 'indexLayout',
  data() {
    return {
      nowPlayingMovie: [],
      topRateMovie: [],
      latestMovie: [],
      upcomingMovie: [],
    }
  },
  head() {
    return {
      title: 'The Movie',
      meta: [
        {
          hid: 'The Movie',
          name: 'The Movie',
          content: 'Watch free movies online',
        }
      ],
    }
  },
  async fetch() {
    this.nowPlayingMovie = await movieAPI.getNowPlayingMovie(this.$axios).then(res => res.slice(0, 2))
    const resa = await this.$axios.get('/api/movie/top-rate');
    this.topRateMovie = await resa.data;
    this.latestMovie = await movieAPI.getLatestMovie(this.$axios)
    this.upcomingMovie = await movieAPI.getUpcomingMovie(this.$axios).then(res => res.slice(0, 10))
  }
}
</script>
