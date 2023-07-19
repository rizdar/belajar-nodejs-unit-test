import { sum } from '../src/sum';

test('should first', () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
