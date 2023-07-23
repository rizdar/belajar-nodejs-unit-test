import { sayHelloAsync } from '../src/async';

test.concurrent('concurrent 1', async () => {
  await expect(sayHelloAsync('Rizki')).resolves.toBe('Hello Rizki');
});
test.concurrent('concurrent 2', async () => {
  await expect(sayHelloAsync('Rizki')).resolves.toBe('Hello Rizki');
});
test.concurrent('concurrent 3', async () => {
  await expect(sayHelloAsync('Rizki')).resolves.toBe('Hello Rizki');
});
