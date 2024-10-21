<script setup>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import {provide, reactive} from 'vue'
const propWeb = reactive({
  user:10,
  ip:'127.0.0.1'
})
const userAdd = ()=>{
  propWeb.user++
  console.log(propWeb.user)
}
const userAddEmits = (data)=>{
  propWeb.user +=data
  console.log(propWeb.user)
}
provide("provideFuncUserAdd",userAdd)
provide("provideWeb",{name:"Akeelah",email:"Akeelah@example.com"})
</script>

<template>
  <Header propsName="Akeelah" propsUrl="Akeelah.cn" :propWeb="propWeb" @userAddEmits="userAddEmits"/>
  <hr>
  Akeelah.cn <br>
  <button @click="userAdd()">Add user</button>
  <hr>
  <Footer :="propWeb" ip=""/>
</template>

<style scoped></style>
