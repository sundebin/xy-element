<script setup>
function handleBtnClick() {
  console.log("btn click");
}
</script>

<template>
  <p>
    <xy-button @click="handleBtnClick"> with throttle</xy-button>
    <xy-button :use-throttle="false" @click="handleBtnClick"
    >without throttle</xy-button
    >
  </p>
</template>
