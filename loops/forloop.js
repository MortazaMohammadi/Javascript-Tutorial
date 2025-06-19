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