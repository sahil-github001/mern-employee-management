const express = require('express');
const cors = require('cors');
const logic = require('./Services/logic');

const server = express();

// server.use(cors({
//     origin: 'http://localhost:3000'
// }))

server.use(cors({
    origin: ['http://localhost:3000', 'http://192.168.126.196:3000']
}));

server.use(express.json());

server.listen(8000, () => {
    console.log('listening on the port 8000')
})

// API call for get all employees
server.get('/getEmployees', (req, res) => {
    logic.allEmployees().then(
        (result) => {
            res.status(result.statusCode).json(result)
        }
    )
})

// API call for add employees
server.post('/addEmployees', (req, res) => {
    logic.addEmployee(req.body.id, req.body.empName, req.body.age, req.body.designation, req.body.salary).then(
        (result) => {
            res.status(result.statusCode).json(result)
        }
    )
})

// API call for edit employees
server.post('/editEmployees', (req, res) => {
    logic.editEmployee(req.body.id, req.body.empName, req.body.age, req.body.designation, req.body.salary).then(
        (result) => {
            res.status(result.statusCode).json(result)
        }
    )
})

// API call for delete employees
server.delete('/deleteEmployee/:id', (req, res) => {
    logic.deleteEmployee(req.params.id).then(
        (result) => {
            res.status(result.statusCode).json(result)
        }
    )
})