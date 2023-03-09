<template>
  <header className="header__main">
    <NuxtLink to="/">
      <img :src="logo" alt="Airbnb"/>
    </NuxtLink>
    <div class="header__menu">
      <nav class="header__nav">
        <ul class="nav__list" v-for="(menu, index) in data && data.headerMenu.data.attributes.item" :key="index">
          <li class="nav__item">
            <NuxtLink :to="`${menu.link}`">
              {{menu.name}}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>

import logo from "../assets/img/logo.png";
import { HEADER_MENU } from "../graphql/queries";

const { data } = useAsyncQuery(HEADER_MENU);
console.log(data);
</script>

<style lang="scss">
.header__main {
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:10px 20px;
  border-bottom: 1px solid #ff385c;
  img {
    width:100px;
    height: auto;
  }
}
.header__menu {
    .nav__list {
      list-style:none;
    }
    .nav__item {
      a {
        color:inherit;
        text-decoration:none;
      }
    }
  }
</style>