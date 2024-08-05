<script setup lang="ts">
import { ref } from 'vue'
import { NewsCategoryListItemDtoIPagedList, NewsTagGetPagedListResponse, NewsTagListItemDtoIPagedList } from '../apis/salvation';
// import { uploadsGetFile, uploadsGetFile2 } from '../apis/salvation';
import {  NewsCategoryListItemDto, NewsCategoryService,  NewsSignatureListItemDto,  NewsSignatureService, SalvationResponse } from '../apis/salvation'

const categories = ref<NewsCategoryListItemDtoIPagedList>();
NewsCategoryService.newsCategoryGetPagedList().then(res=> {
   console.log(res)
   categories.value = res.data
   console.log(res.data)
});
 
async function test() {
  try {


    const {data, error, config, request, status } = await UploadsService.uploadsGetFile();
    console.log(config);
    console.log(request);
    console.log(status);
    console.log(data);
    console.log(error);
    // console.log('data', data)
    // console.log('error', error)



  } catch  (e){
    // console.log(e.body)
  }
  
}
// test()

// function create() {
//   NewsCategoryService.newsCategoryCreate({requestBody: {
//     title: 'ДЕФОЛТНАЯ РУБРИКА 2', 
//     order: -1000,
//     published: true, 
//     onMainPageBottomSlider: true,
//     onRightPanel: true,
//     isVisibleInFilter: true}
//   })
//   .then(res=> {
    
//   });
// }

// function update(id: string) {
//   NewsCategoryService.newsCategoryUpdate({requestBody:{
//     id: id,
//     isVisibleInFilter: false,
//     order: -1,
//     published: false,
//     mainPageBottomSlider: true,
//     rightPanel: true,
//     title: 'БББ'
//   }})
//   .catch(err => {
    
//   })
//   .then(res => {
//     const result = (res as SalvationResponse)
//     alert(JSON.stringify(result))
//   });
// }

// function remove(id: string) {
//   NewsCategoryService.newsCategoryRemove({id: id})
//   .then(res=> {

//   });
// }


// function get(id: string) {
//   NewsCategoryService.newsCategoryGetById({id: id})
//   .then(res=> {
//     alert(JSON.stringify(res))
//   });
// }

// async  function uploads() {
//   const {data, error } = await UploadsService.uploadsGetFile();
// console.log('result', result)
// console.log('error', error)
//   try {
//     const {result, error } = await UploadsService.uploadsGetFile();

    // .then(e=> {
    //   console.log('then', e);
    // })
    // .catch((e: ApiError) =>{
    //   console.log('catch', e.body);
    // });
    // .finally(() => {
    //   console.log('finally')
    // });
  // }
//   catch (e: any) {
//     console.log('trycatch', e.body)
//   }
// }
// uploads();
</script>

<template>
  <button @click="test">ZZZZ</button>
  <button @click="create">CREATE</button>
  <div v-for="cat in categories?.items" >
    <span>{{ cat.id }} </span>   
    <span>{{ cat.title }} </span>   
    <button @click="get(cat.id)">GET</button>
    <button @click="update(cat.id)">UPDATE</button>
    <button @click="remove(cat.id)">REMOVE</button>
  </div>

</template>

<style scoped>

</style>
