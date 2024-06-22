<template>
  <div class="flex">
    <span class ="greetings">Enjoy the rest of your {{ day }}!</span>
    <span class="flex ml-auto">
    <a target="_blank" href="https://github.com/puni9869/blabla-page">
      <img title="github.com/puni9869/blabla-page" alt="blabla.page" class="flex icon" :src="getImageUrl('github_icon.ico')" />
    </a>
    <a target="_blank" href="https://github.com/puni9869/blabla-page">
      <img alt="Add to chrome"  title="Download the chrome extension" class="flex icon extension" :src="getImageUrl('chrome.png')" />
    </a>
  </span>
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
function getImageUrl(iconName) {
  return new URL(`../images/icons/${iconName}`, import.meta.url).href;
}
</script>
<style scoped>
.icon {
  align-items: end;
  gap: 1;
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
.extension {
  width: 24px;
  height: 24px;
  margin: 2px;
}
</style>
