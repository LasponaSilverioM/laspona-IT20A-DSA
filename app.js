class Person {
    #name;
    #age;
    #occupation;

    constructor(name, age, occupation) {
        this.#name = name;
        this.#age = age;
        this.#occupation = occupation;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    getOccupation() {
        return this.#occupation;
    }
}

class Student extends Person {
    #major;

    constructor(name, age, occupation, major) {
        super(name, age, occupation);
        this.#major = major;
    }

    getMajor() {
        return this.#major;
    }
}

const student = new Student('Silverio Laspona', 20, 'Student', 'Information Technology');


console.log("Student Name:" + student.getName());
console.log("Age:" + student.getName());
console.log("Occupation:" + student.getName());
console.log("Major:" + student.getName());

const studentInfoDiv = document.getElementById('Student-Info');
studentInfoDiv.innerHTML = `
    <h2>Student Information</h2>
    <p><strong>Name:</strong> ${student.getName()}</p>
    <p><strong>Age:</strong> ${student.getAge()}</p>
    <p><strong>Occupation:</strong> ${student.getOccupation()}</p>
    <p><strong>Major:</strong> ${student.getMajor()}</p>
`;