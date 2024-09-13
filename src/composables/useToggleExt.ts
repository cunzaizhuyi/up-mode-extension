import browser from 'webextension-polyfill'
import { extensions, isShow } from '~/logic/storage'

export async function toggleExtensions(){
  console.log('isShow', isShow)
  isShow.value ? hiddenExtensions(): showExtensions();
}

export async function hiddenExtensions(){
    const currentExtensionId = browser.runtime.id;
  
    let list = (await browser.management.getAll())
    .filter((extension)=> extension.enabled)
    .map(({ id, enabled, name }) => ({id, enabled, name }));
    // fix bug
    if (!list.length) {
      return;
    } else if (list.length === 1 && list[0].id === currentExtensionId) {
      return;
    }
    extensions.value = list;
    
  
    // 禁用除当前扩展之外的所有扩展
    extensions.value.forEach(async (extension: any) => {
        if (extension.id !== currentExtensionId && extension.enabled) {
          try {
            await browser.management.setEnabled(extension.id, false);
            // console.log(`禁用扩展: ${extension.name}`);
          } catch (error) {
            console.log('hiddenExtensions', error);
          }
        }
    });
    
    isShow.value = false;
  }

  // export async function showExtensions() {
  //   const currentExtensionId = browser.runtime.id;
  //   // console.log('extensions: ', extensions.value);
  //   extensions.value.forEach(async (extension: any, index: number) => {
  //     if (extension.id !== currentExtensionId) {
  //       try {
  //         await browser.management.setEnabled(extension.id, true);
  //         // console.log(`启用扩展: ${extension.name}`);
  //         if (index === extensions.value.length - 2) {
  //           isShow.value = true
  //         }
  //       } catch (error) {
  //         console.log(`showExtensions: ${error}`);
  //       }
  //     }
  //   });
  // }

  export async function showExtensions() {
    const currentExtensionId = browser.runtime.id;
    // console.log('extensions: ', extensions.value);
    const promises = extensions.value.map(async (extension: any, index: number) => {
      if (extension.id !== currentExtensionId) {
        try {
          await browser.management.setEnabled(extension.id, true);
        } catch (error) {
          console.log(`showExtensions: ${error}`);
        }
      }
    });
    await Promise.all(promises); // 等待所有启用操作完成
    isShow.value = true;
  }