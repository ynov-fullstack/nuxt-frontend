<template>
  <header className="header__main">
    <NuxtLink to="/">
      <img src="https://ynov-globalressources.s3.eu-west-3.amazonaws.com/logo.webp" alt="Airbnb"/>
    </NuxtLink>
    <div class="header__menu">
      <nav class="header__nav">
        <ul class="nav__list">
          <li class="nav__item" v-for="(menu, index) in data && data.headerMenu.data.attributes.item" :key="index">
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