import React, { useEffect, useState } from 'react';
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';
import './ListEmployeeComponent.css';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => console.error(error));
  };

  const addNewEmployee = () => {
    navigate('/add-employee');
  };

  const updateEmployee = (id) => {
    navigate(`/edit-employee/${id}`);
  };

  const removeEmployee = (id) => {
    deleteEmployee(id)
      .then(() => getAllEmployees())
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">List of Employees</h2>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary" onClick={addNewEmployee}>
          Add Employee
        </button>
      </div>
      <table className="table table-striped table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>
            
                <button
                  className="btn btn-danger"
                  onClick={() => removeEmployee(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
