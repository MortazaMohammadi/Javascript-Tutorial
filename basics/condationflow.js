
console.log('else if block')
let a = 20

if (a >= 20){
    console.log('it is begger then 20')
}


let str = 'mohammadi'
if ('m' == str){
    console.log(true)
}else{
    console.log(false)
}

let x = 5
let y = '5'
if (x == y){
    console.log(true)
}

if ( x === y){
    console.log(true)
}else{
    console.log(false)
}

if (5 == y && 5 === y){
    console.log(true)
}else{
    console.log('type is not the same')
}

console.log('\n\nswitch case block')
let day = 2 
switch (day){
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('Tuesday')
        break;
    default:
        console.log('other day')
}

console.log('\n\nTernary Operator')



let loggedIn = true
let message = loggedIn ? ' wellcom' : "bye"
console.log(message, loggedIn)