<template>
  <router-link
    :to="path"
    tag="button"
    class="
      w-[150px]
      px-[26px]
      pb-[10px]
      pt-[8px]
      mt-1
      font-semibold
      rounded-[10px]
      text-base
      hover:bg-[#fff] hover:text-[#333]
    "
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: '/'
    }
  }
}
</script>