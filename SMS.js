class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    displayDetails() {
        return `Name: ${this.name}, ID: ${this.id}`;
    }
}

class Student extends Person {
    constructor(name, id) {
        super(name, id);
        this.grades = [];
    }

    addGrade(grade) {
        if (grade >= 0 && grade <= 100) {
            this.grades.push(grade);
        } else {
            console.log("Grade must be between 0 and 100.");
        }
    }

    calculateAverageGrade() {
        if (this.grades.length === 0) {
            return "No grades available.";
        }
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return (sum / this.grades.length).toFixed(2);
    }

    displayDetails() {
        const baseDetails = super.displayDetails();
        const grades = this.grades.length > 0 ? this.grades.join(", ") : "No grades available";
        return `${baseDetails}, Grades: [${grades}], Average Grade: ${this.calculateAverageGrade()}`;
    }
}

class StudentManagementSystem {
    constructor() {
        this.students = [];
    }

    addStudent(name, id) {
        if (this.students.some(student => student.id === id)) {
            console.log("A student with this ID already exists.");
            return;
        }
        const newStudent = new Student(name, id);
        this.students.push(newStudent);
        console.log(`Student added: ${name}, ID: ${id}`);
    }

    findStudentById(id) {
        return this.students.find(student => student.id === id);
    }

    viewStudentDetails(id) {
        const student = this.findStudentById(id);
        if (student) {
            console.log(student.displayDetails());
        } else {
            console.log("Student not found.");
        }
    }
}