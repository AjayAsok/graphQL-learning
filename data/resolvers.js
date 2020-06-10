import mongoose from "mongoose"
import { Employees, Department } from "./dbConnector"

const employeeDatabase = {}

//resolver map
export const resolver = {
    Query: {
        getOneEmployee: (root, { id }) => {
            return new Promise((resolve, object) => {
                Employees.findById(id, (err, employee) => {
                    if (err) reject(err)
                    else resolve(employee)
                })
            })
        },
        getDepartment: () => {
            return Department.findAll();
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
                newEmployee.save((err) => {
                    if (err) reject(err)
                    else resolve(newEmployee)
                })
            })
        },
        updateEmployee: (root, { input }) => {
            return new Promise((resolve, object) => {
                Employees.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, employee) => {
                    if (err) reject(err)
                    else resolve(employee)
                })
            })
        },
        deleteEmployee: (root, { id }) => {
            return new Promise((resolve, object) => {
                Employees.remove({ _id: id }, (err) => {
                    if (err) reject(err)
                    else resolve("Success")
                })
            })
        }
    }
}