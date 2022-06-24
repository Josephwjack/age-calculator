import { SolarCalculator } from './../src/agecalc.js';

describe('SolarCalculator', () => {
  let calc;
  beforeEach(() => {
    calc = new SolarCalculator(28);
  });

  test('should correctly return new object with users age', () => {
    expect(calc.age).toEqual(28);
  }); //test#1 passed

  test('should correctly return persons age in mercury years', () => {
    expect(calc.mercCalc()).toEqual(116);
  }) //test 2 passed

  test('should correctly return persons age in venus years', () => {
    expect(calc.venusCalc()).toEqual(45)
  }); // test 3 passed
  test('should correctly return persons age in mars years', () => {
    expect(calc.marsCalc()).toEqual(52)
  })

})