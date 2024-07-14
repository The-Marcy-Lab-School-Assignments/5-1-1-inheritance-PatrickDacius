class Quadrilateral {
  constructor(side1, side2, side3, side4) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
  }

  getPerimeter() {
    const sum = this.side1 + this.side2 + this.side3 + this.side4;
    return sum;
  }
}

class Rectangle extends Quadrilateral {
  constructor(side1, side2) {
    super(side1, side2, side1, side2);

  }

  getArea() {
    return this.side1 * this.side2;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
  getDiagnoal() {
    return this.side * Math.sqrt(2);
  }
}

/* Be creative with this one! */
class Person {
  static #personInfo = [];

  constructor(name, age, hobbies = []) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    Person.#personInfo.push(this);
  }

  introducePerson() {
    return `Hello, my name is ${this.name}. I am ${this.age} years old. My hobbies include ${this.hobbies}.`;
  }

  addHobby(newHobby) {
    this.hobbies.push(newHobby);
  }

  checkAgeCategory() {
    if (this.age <= 12) {
      return 'Little kid';
    } else if (this.age <= 19) {
      return 'Teenager';
    } else if (this.age <= 59) {
      return 'Adult';
    } else {
      return 'Senior';
    }
  }

  static listInfo() {
    return [...Person.#personInfo]
  }
}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
