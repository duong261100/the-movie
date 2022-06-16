<template>
  <div class="w-full relative">
    <div class="relative opacity-0" :class="{ slideActive: slideActive === 1 }">
      <div class="after-cover after:bg-slider-bg-after">
        <img src="../../static/images/slider1.jpg" alt="" />
      </div>
      <div class="slider-content absolute bottom-0 left-0 w-full h-auto">
        <div class="container flex">
          <div class="w-1/3">
            <base-movie-card :movie="movies[0]" class="max-h-[450px]" />
          </div>
          <div class="w-2/3 flex flex-col justify-center items-center">
            <h3 class="text-[20px] mb-[6px]">Welcome To Our Movie Site</h3>
            <h1 class="text-[60px] uppercase tracking-[-3px] font-extralight">
              OUR SPECIAL
              <span class="text-main-color">MOVIES</span>
            </h1>
            <p class="text-[18px] px-[70px] mb-[20px] text-center leading-7">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              repellatasts distinctio? Minima alias architecto iure ex
              inventore, ut aliquid repudiandae eum. Molestias, doloribus
              dignissimos.
            </p>
            <base-rounded-button>Watch Now</base-rounded-button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute top-0 left-0 opacity-0"
      :class="{ slideActive: slideActive === 2 }"
    >
      <div class="relative">
        <div class="after-cover after:bg-slider-bg-after">
          <img src="../../static/images/slider2.jpg" alt="" />
        </div>
        <div class="slider-content absolute bottom-0 left-0 w-full h-auto">
          <div class="container flex">
            <div class="w-1/3">
              <base-movie-card :movie="movies[1]" class="max-h-[450px]" />
            </div>
            <div class="w-2/3 flex flex-col justify-center items-center">
              <h3 class="text-[20px] mb-[6px]">Welcome To Our Movie Site</h3>
              <h1 class="text-[60px] uppercase tracking-[-3px] font-extralight">
                OUR SPECIAL
                <span class="text-main-color">MOVIES</span>
              </h1>
              <p class="text-[18px] px-[70px] mb-[20px] text-center leading-7">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, repellatasts distinctio? Minima alias architecto iure
                ex inventore, ut aliquid repudiandae eum. Molestias, doloribus
                dignissimos.
              </p>
              <base-rounded-button>Watch Now</base-rounded-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['movies'],
  data() {
    return {
      slideActive: 1,
    }
  },
  created() {
    setInterval(() => {
      this.slideActive = this.slideActive === 1 ? 2 : 1
    }, 5000)
  },
}
</script>

<style>
</style>