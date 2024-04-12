<template>
    <div class="container">
        <h4 class="text-center">Scelta dei loghi per locale</h4>
        <div class="card-list  d-flex gap-5">
            <CardComponent />
        </div>
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue'
    export default {
        name: "CardList",
        components: {
            CardComponent
        }
    }
</script>

<style lang="scss" scoped>

    h4{
        text-transform: uppercase;
        font-weight: 700;
        font-size: 2rem;
        padding: 30px;
    }
    .card-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

</style>