<template>
    <div class="dropper">
        <input 
            @change="uploadImages($event.target.files)" 
            type="file"
            multiple
            accept="image/*" 
        >
        <span>Drag Files Here!</span>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'UploadForm',
    methods: {
        ...mapActions(['uploadImages']),
        // ...mapActions([])
    },
}
</script>

<style scoped>
.dropper {
    height: 30vh;
    border: 2px dashed black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.dropper:hover {
    background-color: #eee;
}
input {
    width: 100%;
    height: 30vh;
    position: absolute;
    opacity: 0;
}
</style>
