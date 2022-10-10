<template>
  <h2>COMPONENT BY OPTIONS</h2>
  <p>{{title}}</p>
  <button @click="helloWorld()"> Press </button>
</template>

<script>

export default{
    data () {
        return {
          title: "LAB 11 - SETTING UP VUE"
        }
    },

    methods: {
      helloWorld(){
        console.log("Hello world from Option");
      }
    }

  }
</script>

<style scoped>

</style>
