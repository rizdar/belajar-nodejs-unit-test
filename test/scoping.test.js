beforeAll(() => {
  console.info('Before All outer');
});

afterAll(() => {
  console.info('After All outer');
});

beforeEach(() => {
  console.info('Before each outer');
});
afterEach(() => {
  console.info('After each outer');
});

test('test outer', () => console.info('test outer'));

describe('Inner', () => {
  beforeEach(() => {
    console.info('Before each inner');
  });
  afterEach(() => {
    console.info('After each inner');
  });

  test('test inner', () => {
    console.info('inner');
  });
});
