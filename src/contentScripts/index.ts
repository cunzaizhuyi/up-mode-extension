/* eslint-disable no-console */
import { onMessage } from 'webext-bridge/content-script'
import browser from 'webextension-polyfill'

// Firefox `browser.tabs.executeScript()` requires scripts return a primitive value
(async () => {
  console.info('[vitesse-webext] Hello world from content script')

  // communication example: send previous tab title from background page
  onMessage('tab-prev', ({ data }) => {
    console.log(`[vitesse-webext] Navigate from page "${data.title}"`)
  })

  onMessage('toggle-fullscreen', async ({ data }) => {
    console.log('1111')
    const [tab] = await browser.tabs.query({ active: true, currentWindow: true })
    console.log('tab', tab)
    browser.tabs.executeScript(tab?.id || (data as any)?.id, {
      code: 'document.documentElement.requestFullscreen();',
    })
  })
})()
