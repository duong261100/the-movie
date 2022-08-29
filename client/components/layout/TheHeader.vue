<template>
  <div id="topnav" class="h-auto bg-transparent absolute top-0 left-0">
    <div v-if="isSearching" class="container transition-all">
      <div class="top-search py-[10px] px-[20px] bg-[#0a1726] flex">
        <i class="fa fa-search m-auto cursor-pointer"></i>
        <input
          id="text"
          v-model="searchValue"
          type="text"
          placeholder="Search..."
          class="bg-transparent px-[15px] h-[40px] grow placeholder-[#333]"
          @keyup.enter="searchMovie()"
        />
        <i
          class="fa fa-times m-auto cursor-pointer"
          @click="isSearching = false"
        ></i>
      </div>
    </div>
    <div class="container flex h-full py-[20px] items-center relative">
      <div class="logo mr-5">
        <a href="/">
          <img src="../../static/images/logo.png" alt="" />
        </a>
      </div>
      <div class="nav-container grow">
        <ul class="flex justify-center font-semibold text-sm md:text-base xl:text-lg">
          <li
            class="h-full px-4 py-3 cursor-pointer hover:text-main-color"
          >
            <a href="/">Home</a>
          </li>
          <li
            class="hidden md:block h-full px-4 py-3 cursor-pointer hover:text-main-color"
          >
            <a href="/movies/new-movies">New Movies</a>
          </li>
          <li
            class="hidden md:block h-full px-4 py-3 cursor-pointer hover:text-main-color"
            :class="{ active: genresHovering }"
            @mouseover="genresHovering = true"
            @mouseout="genresHovering = false"
          >
            Genres
            <ul class="drop-down-menu drop-down-genres">
              <li v-for="genre in genresList" :key="genre.id">
                <nuxt-link :to="{ path: `/movies/genre/${genre.id}` }">{{
                  genre.name
                }}</nuxt-link>
              </li>
            </ul>
          </li>
          <li
            class="
              hidden
              md:block
              h-full
              px-4
              py-3
              cursor-pointer
              hover:text-main-color
              relative
            "
            :class="{ active: countryHovering }"
            @mouseover="countryHovering = true"
            @mouseout="countryHovering = false"
          >
            Language
            <ul class="drop-down-menu drop-down-country pb-[5px] pt-[20px]">
              <li>
                <nuxt-link :to="{ path: '/movies/language/ko' }"
                  >Korean</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="{ path: '/movies/language/en-us' }"
                  >English</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="{ path: '/movies/language/zh-cn' }"
                  >Chinese</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="{ path: '/movies/language/vi' }"
                  >Vietnamese</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="{ path: '/movies/language/ja' }"
                  >Japanese</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="{ path: '/movies/language/th' }"
                  >Thai</nuxt-link
                >
              </li>
            </ul>
          </li>
          <li
            class="hidden md:block h-full px-4 py-3 cursor-pointer hover:text-main-color"
          >
            Series
          </li>
          <li
            class="hidden md:block h-full px-4 py-3 cursor-pointer hover:text-main-color"
          >
            <a href="/movies/top-rate">Top rate</a>
          </li>
          <li
            class="hidden md:block h-full px-4 py-3 cursor-pointer hover:text-main-color"
          >
            <a href="/movies/trailer-movies">Trailer</a>
          </li>
        </ul>
      </div>
      <div class="search ml-auto" @click="isSearching = !isSearching">
        <base-rounded-button>Search</base-rounded-button>
      </div>
    </div>
  </div>
</template>

<script>
import genreAPI from '../../apis/genre'
export default {
  data() {
    return {
      genresHovering: false,
      countryHovering: false,
      genresList: [],
      isSearching: false,
      searchValue: ''
    }
  },
  async fetch() {
    const genres = await genreAPI.getAllGenre(this.$axios)
    this.genresList = await genres.genres
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      const navbar = document.querySelector('#topnav')
      window.onscroll = () => {
        if (window.scrollY > 300) {
          navbar.classList.add('topnav-active')
        } else {
          navbar.classList.remove('topnav-active')
        }
      }
    },
    searchMovie() {
      this.$router.push({path: `/movies/search/${this.searchValue}`});
    }
  },
}
</script>

<style scoped>
input {
  background-color: transparent;
}
</style>