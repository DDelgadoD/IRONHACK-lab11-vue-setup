<template>
  <h2>COMPONENT BY COMPOSITION</h2>
  <p>{{title}}</p>
  <button @click="helloWorld()"> Press </button>
</template>

<script setup>

const title = "LAB 11 - SETTING UP VUE";

function helloWorld() {
  console.log("Hello world from Composition");
}

</script>
