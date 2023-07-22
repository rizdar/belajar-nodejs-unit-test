import { sayHelloAsync } from '../src/async';

test('async function', async () => {
  const result = await sayHelloAsync('Rizki');

  expect(result).toBe('Hello Rizki');
});

test('test async matchers', async () => {
  await expect(sayHelloAsync('Rizki')).resolves.toBe('Hello Rizki');
  await expect(sayHelloAsync()).rejects.toBe('Name is empty');
});
