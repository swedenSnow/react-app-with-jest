//!OBJECT DESTRUCT

// const person = {
//   name: 'Hani',
//   age: 25,
//   location: {
//     city: 'Gustavsberg',
//     temp: -2,
//   },
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age} years old.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`its ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {},
// };

// const { title, author } = book;

// console.log(`The book titled "${title}" is written by ${author}`);

// const { name: publisherName = 'Selfpublished' } = book.publisher;
// console.log(publisherName); // Penguin || Selfpublished

//! ARRAY DESTRUCT

const adress = [
  '1299 S JUNIPER STREET',
  'Philidelphia',
  'Pennsylvania',
  '19147',
];

const [, city, state = 'New York New York'] = adress;

console.log(`You are in ${city} ${state}.`);

const item = ['coffey (iced)', '$2.00', '$3.95', '$4.75'];

const [coffey, , mediumPrice, largePrice] = item;

console.log(
  `A medium ${coffey} costs ${mediumPrice} and a large costs ${largePrice}`
);
