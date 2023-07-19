test('test toBe', () => {
  const name = 'Rizki';
  const hello = `Hello ${name}`;

  expect(hello).toBe('Hello Rizki');
});

test('test equals', () => {
  let person = { id: 'rizki' };
  Object.assign(person, { name: 'Rizki' });

  expect(person).toEqual({ id: 'rizki', name: 'Rizki' });
});
