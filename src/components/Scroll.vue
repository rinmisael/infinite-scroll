<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Item from './Item.vue'
 
import getimages from '../scripts/getImages.js'

const images = ref(getimages(10))
const scrollComponent = ref(null)

console.log('Hi M!')
const props = defineProps({
  msg: String
})

const titleScroll = ref('This will be a infinity scroll, iojojojo')

const loadMoreImages = () => {
  let newImages = getimages(10)
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
    <p>{{ titleScroll }}</p>
    <h3>msg: {{ props.msg }}</h3>
    <Item  v-for="post in images" :post="post" :url-image="post.urlImage" :title="post.title" :content="post.content"  ></Item>
    <!-- <ListComponent></ListComponent> -->
  </div>
</template>

<style scoped>
.scroll-container {
  border: 2px dotted rgb(255, 57, 47);
  background-color: cadetblue;
  display: flex;
  flex-direction: column;
}
</style>
