const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/ems_db');

mongoose.connect('mongodb://0.0.0.0:27017/ems_db');

const Employee = mongoose.model('employees', {
    id: String,
    empName: String,
    age: Number,
    designation: String,
    salary: Number
})

module.exports = {
    Employee
} 