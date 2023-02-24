<template>
  <div class="post__item" :key="post.id">
    <h2>
      <NuxtLink to="/">
        {{ post.attributes.title }}
      </NuxtLink>
    </h2>
  </div>
</template>

<script>

export default {
    props: ["post"],
    created() {
      this.post
    },
}

</script>

<style lang="scss">
  .post__item {
    border: 1px solid black;
    border-radius: 4px;
    width: 25%;
    padding: 20px;
    margin: 20px;
    transition: 0.3s all;
    cursor: pointer;
    a {
      text-decoration: none;
      color: inherit;
    }
    &:hover {
      background-color: lightGrey;
      transition: 0.3s all;
    }
  }
</style>