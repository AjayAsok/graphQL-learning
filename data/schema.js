import { makeExecutableSchema } from 'graphql-tools'
import { resolver } from './resolvers'

const typeDefs = `
type Employee {
        id: ID
        firstName: String
        lastName: String
        emails: String
        gender: Gender
        technologies: String
}

type Department {
    id: ID
    name: String
    head: String
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
    firstName: String
    lastName: String
    emails: String
    gender: Gender
    technologies: String
}
type Query {
getEmployee(id: ID):Employee
}
type Mutation {
    createEmployee(input: EmployeeInput) :Employee
    updateEmployee(input: EmployeeInput) :Employee
    deleteEmployee(id:ID!): String
}

`
const schema = makeExecutableSchema({ typeDefs, resolver })

export { schema }