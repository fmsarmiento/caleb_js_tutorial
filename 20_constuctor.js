{
    // constructors - recommended than a factory function
    function User(name, age) {
        this.name = name;
        this.age = age;
        this.greetAlternative = function() { // wasteful on memory
            console.log(`I'm ${this.name} and I'm ${this.age} years old.`);
        }
    }
    User.prototype.greet = function() {
        console.log(`I'm ${this.name} and I'm ${this.age} years old.`);
    }

    let caleb = new User("Caleb", 12);
    let francis = new User("Francis", 4);
    caleb.age = 55;
    caleb.greet();
    francis.greet();
    console.log(caleb);
    console.log(francis);
}
{
    // factory functions
    function newUser(name, interests) {
        let person = {
            name: name,
            interests: interests
        };
        return person;
    }

    let kelly = newUser("Kelly",33);
    console.log(kelly);
}