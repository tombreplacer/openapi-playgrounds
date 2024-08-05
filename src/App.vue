<script setup lang="ts">
// import CrudTest from './components/CrudTest.vue';
// import News from './components/News.vue'
import { OpenAPI } from './apis/salvation/core/OpenAPI';
import CrudTest from './components/CrudTest.vue';
import Example from './components/Example.vue';
OpenAPI.BASE = "http://192.168.128.37:5001/"

</script>

<template>
  <CrudTest  />
</template>

<style scoped>

</style>
