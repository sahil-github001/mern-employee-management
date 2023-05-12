const db = require('./db');

const allEmployees = () => {
    return db.Employee.find({}).then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    employees: result
                }
            }
            else {
                return {
                    status: false,
                    statusCode: 401,
                    message: 'employee not found'
                }
            }
        }
    )
}

const addEmployee = (id, empName, age, designation, salary) => {
    age = parseInt(age);
    salary = parseInt(salary);
    return db.Employee.findOne({ id }).then(
        (result) => {
            if (result) {
                return {
                    status: false,
                    statusCode: 401,
                    message: 'employee already exist'
                }
            }
            else {
                const newUser = new db.Employee({
                    id,
                    empName,
                    age,
                    designation,
                    salary
                })
                newUser.save();
                return {
                    status: true,
                    statusCode: 200,
                    message: 'employee added successfull'
                }
            }
        }
    )
}

const editEmployee = (id, empName, age, designation, salary) => {
    age = parseInt(age);
    salary = parseInt(salary);

    return db.Employee.findOne({ id }).then(
        (result) => {
            if (result) {
                result.empName = empName
                result.age = age
                result.designation = designation
                result.salary = salary

                result.save()
                return {
                    status: true,
                    statusCode: 200,
                    message: 'employee updated successfully'
                }
            }
            else {
                return {
                    status: false,
                    statusCode: 401,
                    message: 'employee not found'
                }
            }
        }
    )
}

const deleteEmployee = (id) => {
    return db.Employee.deleteOne({ id }).then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    message: 'employee removed successfull'
                }
            }
            else {
                return {
                    status: false,
                    statusCode: 401,
                    message: 'employee not found'
                }
            }
        }
    )
}

module.exports = {
    allEmployees,
    addEmployee,
    deleteEmployee,
    editEmployee
}