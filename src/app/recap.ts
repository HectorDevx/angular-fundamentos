const username: string = 'dex-starr';
const sum = (a: number, b: number) => {
  return a + b;
};
sum(1, 4);

// Creamos una clase persona
// class Person {
//   private age: number;
//   lastName: string;

//   constructor(age: number, lastName: string) {
//     this.age = age;
//     this.lastName = lastName;
//   }
// }

// Typescript puede obviar los parametros de la clase.
// Esto es lo mismo que arriba.
class Person {
  constructor(public age: number, public lastName: string) {}
}

const hec = new Person(28, 'Reyes');
hec.age;
