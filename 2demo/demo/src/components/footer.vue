<template>
<h3>Footer</h3>
  user:{{props.user}}
  <br>
  <slot name="url" email="Jessika.us" user="1000"/>
</template>

<script setup>
const props = defineProps({
  user:Number,
  ip:{
    type:String,
    default:'127.0.0.1',
    required:true
  }
})
console.log(props)
</script>

<style  scoped>

</style>