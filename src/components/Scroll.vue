<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const titleScroll = ref('This will be a infinity scroll')
</script>
  <template>
    <div class="scroll-container">
      <h1>{{titleScroll}}</h1>
      <h3>msg: {{msg}}</h3>
  </div>
  </template>

<style scoped>
  .scroll-container{
    border: 2px dotted greenyellow;
  }
</style>
