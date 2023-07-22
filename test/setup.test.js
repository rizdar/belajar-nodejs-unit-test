import { sum } from '../src/sum';

beforeAll(() => {
  console.info('Before All');
});

afterAll(() => {
  console.info('After All');
});

beforeEach(() => {
  console.info('Before each');
});

afterEach(() => {
  console.info('After each');
});

test('first test', () => {
  expect(sum(10, 10)).toBe(20);
});

test('second test', () => {
  expect(sum(10, 10)).toBe(20);
});
