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

//resolver map
export const resolver = {
    Query: {
        getEmployee: ({ id }) => {
            return new Employee(id, employeeDatabase[id])
        }
    },
    Mutation: {
        createEmployee: ({ input }) => {
            let id = require("crypto").randomBytes(10).toString('hex')
            employeeDatabase[id] = input
            return new Employee(id, input)
        }
    }
}