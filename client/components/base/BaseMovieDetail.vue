<template>
  <div class="flex flex-col sm:flex-row">
    <div class="w-full md:w-1/3 px-[10px] py-[20px] sm:py-[0]">
      <img
        :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
        alt=""
        class="rounded-[10px]"
      />
    </div>
    <div class="w-full md:w-2/3 px-[50px] py-[0px]">
      <h3 class="text-[22px] font-semibold">
        {{ movie.title }}
      </h3>
      <div class="my-[9px]">
        <i
          class="fa-solid fa-star text-[14px] mr-[2px]"
          style="color: orange"
        ></i>
        <i
          class="fa-solid fa-star text-[14px] mr-[2px]"
          style="color: orange"
        ></i>
        <i
          class="fa-solid fa-star text-[14px] mr-[2px]"
          style="color: orange"
        ></i>
        <i
          class="fa-solid fa-star text-[14px] mr-[2px]"
          style="color: orange"
        ></i>
        <i
          class="fa-solid fa-star text-[14px] mr-[2px]"
          style="color: white"
        ></i>
      </div>
      <ul class="space-y-[10px]">
        <li>
          <span class="w-[100px] font-semibold inline-block">
            Category
            <label class="float-right">:</label>
          </span>
          <span class="ml-[11px]">English Animation Movies</span>
        </li>
        <li>
          <span class="w-[100px] font-semibold inline-block">
            Actor
            <label class="float-right">:</label>
          </span>
          <span class="ml-[11px]">Priti Kapel, Justin Orjun</span>
        </li>
        <li>
          <span class="w-[100px] font-semibold inline-block">
            Genre
            <label class="float-right">:</label>
          </span>
          <span class="ml-[11px]">Drama, Action Release</span>
        </li>
        <li>
          <span class="w-[100px] font-semibold inline-block">
            Release
            <label class="float-right">:</label>
          </span>
          <span class="ml-[11px]">{{ movie.release_date }}</span>
        </li>
        <li>
          <span class="w-[100px] font-semibold inline-block">
            Language
            <label class="float-right">:</label>
          </span>
          <span class="ml-[11px]">{{ movie.original_language }}</span>
        </li>
        <li>
          <span class="w-[100px] font-semibold inline-block">
            Category
            <label class="float-right">:</label>
          </span>
          <span class="ml-[11px]">English Animation Movies</span>
        </li>
        <li>
          <span class="w-[100px] font-semibold inline-block">
            Actor
            <label class="float-right">:</label>
          </span>
          <span class="ml-[11px]">Priti Kapel, Justin Orjun</span>
        </li>
        <li>
          <span class="w-[100px] font-semibold inline-block">
            Share
            <label class="float-right">:</label>
          </span>
          <span class="ml-[11px] text-[20px] space-x-[10px]">
            <i class="fa-brands fa-facebook-square"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-instagram"></i>
          </span>
        </li>
        <li>
          <base-reg-button class="bg-[#f44336] mr-[10px]" :path="`/movies/${movie.title}`"
            >Watch now</base-reg-button
          >
          <base-reg-button class="bg-[#008CBA]">Trailer</base-reg-button>
        </li>
        <p class="text-[16px]" style="margin-top: 20px!important;">
          {{ description }}
        </p>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      require: true,
      default: () => {}
    }
  },
  computed: {
    description() {
      if (!this.movie.overview || this.movie.overview.length <= 200) return this.movie.overview
      else return this.movie.overview.slice(0, 200) + '...' 
    }
  }
}
</script>