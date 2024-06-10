<template>
  <div class="flex" style="align-items: center; justify-content: flex-start;font-style: italic;color: gray; padding-left: 0.625rem; "> Enjoy the rest of your {{day}}! </div>
  <div class="min-w-screen min-h-screen flex"><slot /></div>
</template>

<script setup> 
import { ref } from 'vue';

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
const day = ref(weekday[d.getDay()]);
</script>