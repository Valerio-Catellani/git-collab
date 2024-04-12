<template>
</template>

<script>
import { cocktailData } from './assets/Data'
export default {
  name: 'App',
  data() {
    return {
      cocktail100: ''
    }
  },
  methods: {
    getDrink() {
      console.log(this.cocktail100);
    }
  },
  created() {
    setTimeout(() => {

      this.cocktail100 = cocktailData
      this.getDrink();
    }, 1000)
  },
}
</script>

<style lang="scss" scoped></style>