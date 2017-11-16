//
// Object Destructuring
//

/*
const person = {
    name: 'Andrea',
    age: 39,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
};

const {name: firstname = 'Anonymous', age } = person;
console.log(`${firstname} is ${age}.`);
 
const {city, temp: temperature } = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}
*/

//
// Array Destructuring
//
//const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const address = ['1299 S Juniper Street', undefined, 'Pennsylvania', '19147'];

const [, city = 'No city provided', state = 'No State Provided'] = address;
//console.log(`You are in ${address[1]} ${address[2]}`);
console.log(`You are in ${city} ${state}`);