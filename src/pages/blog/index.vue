<template>
  <div class="container">
    <TitlePage title="Le blog"/>
    <CategoriesFilter :categories="categories && categories.categories"/>
    <PostGrid :posts="data"/>
  </div>
</template>

<script setup>

import PostGrid from '~~/src/components/PostGrid.vue';
import TitlePage from '~~/src/components/TitlePage.vue';
import CategoriesFilter from '~~/src/components/CategoriesFilter.vue';
import { GET_POSTS, GET_CATEGORIES } from "../../graphql/queries.js";

definePageMeta({
  layout: "blog"
});

const { data } = useAsyncQuery(GET_POSTS);
const {data:categories} = useAsyncQuery(GET_CATEGORIES);

</script>