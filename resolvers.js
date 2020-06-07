class Employee {
    constructor(id, { firstName, lastName, email, gender, technologies }) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.gender = gender
        this.technologies = technologies
    }
}

const employeeDatabase = {}

const resolver = {
    getEmployee: ({ id }) => {
        return new Employee(id, employeeDatabase[id])
    },
    createEmployee: ({ input }) => {
        let id = require("crypto").randomBytes(10).toString('hex')
        employeeDatabase[id] = input
        return new Employee(id, input)
    }
}

export default resolver