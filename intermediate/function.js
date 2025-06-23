console.log('function declaration')
function myfunction(){
    console.log('hello i am a function')
}
myfunction()

function returnfuction(){
    return 'hi i had been returned'
}
console.log(returnfuction())


console.log('\nfunction expression \nfunction assigned to a varialbe. not hoisted')
const sayHi = function(name){
    return `Hi ${name}`
}

console.log(sayHi('sara'))

console.log('Arrow Function, ')

let arrow = (a,b) =>{
    return a + b
}
console.log(arrow(5,10))
console.log('Arrow Function with implicit return, no need for {} and return')
let arrow2 = (a,b) => a + b
console.log(arrow2(5,10))

let arrow3 = (a,b) =>{
    c = a+b
    d = a-b
    console.log('arro with more stement')
    return [c,d]
} 
console.log(arrow3(10,5))

let arrowNoparam = () =>{
 console.log('hi i am arrow with no parameters')
}
arrowNoparam()

let nobraces = x => x**2
console.log(nobraces(2))

let noblockbraceNoreturn = (a,b)=>a*b
console.log(noblockbraceNoreturn(1,2))

console.log('arrow function no need to bind this as simple function')

function Timmer(){
    this.timei = 0
    const id = setInterval(()=>{
        this.timei++
        console.log(this.timei)
    },2000
    );
    setTimeout(()=> clearInterval(id),2000)
    console.log('with arrow function we can access by this to outer scope')
}
// Timmer()
// Timmer()
// Timmer()
// new Timmer()
// new Timmer()
new Timmer()

function Timer1() {
  this.time = 0;
  const id = setInterval(function () {
    this.time++; // ❌ wrong `this` (not Timer)
    console.log(this.time);
  }, 2000);
  setTimeout(()=> clearInterval(id),2000)
    console.log('with reguler function we cannot access by this to outer scope')

}
new Timer1();

function Timmer3(){
    this.time = 0
    const id = setInterval(function(){
        this.time++
        console.log(this.time)
    }.bind(this),2000)
    setTimeout(()=> clearInterval(id),2000)
    console.log('with reguler function we can access by this to outer scope to bind this')

}
new Timmer3()


console.log('\n argument of function')
function argu(){
    Array.from(arguments).forEach((value,idx,arry)=>{
        console.log(value)
    })
}
argu(5,10,'ali')