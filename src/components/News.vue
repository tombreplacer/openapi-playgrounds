<script setup lang="ts">
import { ref } from 'vue'
import { NewsCategoryListItemDto, NewsCategoryService,  NewsSignatureListItemDto,  NewsSignatureService } from '../apis/salvation'

const categories = ref<NewsSignatureListItemDto[]>();
NewsSignatureService.newsSignatureGetPagedList().then(res=> {
  console.log(res)
  categories.value = res.items
});

function create() {
  NewsSignatureService.newsSignatureCreate({requestBody: {
    title: 'УУУ', 
    order: 0,
    published: true, 
    shortTitle: 'ЫЫЫ', 
    isVisibleInFilter: true}
  })
  .then(res=> {

  });
}

function update(id: string) {
  NewsSignatureService.newsSignatureUpdate({requestBody:{
    id: id,
    isVisibleInFilter: false,
    order: -1,
    published: false,
    shortTitle: 'ААА',
    title: 'БББ'
  }})
  .then(res=> {

  });
}

function remove(id: string) {
  NewsSignatureService.newsSignatureRemove({id: id})
  .then(res=> {

  });
}
</script>

<template>
  <button @click="create">CREATE</button>
  <div v-for="cat in categories" >
    <span>{{ cat.title }} </span>   
    <button @click="update(cat.id)">UPDATE</button>
    <button @click="remove(cat.id)">REMOVE</button>
  </div>

</template>

<style scoped>

</style>
