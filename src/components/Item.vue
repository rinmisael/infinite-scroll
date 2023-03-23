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
    background: rgb(88, 67, 67);
    padding: 1.5em;
}

.post:not(:last-child) {
    border-bottom: 1px solid #ddd;
}

.post h2 {
    font-size: 1.3em;
    padding-bottom: 0.25rem;
}

.post p {
    color: #888;
}
img{
    width: 50%;
}
</style>