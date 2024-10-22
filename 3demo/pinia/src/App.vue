<script setup>
import {webStore} from "./stores/web.js";
const store = webStore();
</script>

<template>
{{store.web.title}} --{{store.web.description}} <br>
  {{store.user}}<br>
  <button @click="store.userAdd()" >userAdd</button>
</template>

<style scoped>

</style>
