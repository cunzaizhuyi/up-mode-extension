import browser from 'webextension-polyfill';

export async function isWhitelisted(hostname: string): Promise<boolean> {
  const whitelist: string[] = await getWhitelist();
  return whitelist.includes(hostname);
}

export async function addToWhitelist(hostname: string): Promise<void> {
  const whitelist: string[] = await getWhitelist();
  if (!whitelist.includes(hostname)) {
    whitelist.push(hostname);
    await browser.storage.local.set({ whitelist });
  }
}

export async function removeFromWhitelist(hostname: string): Promise<void> {
  const whitelist: string[] = await getWhitelist();
  const index = whitelist.indexOf(hostname);
  if (index > -1) {
    whitelist.splice(index, 1);
    await browser.storage.local.set({ whitelist });
  }
}

export async function getWhitelist(): Promise<string[]> {
  const result: any = await browser.storage.local.get('whitelist');
  console.log('whitelist', result.whitelist)
  return result.whitelist || [];
}