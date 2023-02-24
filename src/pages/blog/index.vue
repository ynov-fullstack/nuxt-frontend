<template>
  <div>
    <PostGrid :posts="data"/>
  </div>
</template>

<script setup>

import PostGrid from '~~/src/components/PostGrid.vue';

definePageMeta({
  layout: "blog"
});

const query = gql`
  query getPosts {
    posts{
      data{
        attributes{
            title
            description
          }
        }
      }
    }
`
const { data } = useAsyncQuery(query);

</script>

<style>

</style>