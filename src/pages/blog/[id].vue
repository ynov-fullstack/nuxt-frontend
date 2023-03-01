<template>

  <div class="container">

    <TitlePage :title="data && data.post.data.attributes.title"/>

    <div 
    v-if="data"
    v-html="data.post.data.attributes.description">
    </div>

  </div>
  
</template>

<script setup>

import { GET_POST } from "../../graphql/queries.js";

const route = useRoute();

const { data } = useAsyncQuery(GET_POST, { id: route.params.id });

</script>

<style>

</style>