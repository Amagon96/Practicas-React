// @ts-check
import { test, expect } from '@playwright/test';

const CAT_PREFIX_URL = `https://cataas.com`
const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact with cat image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  console.log({ textContent, imageSrc});

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(CAT_PREFIX_URL)).toBeTruthy();
  // await expect(imageSrc?.includes(textContent?.split(' ', 3).join(' ') || '')).toBeTruthy();
});