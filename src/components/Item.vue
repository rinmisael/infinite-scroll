<script setup>
    const props = defineProps({
        title: String,
        content: String,
        urlImage: String
    })
</script>

<template>
    <div class="post">
        <img :src="props.urlImage" alt="" srcset="">
        <h5> Titulo: {{ props.title }}</h5>
        <p> Contenido: {{ props.content }}</p>
    </div>
</template>


<style scoped>
.post {
    border: 1px dotted greenyellow;
    margin-bottom: 0.5em;
    padding: 1em;
}

.post:not(:last-child) {
    border-bottom: 1px solid #ddd;
}

.post h2 {
    font-size: 1.3em;
}

.post p {
    color: #40c821;
}
img{
    width: 90%;
}
</style>