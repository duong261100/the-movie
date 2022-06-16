<template>
  <div class="relative group overflow-hidden hover:cursor-pointer w-[350px]">
    <nuxt-link :to="{name: 'movies-slug', params: { slug: movie.title, id: movie.id }}">
      <div
        class="
          after-cover after:bg-movie-bg-after
          group-hover:after:bg-movie-bg-hover
          group-hover:cursor-pointer
          group-hover:scale-[1.2]
        "
      >
        <img
          :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
          alt=""
          class="w-full"
        />
      </div>
      <div class="absolute top-0 left-0 w-full h-full">
        <div class="mt-6 flex w-full items-center">
          <div class="translate-x-[-100%] group-hover:translate-x-[0%]">
            <base-tag>{{ movie.release_date }}</base-tag>
          </div>
          <div class="ml-auto pr-4">
            <span
              ><i
                class="fa-solid fa-star text-[14px] mr-[2px]"
                style="color: rgb(254, 252, 160)"
              ></i
            ></span>
            <span>{{ movie.vote_average }}/10</span>
          </div>
        </div>

        <div
          class="
            h-[50%]
            w-full
            flex
            justify-center
            items-center
            translate-y-[-100%]
            group-hover:translate-y-[-20%]
          "
        >
          <i class="fa-regular fa-circle-play text-[50px]"></i>
        </div>

        <div class="absolute bottom-0 overflow-hidden mb-[75px]">
          <div class="translate-y-[55px] group-hover:translate-y-[0]">
            <div class="text-[25px] font-[750] capitalize px-6 leading-7">
              <h2 class="">{{ movie.title }}</h2>
            </div>
            <div class="px-[22px] py-3 font-[750] text-[18px]">
              <p>Category: English Animation Movies</p>
              <div class="font-normal text-[14px] mt-3">
                <p>RELEASE: OCTOBER 26, 2022</p>
                <p>GENRE: ACTION, DRAMA</p>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute bottom-1 flex w-full">
          <div class="left">
            <tag-black>Details</tag-black>
          </div>
          <div class="ml-auto translate-x-[100%] group-hover:translate-x-0">
            <tag-black-reverse>{{ movie.vote_count }} views</tag-black-reverse>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default() {
        return {
          id: 278,
          title: 'The Shawshank Redemption',
          poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
          backdrop_path: '/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg',
          original_language: 'en',
          release_date: '1994-09-23',
          vote_average: 8.7,
          vote_count: 21500,
          overview:
            'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
        }
      },
    },
  },
}
</script>