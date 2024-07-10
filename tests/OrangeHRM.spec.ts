import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
   await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill("Renzo")
  await page.getByPlaceholder('Middle Name').fill('Daniel');
  await page.getByPlaceholder('Last Name').fill('Murguia');
   
  const inputElement = await page.locator('xpath=/html/body/div/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input');
  let currentValue = await inputElement.inputValue();
  let newValue = parseInt(currentValue, 10) + 1;
  await inputElement.fill(newValue.toString());

  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(7000);
  await page.getByRole('link', { name: 'Employee List' }).click();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('Type for hints...').first().fill('Renzo Daniel Murguia');
  await page.getByRole('button', { name: 'Search' }).click();
});