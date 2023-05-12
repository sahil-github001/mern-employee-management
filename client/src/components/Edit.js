import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

function Edit() {

    const [id, setId] = useState('')
    const [empName, setEmpName] = useState('');
    const [age, setAge] = useState('');
    const [designation, setDesignation] = useState('');
    const [salary, setSalary] = useState(0);

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setEmpName(localStorage.getItem('empName'));
        setAge(localStorage.getItem('age'));
        setDesignation(localStorage.getItem('designation'));
        setSalary(localStorage.getItem('salary'));
    }, [])

    const history = useNavigate()

    const handleUpdate = async (e) => {
        e.preventDefault(); // avoid refreshing window
        // console.log(e.valid)

        const body = {
            id,
            empName,
            age,
            designation,
            salary
        }
        const result = await axios.post('http://localhost:8000/editEmployees', body)
        alert((await result).data.message)
        history('/')
    }

    return (
        <>
            <Header />
            <Row className='m-0 pt-3'>
                <Col md={6} className='mx-auto'>
                    <Form className='border border-3  p-4 rounded '>
                        <div className='text-center'>
                            <img width={100}  alt="employee icon" src='https://www.pngkey.com/png/full/305-3050875_employee-parking-add-employee-icon-png.png' ></img>
                        </div>

                        <Form.Group className="mb-3 ">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name"
                                value={empName}
                                onChange={(e) => setEmpName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 ">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" placeholder="Enter your age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 ">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" placeholder="Enter your designation"
                                value={designation}
                                onChange={(e) => setDesignation(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 ">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control type="text" placeholder="Enter your salary"
                                value={salary}
                                onChange={(e) => setSalary(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={(e) => handleUpdate(e)}>
                            Update employee details
                        </Button>

                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default Edit