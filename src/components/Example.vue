<script setup lang="ts">
import { ref } from 'vue';
import {GetMilitaryPersonnelResponse, MilitaryPersonnelOut, MilitaryPersonnelResponseSchema, РеестрВоеннослужащихService} from '../apis/salvation/index'

const items = ref<MilitaryPersonnelOut>();


async function test() {
  const {data, error} = await РеестрВоеннослужащихService.getMilitaryPersonnel({ query:{
    status: 0, 
    filters: '{  "first": 0,  "rows": 10,  "sortField": "subjectmil",  "sortOrder": 1,  "filters": {    "subjectmil": {      "value": "",      "matchMode": "contains"    },    "created_utc": {      "value": "",      "matchMode": "contains"    },    "region_name": {      "value": "",      "matchMode": "contains"    },    "address": {      "value": "",      "matchMode": "contains"    }  }}'}});
  console.log(data)
  console.log(error)
  items.value = data
  return data
}


</script>
<template>
<BUTTON @click="test"> НАХУЙ</BUTTON>
<div v-if="items?.page_items">

  <p v-for="item in items.page_items"> 
  {{ item.surname }}
  {{ item.name }}
  {{ item.created_utc }}
  
  </p>

</div>

</template>

<style scoped>

</style>
