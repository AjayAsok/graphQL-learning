import { buildSchema } from "graphql"

const schema = buildSchema(`
type Employee {
        id: ID
        firstName: String
        lastName: String
        emails: String
        gender: Gender
        technologies: [Technology]
}

type Technology {
    name: String
    experience: Int
}

enum Gender {
    MALE
    FEMALE
    OTHER
}

input TechnologyInput {
    name: String
    experience: Int
}

input EmployeeInput {
    id: ID
    firstName: String!
    lastName: String
    emails: String
    gender: Gender
    technologies: [TechnologyInput]
}
type Query {
getEmployee(id: ID):Employee
}
type Mutation {
    createEmployee(input: EmployeeInput) :Employee
}

`)

export default schema