// create a function with camel case name instead of all small

// to identify it as constructor

function Alien(name, tech) {
    // there's no specific declaration of variables
    // directly assign using this

    this.memberName = name;
    this.memberTechnology = tech;

    this.memberWork = function () {
        console.log(`don't touch ${this.memberTechnology}, till it works, $${this.memberName}`)
    }
}

let alien1 = new Alien('mahesh', 'buildAlien')
alien1.memberWork