<template>

  <div class="container">

    <TitlePage :title="data && data.post.data.attributes.title"/>
    <div :v-if="data.post.data.attributes.builder">
      <div v-for="(item, index) in data && data.post.data.attributes.builder" :key="index">
        <div :v-if="`${item.__typename='ComponentBuilderTextEmphasis'}`">
          <p>{{item.text}}</p>
        </div>
        <div 
        :v-if="`${item.__typename='ComponentBuilderTextEditor'}`"
        :class="`${item.with_background && 'background'}`"
        >
          <div>{{item.wysiwyg}}</div>
        </div>
      </div>
    </div>

  </div>
  
</template>

<script setup>

import { GET_POST } from "../../graphql/queries.js";

const route = useRoute();

const { data } = useAsyncQuery(GET_POST, { id: route.params.id });

console.log(data, "DATA");

</script>

<style>
  .background {
    background:grey;
  }
</style>