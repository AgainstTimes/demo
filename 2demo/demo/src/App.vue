<script setup>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import {onMounted, onUpdated, provide, reactive, toRef, toRefs} from 'vue'

const propWeb = reactive({
  user: 10,
  ip: '127.0.0.1'
})
const userAdd = () => {
  propWeb.user++
  console.log(propWeb.user)
}
const userAddEmits = (data) => {
  propWeb.user += data
  console.log(propWeb.user)
}
provide("provideFuncUserAdd", userAdd)
provide("provideWeb", {name: "Akeelah", email: "Akeelah@example.com"})
onMounted(() => {
  console.log("onMounted")
})
onUpdated(() => {
  console.log("onUpdated", propWeb.user)
})
const testDada = reactive({
  user: 10,
  ip: '127.0.0.1'
})


const setUrl = () => {
  console.log("testDada:", testDada)
  const testData1 = toRef(testDada, "user");
  testData1.value = 31
}
const setUrl2 = () => {
  console.log("testDada:", testDada)
  const testData2 = toRefs(testDada)
  testData2.user.value = 45
  testData2.ip.value = '132.123.234.21'
}

</script>

<template>
  <Header propsName="Akeelah" propsUrl="Akeelah.cn" :propWeb="propWeb" @userAddEmits="userAddEmits">
    <a href="#">Jessika</a>
  </Header>
  <hr>
  Akeelah.cn <br>
  {{ propWeb.user }}<br>
  <button @click="userAdd()">Add user</button>
  <br>
  {{ testDada }} <br>
  <button @click="setUrl()">setUrl</button>
  <br>
  <button @click="setUrl2()">setUrl2</button>
  <hr>
  <Footer :="propWeb" ip="">
    <!--    <template v-slot:url>-->
    <template #url="{email,user}">
      {{ email }}--{{ user }} <br>
      <a href="#">Akeelah</a>
    </template>
  </Footer>
</template>

<style scoped></style>
