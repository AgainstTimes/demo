<template>
    <h3>Header</h3>
  <Nav />
  <hr>
  {{props.propsName}}--{{props.propsUrl}}
  <br>
  {{props.propWeb}} <br>
  <button @click="userAdd()" >userAdd</button>
  <br>
  {{web}}
</template>

<script setup>
import Nav from './nav.vue'
import {inject} from "vue";

const props = defineProps(["propsName","propsUrl","propWeb"])

const emits= defineEmits(["userAddEmits"])
const userAdd = ()=>{
  emits("userAddEmits", 10)
}
console.log(props)


const web = inject("provideWeb")
</script>

<style scoped></style>