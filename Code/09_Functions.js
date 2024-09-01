// function definition
function start() {
    console.log('Java Script triggered')
}

// function call
start()

//pass arguments and get a value in return
function start(user) {
    return `${user} has started java script`
}

// call function with parameter(s)
console.log(start('Mahesh Tallada'))

// Function Expression
let funcexp = function(num1, num2) {
    // console.log(mahesh)
    return num1 + num2
}

// calling function in function expression
console.log(funcexp(2,3))

let add = funcexp
console.log(add(2,3))

console.log(add)

let print = function newF(mahesh) {
    console.log(mahesh);
}


// variable declaration after defining function
// observe logs of the function above
let mahesh = 'Mahesh Gupta Tallada'
print(mahesh)

let printArrow = (mahesh) => console.log(mahesh)
printArrow(mahesh)