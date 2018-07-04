/*
 * Object Destructuring
 */

const person = {
  // name: 'Mark',
  age: 29,
  location: {
    city: 'California',
    temp: 86
  }
};

const { name: firstName = 'Anonymous', age } = person;

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}`);
}

const book = {
  title: 'Oathbringer',
  author: 'Brandon Sanderson',
  publisher: {
    name: 'Tor Fantasy'
  }
}

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

/*
 * Array Destructuring
 */

const address = ['123 Fake St', 'Philadelphia', 'Pennsylvania', '19147'];

const [ , addressCity, state = 'New York' ] = address;

console.log(`You are in ${addressCity} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [drink, , medPrice] = item;

console.log(`A medium ${drink} costs ${medPrice}`);