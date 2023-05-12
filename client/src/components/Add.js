import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import employee from './Employee';
import Header from './Header';
import uuid from 'react-uuid';
import axios from 'axios';

function Add() {

  // const [id, setId] = useState('')
  const [empName, setEmpName] = useState('');
  const [age, setAge] = useState('');
  const [designation, setDesignation] = useState('');
  const [salary, setSalary] = useState(0);
  const history = useNavigate()

  const handleAdd = async (e) => {
    const ids = uuid();
    const uniqueId = ids.slice(-9, -1);

    e.preventDefault(); // avoid refreshing window
    employee.push({
    })

    const body = {
      id: uniqueId,
      empName,
      age,
      designation,
      salary
    }
    const result = await axios.post('http://localhost:8000/addEmployees', body)
    console.log(result)
    history('/')
  }

  return (
    <div>
      <Header />
      <Row className='m-0 mt-3'>
        <Col md={6} className='mx-auto'>
          <Form className='border border-3  p-4 rounded '>
            <div className='text-center'>
              <img width={100}  alt="employee icon" src='https://www.pngkey.com/png/full/305-3050875_employee-parking-add-employee-icon-png.png'></img>
            </div>

            <Form.Group className="mb-3 ">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name"
                onChange={(e) => setEmpName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label>Age</Form.Label>
              <Form.Control type="text" placeholder="Enter your age"
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label>Designation</Form.Label>
              <Form.Control type="text" placeholder="Enter your designation"
                onChange={(e) => setDesignation(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label>Salary</Form.Label>
              <Form.Control type="text" placeholder="Enter your salary"
                onChange={(e) => setSalary(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="success" type="submit" onClick={(e) => handleAdd(e)}>
              Add Employee
            </Button>

          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Add