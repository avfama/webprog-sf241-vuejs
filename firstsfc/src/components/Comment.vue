<template>
    <h1>Comments</h1>
    <ul>
      <li v-for="comment in comments" :key="comment.id">{{ comment.name }} {{ comment.comment }}</li>
    </ul>
  </template>
  
  <script></script>
  
<style>
   #app > div {
    border: solid Red 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: Black;
   }
</style>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const comments = ref([])

async function getComments() {
  const { data } = await supabase.from('comments').select()
  comments.value = data
}

onMounted(() => {
  getComments()
})

</script>


<style>
  #app > div {
    border: solid Red 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: Black;
  }
</style>