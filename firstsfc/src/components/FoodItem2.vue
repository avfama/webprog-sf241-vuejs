<template>
  <div>
    <h2 style="color: white">{{ name }}</h2>
    <p style="color: white">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "The King in Binds",
      message: 'WAW–07'
    }
  }
};
</script>

<style>
  #app > div {
    border: solid lime 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: Green;
  }
</style>