<script setup>
import {inject} from "vue";

const userAdd = inject("provideFuncUserAdd");
console.log("provideFuncUserAdd:",userAdd)
</script>

<template>
  <h3>nav</h3>
<button @click="userAdd">userAdd</button>
</template>

<style scoped>

</style>