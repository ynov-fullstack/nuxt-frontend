<template>
  <div class="categories__list">
    <div class="category__item" v-for="category in categories && categories.data" :key="category.id">
      <NuxtLink class="btn btn__secondary" :to="`/blog/category/${category.attributes.name}`">{{category.attributes && category.attributes.name}}</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ["categories"]
}
</script>

<style lang="scss">
.categories__list {
  display: flex;
  margin: 40px 0px;
  .category__item {
    margin-right: 10px;
    &:last-of-type {
      margin-right: 0px;
    }
  }
}
</style>