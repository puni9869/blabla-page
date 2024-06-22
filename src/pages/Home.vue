<template>
  <BaseLayout>
    <Toast ref="toastRef" />
    <Editor v-on:change="handleChange" v-bind:initialCode="state.code"></Editor>
    <Toolbar>
      <Menu triggerLabel="Menu">
        <MenuItem label="Download " modifier="⌘ + S" @click="handleSaveFile" />
      </Menu>
      <div class="flex align-center ml-auto">
        <Button
          class="trigger ghost"
          v-bind:class="{ active: state.copied }"
          @click="handleCopyAsHTML"
        >
          <svg
            v-if="!state.copied"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <rect x="8" y="8" width="12" height="12" rx="2"></rect>
            <path
              d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"
            ></path>
          </svg>
          <svg
            v-if="state.copied"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="9"></circle>
            <path d="M9 12l2 2l4 -4"></path>
          </svg>
        </Button>
      </div>
    </Toolbar>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "../components/base-layout.vue";
import Menu from "../components/menu.vue";
import MenuItem from "../components/menu-item.vue";
import Toolbar from "../components/toolbar.vue";
import Editor from "../components/editor-rich.vue";
import Button from "../components/button.vue";
import Toast from "../components/toast.vue";
import { copy } from "../lib/copy";
import { defaultMarkdownText } from "../resources/default-md";
import { reactive, onMounted, ref, onUnmounted } from "vue";
import marked from "../lib/marked";
import getMDStyles from "../lib/get-md-styles";

const toastRef = ref(null);

const STORAGE_TOKEN = Symbol("reaper-mark").toString();

const getDefaultCode = () => {
  const existingCode = localStorage.getItem(STORAGE_TOKEN);
  if (existingCode && existingCode.length) {
    return existingCode;
  }
  return defaultMarkdownText;
};

const state = reactive({
  copied: false,
  code: getDefaultCode(),
});

onMounted(() => {
  document.addEventListener("keydown", shortcutListener.bind(this));
});

onUnmounted(() => {
  document.removeEventListener("keydown", shortcutListener);
});

function shortcutListener(e) {
  if (e.key === "s" && (e.ctrlKey || e.metaKey) && e.shiftKey) {
    e.preventDefault();
    return handleSaveAsHTML();
  }

  if (e.key === "s" && (e.ctrlKey || e.metaKey) && !e.shiftKey) {
    e.preventDefault();
    return handleSaveFile();
  }
}

function handleChange(code) {
  state.code = code;
  localStorage.setItem(STORAGE_TOKEN, code);
}

async function handleCopyAsHTML() {
  if (!state.code) {
    return;
  }
  await copy(state.code);
  state.copied = true;
  setTimeout(() => {
    state.copied = false;
  }, 2500);
}

function handleSaveFile() {
  const fileName = prompt("Name your file", "mark.md");
  if (!fileName) {
    return;
  }
  const file = createFile(state.code);
  const fileNameWithExt = fileName.replace(/.md$/, "") + ".md" || "mark.md";
  exportFile(fileNameWithExt, file);
}

function createFile(data) {
  return new Blob([data], { type: "text/plain" });
}

function exportFile(filename, file, generateDataURI = true) {
  const a = document.createElement("a");
  document.body.appendChild(a);
  let uri;
  if (generateDataURI) {
    uri = window.URL.createObjectURL(file);
  } else {
    uri = file;
  }
  a.href = uri;
  a.download = filename;
  a.click();
  document.body.removeChild(a);
}
</script>

<style scoped></style>
