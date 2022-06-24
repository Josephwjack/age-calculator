export class SolarCalculator {
  constructor(age) {
    this.age = age;
  }

  mercCalc() {
    let merc = (this.age / .24);
    let mercuryAge = [];
    mercuryAge = Math.floor(merc)
      return mercuryAge;
  } 

  venusCalc() {
    let venus = (this.age / .62);
    let venusAge = [];
    venusAge = Math.floor(venus)
    return venusAge;
  }
  marsCalc() {
    let mars = (this.age * 1.88);
    let marsAge = [];
    marsAge = Math.floor(mars)
    return marsAge;
  }
  jupiterCalc() {
    let jupiter = (this.age * 11.86);
    let jupiterAge = [];
    jupiterAge = Math.floor(jupiter)
    return jupiterAge;
  }
}
  