export class SolarCalculator {
  constructor(age, lifeExpectancy) {
    this.lifeExpectancy = lifeExpectancy;
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
    let mars = (this.age / 1.88);
    let marsAge = [];
    marsAge = Math.floor(mars)
    return marsAge;
  }
  jupiterCalc() {
    let jupiter = (this.age / 11.86);
    let jupiterAge = [];
    jupiterAge = Math.floor(jupiter)
    return jupiterAge;
  }
  mercLifeCalc() {
    let mercLifeExp = (this.lifeExpectancy/.24)
    let yearsLeft = Math.floor(mercLifeExp -(this.age/.24))
    return yearsLeft;
  }
  venusLifeCalc() {
    let venusLifeExp = (this.lifeExpectancy/.62)
    let venusYearsLeft = Math.floor(venusLifeExp -(this.age/.62))
    return venusYearsLeft;
  }
  marsLifeCalc() {
    let marsLifeExp = (this.lifeExpectancy/1.88)
    let marsYearsLeft = Math.floor(marsLifeExp -(this.age/1.88))
    return marsYearsLeft;
  }

}