import { sum } from '../src/sum';

describe('when call sum(1)', () => {
  it('should to be 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('should to be 6', () => {
    expect(sum(3, 3)).toBe(6);
  });
  it('should to be 8', () => {
    expect(sum(4, 4)).toBe(8);
  });
});
