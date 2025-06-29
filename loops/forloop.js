console.log('classic for loop\n');

for (let i = 1;i <=10;i++){
    console.log(i)
}
for (let i = 10;i>=1; i--){
    console.log(i)
}
let list = ['ali', 'wali', 'muli'];
for (let i = list.length-1; i>=0;i--){
    console.log(list[i])
}

let str = 'zyxwvutsrqponmlkgihgfedcba'
let result = ''
for (let i = str.length-1;i>=0;i--){
    result += str[i]
}
console.log(result)


// SELECTION SORT

let mylist = [5,7,2,4,0,1,5,9,2,4,12,78,34,9,23,];
console.log(`before sort: ${mylist}`)

for (var i = 0; i <= mylist.length-1;i++){
    mini = mylist[i]
    swap = 0
    minidx = i
    for (var j = i; j<= mylist.length-1;j++){
        [mini,minidx] = (mini>mylist[j]) ? [mylist[j],j] : [mini,minidx]
    }
    swap = mylist[i]
    mylist[i] = mini
    mylist[minidx] = swap
}
console.log(`after selection sort: ${mylist}`)


// for loop with continue and break
console.log('for loop with continue and break\n');
for (let i = 1;i <=10;i++){
    if (i === 5){
        continue // skip the rest of the loop when i is 5
    }
    if (i === 8){
        break // stop the loop when i is 8
    }
    console.log(i)
}

// for loop with labels
console.log('for loop with labels\n');
outerLoop: // label for the outer loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break outerLoop; // breaks out of the outer loop
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}

outer: for (let i = 1; i <= 3; i++) {
   inner: for (let j = 1; j <= 3; j++) {
        if ( j===2){
            console.log('continue outer loop')
            continue outer
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}

// for  with of
console.log('for loop with of\n');
let arr = ['a', 'b', 'c', 'd'];
for ( let value of arr){
    console.log(value);
}

// for loop with in
console.log('for loop with in\n');
let obj = {
name:'ali',
age:25,
city:'kabul'
};
for (let key in obj){
    console.log(`${key}, "${obj[key] }`)
    if (key === 'age'){
     console.log(obj[key] + 1) }
}