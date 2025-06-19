let correct = '123'
let password =45
do{
    
    // let password = prompt('enter your password')
    if (correct == password){
        console.log('your password is correct')
        break;
    }
    else{
        console.log('PASSWORD IS INCORRECT')
    }
    password =123

} while (true)



let number = 5

while (number >0){
    console.log(number)
    number -=1

}


// calculator
let values = null
do{
    let condation = String(prompt('num operator num'))
    values = condation.split(' ')
    switch (values[1]){
        case "+":
            console.log(`sum of ${values[0]} + ${values[2]} = `, parseFloat(values[0]) + parseFloat(values[2]))
            break;
        case "-":
            console.log(`minis of ${values[0]} - ${values[2]} = `, parseFloat(values[0]) - parseFloat(values[2]))
            break;
        case '*':
            console.log(`multiple of ${values[0]} * ${values[2]} = `, parseFloat(values[0]) * parseFloat(values[2]))
            break;
        case '/':
            console.log(`divide of ${values[0]} / ${values[2]} = `, parseFloat(values[0]) / parseFloat(values[2]))
            break;
        case '%':
            console.log(`mode of ${values[0]} % ${values[2]} = `, parseFloat(values[0]) % parseFloat(values[2]))
            break;
        default:
            console.log('operator or sequence is not correct( num operator num)')
            break;
        }
} while (values.length == 3)