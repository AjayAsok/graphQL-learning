import makeExecutableSchema from 'graphql-tools'
import resolver from './resolvers'

const typeDef = `
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

`
const schema = makeExecutableSchema(typeDef, resolver)

export { schema }