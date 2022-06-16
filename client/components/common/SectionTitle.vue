<template>
  <div class="container">
    <div class="relative block pl-[15px] border-l-2 border-l-main-color border-b-[1px] border-b-gray-theme-color">
      <h2 class="text-[24px] font-bold"><slot name="title"></slot></h2>
      <p class="text-[16px] py-[10px]"><slot name="description"></slot></p>
      <a href="" class="absolute bottom-[5px] right-[5px] text-main-color italic opacity-90 hover:text-white">
        <nuxt-link :to="{ path: `${path}` }"
          >View all
        </nuxt-link>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    path: {
      type: String,
      default: ''
    }
  }
}
</script>