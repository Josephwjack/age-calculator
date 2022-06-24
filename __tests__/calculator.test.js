import { SolarCalculator } from './../src/agecalc.js';

describe('SolarCalculator', () => {
  let calc;
  
  beforeEach(() => {
    calc = new SolarCalculator(28, 85);
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
    expect(calc.marsCalc()).toEqual(14)
  }); //test 4 passed
  test('should correctly return persons age in jupiter years', () => {
    expect(calc.jupiterCalc()).toEqual(2)
  }); //test 5 passed
  test('should return how many solar years a user has left to live on mercury', () => {
    expect(calc.mercLifeCalc()).toEqual(237)
  }); // test 6 passed
  test('should return how many solar years a user has left to live on venus', () => {
    expect(calc.venusLifeCalc()).toEqual(91)
  }); // test 7 passed
  test('should return how many solar years a user has left to live on mars', () => {
    expect(calc.marsLifeCalc()).toEqual(30)
  }); // test 8 passed
  test('should return how many solar years a user has left to live on jupiter', () => {
    expect(calc.jupiterLifeCalc()).toEqual(4)
  }); // test 9 passed
  test('should return years past the life expectancy with a positive integer', () => {
  let yearsLeft = -4;
  expect(calc.jupiterLifeCalc(yearsLeft)).toBe(4)
  });
})