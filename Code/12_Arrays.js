// declaration of arrays
let arrayFirst = new Array()

// way2
let arraySecond = []

// way3 with values
let arrayWithValues1 = [1,2,3,4,5]

//length
// console.log(arrayWithValues1.length)

// adding value
arrayFirst.push("first", "second")
// console.log(arrayFirst)

// fetch with index
// console.log(arrayFirst[0])
// console.log(arrayFirst[2])

// for-of-loop
let nums = [4,4,5,6,7,8,9]

for (some of nums) {
    // console.log(some)
}

// with for-in, arrays will give index values
for (some in nums) {
    console.log(some)
}

let numms = [3,4,5,6,7]
console.log(numms);

// destructuring
let [a,b,c,d] = numms
console.log(a,b,c,d)

// we can skip some values too
let [r,,t] = numms
console.log(t)

// swapping 
let m=5, n=9
console.log(m, n)

//[m,n] = [n,m]
console.log(n,m)

//split
let words = 'My name is firstname lastname'.split(' ')
console.log(words)

let [x,y,z] = words
console.log(x, y)


let[,,,...j] = words
console.log(j)