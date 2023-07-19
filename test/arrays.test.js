test('arrays simple', () => {
  const name = ['rizki', 'darmawan', 'saputra'];

  expect(name).toContain('darmawan');
});

test('arrays object', () => {
  const persons = [
    {
      name: 'rizki',
    },
    {
      name: 'budi',
    },
  ];

  expect(persons).toContainEqual({
    name: 'budi',
  });
});
