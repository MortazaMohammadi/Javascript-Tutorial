console.log('primitive datatypes')
let str = 'hello';
let age = 30;
let isonline = true;
let x;
let empty = null;
let big = 1232432534460n
let id = Symbol('ID')

console.log('str:', str, typeof str);
str = 3;
console.log('str (after reassignment):', str, typeof str);
console.log('age:', age, typeof age);
console.log('isonline:', isonline, typeof isonline);
console.log('x (undefined):', x, typeof x);
console.log('empty (null):', empty, typeof empty);
console.log('big:', big, typeof big);
console.log('id:', id, typeof id);
console.log('\n\n')


console.log('None primitive datypes')
let person={
    name: 'ali',
    age: 30
}
console.log(person)
console.log(person.name)
console.log(person.age)


let colors = ['red','green','blue'];

console.log(colors)
console.log(colors[0])
console.log(colors[1])
console.log(colors[2])


console.log('deference of permitive and none permitive')

let a = 10;
let b = a
b = 20
console.log(a)

let obj1 = {value: 10}
let obj2 = obj1
obj2.value = 20
console.log(obj1.value)
