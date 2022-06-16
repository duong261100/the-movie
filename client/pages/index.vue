<template>
  <div class="">
    <the-slider :movies="nowPlayingMovie" />
    <div class="mt-[50px] mb-[100px] space-y-[100px]">
      <top-rate-movies-section :movies="topRateMovie" />
      <latest-movies-section :movies="latestMovie" />
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
  async fetch() {
    this.nowPlayingMovie = await movieAPI.getNowPlayingMovie().then(res => res.slice(0, 2))
    this.topRateMovie = await movieAPI.getTopRateMovie().then(res => res.slice(0, 10))
    this.latestMovie = await movieAPI.getLatestMovie()
    this.upcomingMovie = await movieAPI.getUpcomingMovie().then(res => res.slice(0, 10))
  }
}
</script>
