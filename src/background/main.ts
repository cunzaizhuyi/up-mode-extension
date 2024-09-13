import { onMessage, sendMessage } from 'webext-bridge/background'
import type { Tabs } from 'webextension-polyfill'
import browser from 'webextension-polyfill';
import { toggleExtensions } from '~/composables/useToggleExt';

// only on dev mode
if (import.meta.hot) {
  // @ts-expect-error for background HMR
  import('/@vite/client')
  // load latest content script
  import('./contentScriptHMR')
}

// remove or turn this off if you don't use side panel
const USE_SIDE_PANEL = false

// to toggle the sidepanel with the action button in chromium:
if (USE_SIDE_PANEL) {
  // @ts-expect-error missing types
  browser.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error: unknown) => console.error(error))
}

browser.runtime.onInstalled.addListener((): void => {
  // eslint-disable-next-line no-console
  console.log('Extension installed')
})

let previousTabId = 0

// communication example: send previous tab title from background page
// see shim.d.ts for type declaration
browser.tabs.onActivated.addListener(async ({ tabId }) => {
  if (!previousTabId) {
    previousTabId = tabId
    return
  }

  let tab: Tabs.Tab

  try {
    tab = await browser.tabs.get(previousTabId)
    previousTabId = tabId
  }
  catch {
    return
  }

  // eslint-disable-next-line no-console
  console.log('previous tab', tab)
  sendMessage('tab-prev', { title: tab.title }, { context: 'content-script', tabId })
})

onMessage('get-current-tab', async () => {
  try {
    const tab = await browser.tabs.get(previousTabId)
    return {
      title: tab?.title,
    }
  }
  catch {
    return {
      title: undefined,
    }
  }
})

onMessage('toggle-bookmark', async ({ data }) => {
  const platformInfo = await browser.runtime.getPlatformInfo()
  let keyEventOptions;
  console.log('info', platformInfo);
  if (platformInfo.os === "mac") {
    keyEventOptions = {
      key: 'b',
      metaKey: true,  // Command key on Mac
      shiftKey: true
    };
  } else {
    keyEventOptions = {
      key: 'b',
      ctrlKey: true,
      shiftKey: true
    };
  }
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true })
  console.log('tabid', tab, tab?.id)
  browser.scripting.executeScript({
    target: { tabId: tab?.id as number },
    func: (options) => {
      document.dispatchEvent(new KeyboardEvent('keydown', {}));
    },
    args: [keyEventOptions]
  });
})

browser.commands.onCommand.addListener((command) => {
  if (command === "toggleExtensions") {
    toggleExtensions()
  }
});

