test('trhutynnes', () => {
  let value = null;
  expect(value).toBeNull();
  expect(value).toBeDefined();
  expect(value).toBeFalsy();

  value = undefined;
  expect(value).toBeUndefined();
  expect(value).toBeFalsy();

  value = 'rizki';

  expect(value).toBeTruthy();
  expect(value).toBe('rizki');
});
