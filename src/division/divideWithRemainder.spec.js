import { divideWithRemainder } from "./divideWithRemainder";

describe('divideWithRemainder', () => {

  it('divides two numbers', () => {
    expect(divideWithRemainder(10, 5).result).toBe(2);
  })

  test('10 / 5 = 2, rem 0', () => {
    const {result, remainder} = divideWithRemainder(10, 5);
    expect(result).toBe(2);
    expect(remainder).toBe(0);
  })
  
  test('9 / 5 = 1, rem 4', () => {
    const {result, remainder} = divideWithRemainder(9, 5);
    expect(result).toBe(1);
    expect(remainder).toBe(4);
  })

  test('throwing error on division by zero', () => {
    expect(() => divideWithRemainder(9, 0)).toThrow();
  })
  test('throwing error when passing non-numeric parameters', () => {
    expect(() => divideWithRemainder(null, 5)).toThrow();
    expect(() => divideWithRemainder(5, null)).toThrow();
  })

})