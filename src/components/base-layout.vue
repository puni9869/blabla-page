<template>
  <div class="flex greetings">
    Enjoy the rest of your {{ day }}!
    <a class="flex-1" href="https://github.com/puni9869/blabla-page">
      <img alt="blabla.page" class="flex github" :src="getImageUrl()" />
    </a>
  </div>
  <div class="min-w-screen min-h-screen flex"><slot /></div>
</template>

<script setup>
import { ref } from "vue";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const d = new Date();
const day = ref(weekday[d.getDay()]);
function getImageUrl() {
  return new URL(`../images/icons/github_icon.ico`, import.meta.url).href;
}
</script>
<style scoped>
.github {
  align-items: end;
  color: gray;
  width: 28px;
  height: 28px;
  margin-left: auto;
  cursor: pointer;
}
.greetings {
  align-items: center;
  font-style: italic;
  color: gray;
  padding-left: 0.625rem;
}
</style>
