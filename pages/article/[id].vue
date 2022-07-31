<template>
  <div>
    <v-md-preview :text="data.data[0].article_content"></v-md-preview>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
const navList = [
  { name: '首页', link: '/' },
  { name: '文章列表', link: '/article/12' },
  { name: '动态', link: '/state' },
  { name: '在线壁纸', link: '/wallpaper' },
  { name: '关于', link: '/about' },
]
const route = useRoute()
const router = useRouter()
const { data, pending, error, refresh } = await useAsyncData('article', () => {
  let { id } = route.params
  const index = id.indexOf('.html')

  if (index === -1) {
    navigateTo(`/article/${id}.html`)
  } else {
    id = id.slice(0, index)
  }
  console.log('route.params', id)
  return $fetch('https://api.liuqidong.com/blog/getArticle', {
    params: { id: id },
  })
})
</script>
