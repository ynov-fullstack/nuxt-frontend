<template>
  <div class="container">
    <TitlePage :title="route.params.name"/>
    <CategoriesFilter :categories="categories && categories.categories"/>
    <PostGrid :posts="data && data.categories.data[0].attributes"/>
  </div>
</template>

<script setup>
import { GET_CATEGORIES } from "../../../graphql/queries.js";

const route = useRoute();
const { data: categories } = useAsyncQuery(GET_CATEGORIES);

const { data } = useAsyncQuery(GET_CATEGORIES, {
    filters: {
      name: {
        eq:route.params.name
      }
    }
});

</script>

<style>

</style>