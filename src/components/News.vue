<script setup lang="ts">
import { ref } from 'vue'
import { NewsCategoryService } from '../../apis/salvation'

const categories = ref();
NewsCategoryService.newsCategoryGetAll().then(e=> {
  categories.value = e
});
</script>

<template>
  123
</template>

<style scoped>

</style>
