import { getBalance } from '../src/async';

test('mock async function', async () => {
  const from = jest.fn();

  from.mockResolvedValueOnce(1000);

  expect(getBalance('Rizki', from)).resolves.toEqual({
    name: 'Rizki',
    balance: 1000,
  });
  expect(from.mock.calls.length).toBe(1);
  await expect(from.mock.results[0].value).resolves.toBe(1000);
});

test.failing('mock async function rejected', async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce(new Error('Ups'));

  await getBalance('Rizki', from);
});
