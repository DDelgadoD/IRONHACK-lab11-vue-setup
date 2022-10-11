<template>
<Navbar/>
 <div class="container mt-5">
  <div class="row row-cols-2">
      <div class= "col-5 shadow-lg mx-5" >
        <router-view></router-view>
      </div>
      </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';


</script>

