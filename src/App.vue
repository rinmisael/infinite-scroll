<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import { useMaintore } from './stores/mainStore'

import Scroll from './components/Scroll.vue'

const mainStore = useMaintore()


</script>

<template>
  <div class="main-container">
      <!-- <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a> 
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    -->

    <button @click="mainStore.increment()"> ++  {{ mainStore.count }}  ++ </button>

    <Scroll msg="msg from App to Scroll" />
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
  .main-container{
    border: 1px solid blue;
    width: 100vw;
    height: 100vh;
    padding: 0px; 
    margin: 0px;
  }

</style>
