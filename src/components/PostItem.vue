<template>
  <div class="post__item" :key="post.id">
    <h2>{{ post && post.attributes.title }}</h2>
    <div class="categories">
      <div v-for="category in post.attributes.categories && post.attributes.categories.data" :key="category.id">
        <span v-if="category">
          <NuxtLink :to="`/blog/category/${category.attributes.name}`">
            {{category.attributes.name}}
          </NuxtLink>
        </span>
      </div>
    </div>
    <div class="btn__group">
      <NuxtLink :to="`/blog/${post.id}`" class="btn btn__primary">
        Découvrir
      </NuxtLink>
    </div>
  </div>
</template>

<script>

export default {
    props: ["post"]
}

</script>

<style lang="scss">
  .post__item {
    border: 1px solid black;
    border-radius: 4px;
    padding: 20px;
    transition: 0.3s all;
    flex: 28% 0 1;
    h2 {
      margin: 0px;
    }
    .btn__group {
      display: flex;
      justify-content: flex-end;
    }
    .categories {
      display:flex;
      margin: 20px 0px;
      span {
        padding: 8px;
        background: lightblue;
        font-size: 12px;
        margin-right: 10px;
        border-radius: 4px;
        a {
          text-decoration:none;
        }
      }
    }
  }
</style>