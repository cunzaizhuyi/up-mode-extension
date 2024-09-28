<script setup lang="ts">
import browser from 'webextension-polyfill'
import packageJson from '../../package.json' // 导入 package.json
import { hiddenExtensions, showExtensions } from '~/composables/useToggleExt'
import ButtonComponent from '~/components/Button.vue'

// 版本号
const version = packageJson.version // 获取版本号

onMounted(async () => {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true })
  if (tab.url) {
  }
})

async function handleUpMode() {
  await hiddenExtensions()
  setTimeout(() => {
    !__DEV__ && window.close()
  }, 300)

  // await toggleBookmark()
  // setting.value.isFullscreen && toggleFullscreen(true)
  // setting.value.isBookmark && toggleBookmark();
}
async function handleReset() {
  await showExtensions()
  setTimeout(() => {
    !__DEV__ && window.close()
  }, 300)
  // setting.value.isFullscreen && toggleFullscreen(false)
  // setting.value.isBookmark && toggleBookmark();
}

async function toggleFullscreen(isFull: boolean) {
  if (isFull) {
    document.documentElement.requestFullscreen()
    // const w = await browser.windows.getCurrent();
    // browser.windows.update((w as any).id, { state: "fullscreen" });
  }
  else {
    document?.exitFullscreen()
  }
}

async function toggleBookmark() {
  const platformInfo = await browser.runtime.getPlatformInfo()
  let keyEventOptions
  console.log('info', platformInfo)
  if (platformInfo.os === 'mac') {
    keyEventOptions = {
      key: 'b',
      metaKey: true, // Command key on Mac
      shiftKey: true,
    }
  }
  else {
    keyEventOptions = {
      key: 'b',
      ctrlKey: true,
      shiftKey: true,
    }
  }
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true })
  console.log('tabid', tab, tab?.id)
  try {
    browser.scripting.executeScript({
      target: { tabId: tab?.id as number },
      func: (options) => {
        document.dispatchEvent(new KeyboardEvent('keydown', {}))
      },
      args: [keyEventOptions],
    })
  }
  catch (error) {
    console.log('ee', error)
  }
}
</script>

<template>
  <main class="w-[300px] px-4 py-5 text-gray-700">
    <!-- 添加按钮 -->
    <div class="flex justify-around mb-4">
      <ButtonComponent
        bg-color="#409eff"
        txt-color="white"
        class="w-150px"
        @click="handleUpMode"
      >
        Hide All Extensions
      </ButtonComponent>
      <ButtonComponent
        bg-color="#909399"
        txt-color="white"
        class="w-100px"
        @click="handleReset"
      >
        Reset
      </ButtonComponent>
    </div>

    <!-- <h1 class="text-lg font-bold mb-4">Setting</h1>
    <form @submit.prevent>
      <div class="flex justify-around items-center mb-4">
        <label for="enable-extension" class="mr-2 text-sm font-medium text-gray-900">
          Toggle Extensions
        </label>
        <SwitchComponent v-model="setting.isExtention" class="ml-2" />
      </div>
      <div class="flex justify-around items-center mb-4">
        <label for="enable-extension" class="mr-2 text-sm font-medium text-gray-900">
          Toggle Fullscreen
        </label>
        <SwitchComponent v-model="setting.isFullscreen" class="ml-2" />
      </div>
      <div class="flex justify-around items-center mb-4">
        <label for="enable-extension" class="mr-2 text-sm font-medium text-gray-900">
          Toggle Bookmarks
        </label>
        <SwitchComponent v-model="setting.isBookmark" class="ml-2" />
      </div>
    </form> -->

    <!-- 添加 GitHub 链接 -->
    <div class="mt-4 flex justify-center">
      <a href="https://github.com/cunzaizhuyi/up-mode-extension" target="_blank" class="flex items-center text-black hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="w-5 h-5 mr-2">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.54 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.83-.01-1.5-2.24.49-2.71-1.08-2.71-1.08-.36-.91-.88-1.15-.88-1.15-.72-.49.05-.48.05-.48.8.06 1.22.82 1.22.82.71 1.22 1.86.87 2.31.67.07-.51.28-.87.51-1.07-1.78-.2-3.65-.89-3.65-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.84A7.66 7.66 0 0 1 8 2.5c.68 0 1.36.09 2 .26 1.53-1.06 2.2-.84 2.2-.84.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.14 0 3.07-1.87 3.75-3.66 3.95.29.25.55.74.55 1.49 0 1.08-.01 1.95-.01 2.21 0 .21.15.46.55.38C13.71 14.54 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </a>
      <span>V{{ version }}</span> <!-- 在版本号前加大写的V -->
    </div>
  </main>
</template>
