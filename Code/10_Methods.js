let laptop = {
    ram: 64,
    cpu: 'intelCore',
    gen: 'i13',
    perform: function (task) {
        // console.log(`executing ${task}`)
        // console.log(ram)
        console.log(laptop.ram);
        console.log(this.ram);
    }
}

laptop.perform('addition')

// perform()