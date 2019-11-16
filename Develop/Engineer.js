const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }

    getGithub() {
        return this.github;
    };
}

module.exports = Engineer;

// const engineer = new Engineer("levi", 1, "giraudlevi@gmail.com", "levgir");

// console.log(engineer.getName());
// console.log(engineer.getRole());

// console.log(engineer.getEmail());