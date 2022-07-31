<template>
  <div class="fixed z-10 w-full h-16 bg-white shadow-sm" :class="{ 'shadow-md': isScroll }">
    <div class="flex items-center h-16 px-4 mx-auto md:w-3/5 md:px-0" :class="{ 'px-8': showSearch }">
      <div class="hidden mr-12 md:block">
        <NuxtLink to="/">
          <img src="/images/logo.png" width="45px" height="45px" />
        </NuxtLink>
      </div>
      <div class="block md:hidden" v-if="!showSearch">
        <SvgIcon color="#37cdbe" name="menu-fold-one" />
      </div>
      <ul class="flex-1 hidden md:flex">
        <li class="flex-shrink-0 mr-6" v-for="item in navList" :key="item.link">
          <NuxtLink :to="item.link" active-class="text-accent ">
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
      <button class="flex justify-end flex-1 md:hidden" @click="setShowSearch" v-if="!showSearch">
        <SvgIcon color="#37cdbe" class="block h-5" name="search" />
      </button>
      <div class="relative z-50 w-full mr-2" v-if="showSearch">
        <SvgIcon
          class="absolute z-10 block h-4 ml-3 transition-colors duration-300 ease-linear fill-current top-3 text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"
          name="search" />
        <SvgIcon @click="setShowSearch"
          class="absolute right-0 z-10 block h-4 mr-3 transition-colors duration-300 ease-linear fill-current top-3 text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"
          name="close" />
        <input id="algolia-main" name="search-main" placeholder="搜索"
          class="w-full h-10 px-4 pl-10 font-medium transition-colors duration-300 ease-linear rounded-full outline-none nui-search-input ds-input"
          style="position: relative; vertical-align: top; background-color: #edf2f7;" />
      </div>
      <div class="relative hidden mr-2 md:inline-flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
          class="absolute z-10 block h-4 ml-3 transition-colors duration-300 ease-linear fill-current top-3 text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"
          data-v-5b57aac2="">
          <path
            d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
            data-v-5b57aac2=""></path>
        </svg>
        <input id="algolia-main" name="search-main" placeholder="搜索"
          class="w-full h-10 px-4 pl-10 font-medium transition-colors duration-300 ease-linear rounded-full outline-none nui-search-input ds-input"
          style="position: relative; vertical-align: top; background-color: #edf2f7;" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { throttle } from 'lodash'
const navList = [
  { name: '首页', link: '/' },
  { name: '动态', link: '/state' },
  { name: '在线壁纸', link: '/wallpaper' },
  { name: '关于', link: '/about' },
]
const isScroll = ref(false)
const showSearch = ref(false)
onMounted(() => {
  window && window.addEventListener('scroll', throttle((e) => {
    if (window.scrollY > 20) {
      isScroll.value = true
    } else {
      isScroll.value = false
    }
  }, 200), true)
})
const setShowSearch = () => {
  showSearch.value = !showSearch.value
}
</script>
