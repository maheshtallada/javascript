// forEach
let items = [2344,345,567,678]
items.forEach(x => console.log(x));

// full form
items.forEach( (x)=> {
    console.log(x)
})


// However as we know for one line {} are not required.
// as well as for one paramm () is not required

// we can pass index as second param, third as entire array
items.forEach( (r,y,u) => console.log(r,y,u))

// filter
let even = items.filter(x => x%2 ==0)
console.log(even)


items.filter(x => x%2 ==0)
.forEach( x=> console.log(x))


// map
console.log(items.map(x => x*10))

// trying forEach
console.log(items.forEach(x => x*10))

// reduce
console.log(items.reduce( (a,b) => a+b))