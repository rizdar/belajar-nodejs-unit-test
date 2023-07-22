import { MyExeption, callMe } from '../src/exception';

test('exceptions', () => {
  expect(() => callMe('Rizki')).toThrow();
  expect(() => callMe('Rizki')).toThrow(MyExeption);
  expect(() => callMe('Rizki')).toThrow('Ups my exeptions happens');
});

test('exception not happens', () => {
  expect(callMe('Budi')).toBe('OK');
});
