test('string', () => {
  const name = 'Rizki Darmawan';
  expect(name).toBe('Rizki Darmawan');
  expect(name).toMatch(/awan/);
});
