<template>
    <div v-if="isLoggedIn" class="image-container">
        <img :key="image.link" v-for="image in allImages" :src="image.link" alt="">
    </div>
    <h2 v-else>
        Log in plz
    </h2>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: 'ImageList',
    methods: {
        ...mapActions(['fetchImages']),
        // ...mapActions([])
    },
    computed: {
        ...mapGetters(['allImages', 'isLoggedIn']),
    },
    created() {
        this.fetchImages();
    }  
}
</script>

<style scoped>
.image-container {
    column-count: 3;
    column-gap: 0;
}
img {
    max-width: 100%;
    padding: 5px;
}
</style>
