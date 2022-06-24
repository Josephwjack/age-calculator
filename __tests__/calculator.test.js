import { SolarCalculator } from './../src/agecalc.js';

describe('SolarCalculator', () => {
  let newCalc;
  beforeEach(() => {
    newCalc = new SolarCalculator(28);
  });

  test('should correctly return new object with users age', () => {
    expect(newCalc.age).toEqual(28);
  }); //test#1 passed

  


})