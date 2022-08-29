<template>
  <div class="w-full relative">
    <div class="relative opacity-0" :class="{ slideActive: slideActive === 1 }">
      <div class="after-cover after:bg-slider-bg-after">
        <img src="../../static/images/slider1.jpg" alt="" />
      </div>
      <div class="slider-content absolute bottom-0 left-0 w-full h-auto">
        <div class="container flex">
          <div class="hidden xl:block xl:w-1/3">
            <base-movie-card :movie="movies[0]" class="max-h-[450px]" />
          </div>
          <div class="w-full xl:w-2/3 flex flex-col justify-center items-center mb-[5px] sm:mb-[50px]">
            <h3 class="mb-[6px] text-[14px] sm:text-[20px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]">Welcome To Our Movie Site</h3>
            <h1 class="uppercase tracking-[-3px] font-extralight text-[30px] sm:text-[45px] md:text-[40px] lg:text-[50px] xl:text-[60px]">
              OUR SPECIAL
              <span class="text-main-color">MOVIES</span>
            </h1>
            <p class="hidden md:block text-center leading-7 px-[10px] md:px-[70px] md:mb-[20px] sm:text-[14px] md:text-[18px] xl:text-[18px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              repellatasts distinctio? Minima alias architecto iure ex
              inventore, ut aliquid repudiandae eum. Molestias, doloribus
              dignissimos.
            </p>
            <base-rounded-button class="hidden md:block">Watch Now</base-rounded-button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute top-0 left-0 w-full opacity-0"
      :class="{ slideActive: slideActive === 2 }"
    >
      <div class="relative">
        <div class="after-cover after:bg-slider-bg-after">
          <img src="../../static/images/slider2.jpg" alt="" />
        </div>
        <div class="slider-content absolute bottom-0 left-0 w-full h-auto">
          <div class="container flex">
            <div class="hidden xl:block xl:w-1/3">
              <base-movie-card :movie="movies[1]" class="max-h-[450px]" />
            </div>
            <div class="w-full xl:w-2/3 flex flex-col justify-center items-center mb-[5px] sm:mb-[50px]">
              <h3 class="mb-[6px] text-[14px] sm:text-[20px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]">Welcome To Our Movie Site</h3>
              <h1 class="uppercase tracking-[-3px] font-extralight text-[30px] sm:text-[45px] md:text-[40px] lg:text-[50px] xl:text-[60px]">
                OUR SPECIAL
                <span class="text-main-color">MOVIES</span>
              </h1>
              <p class="hidden md:block sm:text-[14px] md:text-[18px] xl:text-[18px] px-[70px] md:mb-[20px] text-center leading-7">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, repellatasts distinctio? Minima alias architecto iure
                ex inventore, ut aliquid repudiandae eum. Molestias, doloribus
                dignissimos.
              </p>
              <base-rounded-button class="hidden md:block">Watch Now</base-rounded-button>
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