<template>
  <div class="post__grid">
    <template v-for="item in posts && posts.posts.data">
      <PostItem :post="item"/>
    </template>
  </div>
</template>

<script>
export default {
  props: ["posts"],
  created() {
    this.posts
  }
}
</script>

<style>
.post__grid {
  display: flex;
  flex-wrap: wrap;
  gap:20px;
}
</style>