<template>
  <AppHeader/>

  <RouterView/>
</template>

<script setup lang="ts">
import {RouterView} from 'vue-router'
import AppHeader from "@/components/layout/AppHeader.vue";
</script>

<style lang="scss">
html {
  font-size: 16px; // rem base value
  background: #070A15;
}

@media (min-width: 1025px) and (min-height: 600px) {
  html {
    font-size: 12px;
  }
}

@media (min-width: 1400px) and (min-height: 700px) {
  html {
    font-size: 14px;
  }
}

@media (min-width: 1600px) and (min-height: 900px) {
  html {
    font-size: 16px;
  }
}

@media (min-width: 1800px) and (min-height: 1100px) {
  html {
    font-size: 18px;
  }
}

body {
  position: relative;
  min-height: 100dvh;
  font-family: Stratum2, sans-serif;
  background: #070A15;
  color: #EEEBDA;
  transition: 1s background-color ease-in-out;
}
</style>
