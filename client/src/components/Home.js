import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaUserEdit, FaUserPlus, FaUserTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from './Header';

function Home() {

    const [allEmployees, setAllEmployees] = useState([]);

    const fetchData = async () => {
        const result = await axios.get('http://localhost:8000/getEmployees')
        setAllEmployees(result.data.employees);
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleDelete = async (id) => {
        const result = await axios.delete('http://localhost:8000/deleteEmployee/' + id)
        alert((await result).data.message)
        fetchData()
    }

    const handleEdit = (id, empName, age, designation, salary) => {
        localStorage.setItem('id', id);
        localStorage.setItem('empName', empName);
        localStorage.setItem('age', age);
        localStorage.setItem('designation', designation);
        localStorage.setItem('salary', salary);
    }

    return (
        <>
            <Header />
            <div className='d-flex p-5 pb-3 pt-3'>
                <div className='w-75 bg-light p-2 rounded'>
                    <p>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits and types and list some examples of employee management software tools.</p>
                </div>
                <div className='w-25 text-center'>
                    <Link to={'/add'}><Button className='mt-4' variant="success">Add Employee <FaUserPlus></FaUserPlus></Button>{' '}</Link>
                </div>
            </div>

            <div className='px-5'>
                <h3 className='text-center font-weight-bold'>List of Employees</h3>
                <Table className='m-1' striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Employee Name</th>
                            <th>Age</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Edit / Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allEmployees.map((item) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.empName}</td>
                                    <td>{item.age}</td>
                                    <td>{item.designation}</td>
                                    <td>{item.salary}</td>
                                    <td className='d-flex  justify-content-around'>
                                        <Link data-toggle="tooltip" data-placement="top" title="Edit employee" to={'/edit'}><Button onClick={() => handleEdit(item.id, item.empName,
                                            item.age, item.designation, item.salary)}
                                            variant="primary"><FaUserEdit></FaUserEdit></Button></Link>
                                        <Button data-toggle="tooltip" data-placement="top" title="Delete employee" variant="danger" onClick={() => handleDelete(item.id)}><FaUserTimes></FaUserTimes></Button>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Home