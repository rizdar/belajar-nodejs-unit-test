import { sayHelloAsync } from '../src/async';

test('async function', async () => {
  const result = await sayHelloAsync('Rizki');

  expect(result).toBe('Hello Rizki');
});
