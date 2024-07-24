import { test, expect } from '@playwright/test';

test('Check home page', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page).toHaveTitle('Installation | Playwright');
});
