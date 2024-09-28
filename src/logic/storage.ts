import { useWebExtensionStorage } from '~/composables/useWebExtensionStorage'

export const storageDemo = useWebExtensionStorage('webext-demo', 'Storage Demo')

export const setting = useWebExtensionStorage('setting', {
  isFullscreen: true,
  isExtention: true,
  isBookmark: true,
})

export const extensions: any = useWebExtensionStorage('extensions', [])
export const isShow: any = useWebExtensionStorage('isShow', true)
