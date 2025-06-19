// Arithmetic Operators
console.log('--- Arithmetic Operators ---');
console.log('5 + 3 =', 5 + 3); // 8
console.log('5 - 3 =', 5 - 3); // 2
console.log('5 * 3 =', 5 * 3); // 15
console.log('5 / 2 =', 5 / 2); // 2.5
console.log('5 % 2 =', 5 % 2); // 1

// Comparison Operators
console.log('--- Comparison Operators ---');
console.log('5 > 3:', 5 > 3); // true
console.log('5 < 3:', 5 < 3); // false
console.log('5 == "5":', 5 == "5"); // true
console.log('5 === "5":', 5 === "5"); // false
console.log('5 != 3:', 5 != 3); // true
console.log('5 !== "5":', 5 !== "5"); // true

// Logical Operators
console.log('--- Logical Operators ---');
console.log('true && false:', true && false); // false
console.log('true || false:', true || false); // true
console.log('!true:', !true); // false

// Assignment Operators
console.log('--- Assignment Operators ---');
let a = 5;
console.log('a =', a);
a += 3;
console.log('a += 3 ->', a);
a -= 2;
console.log('a -= 2 ->', a);
a *= 2;
console.log('a *= 2 ->', a);
a /= 3;
console.log('a /= 3 ->', a);

// Other Operators
console.log('--- Other Operators ---');
console.log('typeof 123:', typeof 123); // number
console.log('typeof "abc":', typeof "abc"); // string
console.log('typeof true:', typeof true); // boolean

function Person() {}
let p = new Person();
console.log('p instanceof Person:', p instanceof Person); // true

let result = (5 > 3) ? "yes" : "no";
console.log('(5 > 3) ? "yes" : "no" ->', result);

// String concatenation with +
console.log('--- String Concatenation ---');
console.log('"Hello" + " World" =', "Hello" + " World"); // "Hello World"
