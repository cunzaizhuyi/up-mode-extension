<script setup lang="ts">
import { extensionEnabled, noModifyCurrentSite } from '~/logic/storage'
// import { sendMessage } from 'webext-bridge/content-script'
// import browser from 'webextension-polyfill'
import { addToWhitelist, removeFromWhitelist, isWhitelisted } from '~/contentScripts/whitelist-manager'

async function toggleExtension() {
  console.log('isEnabled', extensionEnabled.value);
  // 这句其实没用
  // await sendMessage('toggle-extension', { extensionEnabled: extensionEnabled.value });
}

const currentHostname = ref('')
onMounted(async () => {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true })
  if (tab.url) {
    currentHostname.value = new URL(tab.url).hostname
    noModifyCurrentSite.value = (await isWhitelisted(currentHostname.value))
  }
})

async function toggleCurrentSite() {
  if (noModifyCurrentSite.value) {
    await addToWhitelist(currentHostname.value)
  } else {
    await removeFromWhitelist(currentHostname.value)
  }
}
</script>

<template>
  <main class="w-full px-4 py-5 text-gray-700">
    <h1 class="text-lg font-bold mb-4">插件设置</h1>
    <form @submit.prevent>
      <div class="flex items-center mb-4">
        <input 
          id="enable-extension" 
          type="checkbox" 
          v-model="extensionEnabled" 
          @change="toggleExtension"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        >
        <label for="enable-extension" class="ml-2 text-sm font-medium text-gray-900">
          用新标签页打开链接
        </label>
      </div>
      <div v-if="extensionEnabled" class="flex items-center mb-4">
        <input 
          id="modify-current-site" 
          type="checkbox" 
          v-model="noModifyCurrentSite"
          @change="toggleCurrentSite"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        >
        <label for="modify-current-site" class="ml-2 text-sm font-medium text-gray-900">
          不修改本网站
        </label>
      </div>
    </form>
  </main>
</template>
