<template>
    <div class="card" v-for="(image, index) in images" :key="index">
        <div class="img-container">
            <img :src="`/public/images/${images[Math.floor(Math.random() * images.length )]}`" class="card-img-top" alt="..." >
        </div>
        <div class="card-body">
            <p class="card-text">Testo esempio per card</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CardComponent",
        data() {
            return {
                images: [
                    'bar-neon.png',
                    'creative-drink.png',
                    'lime-and-salt.png',
                    'summer-cocktail.bar.png',
                    'vintage-bar-bistro.jpg',
                    'wine-bar.png',
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card {
        transition: transform 0.3s ease;
        width: 18rem;
        &:hover {
            transform: scale(1.3);
        }
        .img-container {
        width: 100%;
        height: 240px;
        overflow: hidden;
        }
        p {
            font-size: 1.1rem;
            font-weight: 400;
        }
    }
    

</style>