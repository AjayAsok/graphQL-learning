import mongoose from "mongoose"
import { Employees } from "./dbConnector"

const employeeDatabase = {}

//resolver map
export const resolver = {
    Query: {
        getEmployee: ({ id }) => {
            return new Employee(id, employeeDatabase[id])
        }
    },
    Mutation: {
        createEmployee: (root, { input }) => {
            const newEmployee = new Employees({
                firstName: input.firstName,
                lastName: input.lastName,
                emails: input.emails,
                gender: input.gender,
                technologies: input.technologies
            })
            newEmployee.id = newEmployee._id

            return new Promise((resolve, object) => {
                newEmployee.save((err, res) => {
                    if (err) reject(err)
                    else resolve(res)
                })
            })
        }
    }
}