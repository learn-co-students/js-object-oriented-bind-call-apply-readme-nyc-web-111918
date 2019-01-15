// use this to copy code snippets or use your browser's console
function greet() {
	console.log(`my name is ${this.name}, hi!`);
}

greet(); // my name is , hi!

let person = {
	name: 'Bob',
	greet: greet
};

person.greet(); // my name is Bob, hi!
let sally = { name: 'Sally' };

function greet(customer) {
	console.log(`Hi ${customer}, my name is ${this.name}!`);
}

let newGreet = greet.bind(sally); // newGreet is context-bound to sally

newGreet('Bob');
// Hi Bob, my name is Sally!

greet('Bob');
// Hi Bob, my name is !

greet.bind(sally)('Bob');
