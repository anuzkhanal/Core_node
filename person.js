class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`name ${this.name} and age ${this.age}`);
  }
}

module.exports = Person;
