<template>
 <div class="container mt-5">
  <div class="row row-cols-2">
      <div class= "col-5 shadow-lg mx-5" >
      <Composition/>
      </div>
      <div class= "col-5 shadow-lg mx-5">
      <Options/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Composition from './components/component-1.vue';
import Options from './components/component-2.vue';

</script>

