<script setup>
import {useRouter} from "vue-router";

const router = useRouter();
let userid = 100
let username = "Jessika"
const goto = () => {
  router.push({name: "user", params: {id: userid, name: "Jessika"}})

}
</script>

<template>
  <h3>index</h3>
  <router-link to="/content?id=1009&title=Akeelah">query string parameters</router-link>
  <br>
  <router-link to="/user/009/name/Jessika">Route Params</router-link>
  <br>
  <router-link :to="{path:'/content',query:{id:2001,title:'Jessika'}}">Query string passing parameters - dynamic
    attribute
    binding
  </router-link>
  <br>
  <router-link :to="{path:`/user/${userid}/name/${username}`}">Path parameter transmission - dynamic attribute binding
  </router-link>
  <br>
  <router-link :to="{name:'user',params:{id:'3001',name:'Jessika'}}">Path parameter transmission - Define route name
  </router-link>
  <br>
  <button @click="goto()">Goto</button>
  <br>
  <router-link to="/vip">vip</router-link>
  <br>
  <router-link to="/sip">sip</router-link>
</template>

<style scoped>

</style>
