// use this to copy code snippets or use your browser's console
document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector("#bodyy");

function greet() {
    return (`my name is ${this.name}, hi!`);
}
let person = {
    name: 'Bob',
    greet: greet
};

body.innerHTML += `<p>greet()XXXX: ${greet()}</p>`;
body.innerHTML += `<p>person.greet(): ${person.greet()}</p>`;
body.innerHTML += `<hr>`;

////////////////////////////////
let sally = { name: 'Sally' };
function greet2(customerOne, customerTwo) {
    return(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}
greet2.call(sally, 'Terry', 'George');

body.innerHTML += `<p>greet2.call(sally, 'Terry', 'George'):      ${greet2.call(sally, 'Terry', 'George')}</p>`;
body.innerHTML += `<p>greet2.apply(sally, ['Terry', 'George']):   ${greet2.apply(sally, ['Terry', 'George'])}</p>`;
body.innerHTML += `<hr>`;


let sally2 = { name: 'Sally' };

function greet3(customer) {
    return(`Hi ${customer}, my name is ${this.name}!`);
}

let newGreet = greet3.bind(sally2); // newGreet is context-bound to sally

newGreet('Bob');
// Hi Bob, my name is Sally!

greet3('Bob');
body.innerHTML += `<p>newGreet('Bob'):      ${newGreet('Bob')}</p>`;
body.innerHTML += `<p>greet('Bob')XXXXX:   ${greet('Bob')}</p>`;
body.innerHTML += `<hr>`;



})
