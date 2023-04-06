<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Item from './Item.vue'
 
import getimages from '../scripts/getImages.js'

const images = ref(getimages(10))
const scrollComponent = ref(null)

const props = defineProps({
  msg: String
})

const titleScroll = ref('Infinity scroll')

const loadMoreImages = () => {
  let newImages = getimages(30)
  console.log(newImages)
  images.value.push(...newImages)
 }

 onMounted(() => {
  window.addEventListener("scroll", handleScroll)
 })
 onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
 })
 const handleScroll = (e) => {
  let element = scrollComponent.value
  if (element.getBoundingClientRect().bottom < window.innerHeight) {
    loadMoreImages()
  }
 }


</script>
<template>
  <div class="scroll-container" ref="scrollComponent">
    <!-- <p>{{ titleScroll }}</p> -->
    <!-- <h3>msg: {{ props.msg }}</h3> -->
    <Item  v-for="post in images" :post="post" :url-image="post.urlImage" :title="post.title" :content="post.content"  ></Item>
    <!-- <ListComponent></ListComponent> -->
  </div>
</template>

<style scoped>
.scroll-container {
  columns: 5 320px;
  column-gap: 0.5em;
}

/* Cambia a dos columnas en pantallas más pequeñas */
@media (max-width: 768px) {
  .scroll-container {
    columns: 2 320px;
  }
}

/* Cambia a una sola columna en pantallas aún más pequeñas */
@media (max-width: 580px) {
  .scroll-container {
    grid-template-columns: 1fr;
  }
}
</style>

<!--  El efectode pinterest layout también se llama Masory layout -->