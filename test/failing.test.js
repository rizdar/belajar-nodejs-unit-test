import { sayHello } from '../src/sayHello';

describe('say Hello', () => {
  it('should succes when sayHello with name argument', () => {
    expect(sayHello('Rizki')).toBe('Hello Rizki');
  });

  it.failing('should fail when sayHello is null', () => {
    sayHello(null);
  });
});
