<template>
    <div>
        <img :key="image.link" v-for="image in allImages" :src="image.link" alt="">
    </div>
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
        ...mapGetters(['allImages']),
    },
    created() {
        this.fetchImages();
    }  
}
</script>

<style scoped>

</style>
