import mongoose from 'mongoose'
import Sequelize from 'sequelize'
import _ from 'lodash'
import casual from 'casual'


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
        type: String
    },
})

const Employees = mongoose.model('employees', employeeSchema)

// SQL

const sequelize = new Sequelize('database', null, null, {
    dialect: 'sqlite',
    storage: './department.sqlite'
})

const Department = sequelize.define('department', {
    name: { type: Sequelize.STRING },
    head: { type: Sequelize.STRING }
})
Department.sync({ force: true }).then(() => {
    _.times(10, (i) => {
        Department.create({
            // name: casual._first_name,
            // head: casual._last_name
            name: 'name' + i,
            head: 'head' + i
        })
    })
})

export { Employees, Department }