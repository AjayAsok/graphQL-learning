import mongoose, { mongo } from 'mongoose'


//Mongo Connection
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/employees", {
    useMongoClient: true
})

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    emails: {
        type: String
    },
    gender: {
        type: String
    },
    technologies: {
        type: Array
    },
})

const Employees = mongoose.model('employees', employeeSchema)

export { Employees }