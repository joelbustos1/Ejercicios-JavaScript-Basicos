const person = {
    firstName: 'Joel',
    lastName: 'Bustos',
    birthYear: 2003
};

const anotherPerson = {
    firstName: 'Cristina',
    lastName: 'Bustos',
    birthYear: 1982
};

console.log(person);
console.log(anotherPerson);

const people = [person, anotherPerson];
console.log(people);
console.log(people[0]);
console.log(people[1].lastName);