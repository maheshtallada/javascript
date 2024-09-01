let obj1 = {}
console.log(obj1)

let obj2 = {
    name: 'Mahesh',
    age: 16
}
console.log(obj2)
console.log(obj2.name, obj2.age)


console.log(obj2['name'])


let vari = 'name'
console.log(obj2.vari)
console.log(obj2[vari])

// complete object
let employee = {
    name: 'Mahesh',
    age: 21,
    address: {
        hNo: 7834,
        area: 'Junilee Hills'
    }
}

console.log(employee.address.area)
console.log(employee.address.area.length)
console.log(employee.address.area1?.length)

delete employee.address

console.log(employee)

// for in loop
for(let key in employee) {
    console.log(key)
}


for(let key in employee) {
    console.log(key, employee[key])
}