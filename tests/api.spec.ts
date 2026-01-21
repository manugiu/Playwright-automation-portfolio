import { test, expect } from '@playwright/test';

test('API test name', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
  await expect(response.status()).toBe(200)
  const data = await response.json();
  console.log(data)
  expect(data).toHaveProperty('name')
  expect(data.id).toBe(1)
});