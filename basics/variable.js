// var is function-scoped or globally scoped
// let and const are block-scoped
// let is change able const is not
// let is not declareable in a loop but var is declared


var x = 10
console.log('init var',x)
x = 5 
console.log('change var',x)

let y = 20
console.log('init let',y)
y = 30
console.log('change let',y)

const z = 20
console.log('init const',z)
// z = 3 not allowd
// console.log(z)