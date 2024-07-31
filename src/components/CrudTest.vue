<script setup lang="ts">
import { ref } from 'vue'
import { ApiError, NewsCategoryListItemDto, NewsCategoryService,  NewsSignatureListItemDto,  NewsSignatureService, SalvationResponse, UploadsService } from '../apis/salvation'

const categories = ref<NewsSignatureListItemDto[]>();
// NewsSignatureService.newsSignatureGetPagedList().then(res=> {
//   console.log(res)
//   categories.value = res.items
// });

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
  .catch(err => {
    
  })
  .then(res => {
    const result = (res as NewsSignatureDtoSalvationResponse)
    alert(JSON.stringify(result))
  });
}

function remove(id: string) {
  NewsSignatureService.newsSignatureRemove({id: id})
  .then(res=> {

  });
}


function get(id: string) {
  NewsSignatureService.newsSignatureGetById({id: id})
  .then(res=> {
    alert(JSON.stringify(res))
  });
}

async  function uploads() {
  try {
    UploadsService.uploadsGetFile()
  .then(e=> {
    console.log('then', e);
    return e;
  })
  .catch((e: ApiError) =>{
    console.log('catch', e.body);
    return e;
  })
  .finally(() => {
    console.log('finally')
    return null
  });
  // console.log('result', result)
  }
  catch (e: any) {
    console.log('trycatch', e)
  }
}
uploads();
</script>

<template>
  <button @click="create">CREATE</button>
  <div v-for="cat in categories" >
    <span>{{ cat.title }} </span>   
    <button @click="get(cat.id)">GET</button>
    <button @click="update(cat.id)">UPDATE</button>
    <button @click="remove(cat.id)">REMOVE</button>
  </div>

</template>

<style scoped>

</style>
