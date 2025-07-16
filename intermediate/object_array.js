console.log('Object')

const obj ={
    name:'Ali',
    age:30,
    active:true,
    greet: function() {
        console.log(`hi dear, i am `+ this.name+' and ' + this.age+' years old' +'\n', typeof(this.name))
    }
}


console.log(obj.name)
console.log(obj.age)
console.log(obj['name'])
obj.greet()


console.log('\n Array')
let arr = ['man',2,true]
arr.push(3)
arr.push(4)
arr.pop() //remove last
arr.shift() //remove first
console.log(arr[1])
console.log(arr[2])
arr.forEach(value =>{
    console.log('foreach: '+value)
})

console.log('\n Object Array')
let objArr = [
    {name:'Ali', age:30, active:true},
    {name:'Wali', age:25, active:false},
    {name:'Muli', age:20, active:true}
]
console.log
objArr.forEach((v, idx) => {
    for (let key in objArr[idx]) { // or key in v
        console.log(`key: ${key}, value: ${v[key]}`)
    }
    console.log('\n '+ idx)
})