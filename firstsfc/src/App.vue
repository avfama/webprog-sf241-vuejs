<script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from './lib/supabaseClient'
  
  const instruments = ref([])
  async function getInstruments() {
    const { data } = await supabase.from('instruments').select()
    instruments.value = data
  }
  
  onMounted(() => {
    getInstruments()
  })
</script>

<template>
  <h1 style="background-color: lime;">Abnormalities & Distortions</h1>
  <ul>
    <li v-for="instrument in instruments" :key="instrument.id">{{ instrument.name }}</li>
  </ul>
  <food-item/>
  <food-item2/>
  <br>
  <comment-form/>
  <comment/>
</template>

<style>
  #app > div {
    border: solid lime 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: Green;
  }
</style>