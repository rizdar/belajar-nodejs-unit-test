test('sting.not', () => {
  const name = 'Rizki Darmawan';

  expect(name).not.toBe('Rizka Darmawan');
  expect(name).not.toEqual('Rizka Darmawan');
  expect(name).not.toMatch(/Rizka Darmawan/);
});

test('number.not', () => {
  const value = 2 + 2;

  expect(value).not.toBeGreaterThan(5);
  expect(value).not.toBeLessThan(3);
  expect(value).not.toBe(10);
});
