import React, { useEffect, useState } from 'react';
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';
import './EmployeeComponent.css';

export const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        })
        .catch((error) => console.error(error));
    }
  }, [id]);

  const validateForm = () => {
    let valid = true;
    const errorsCopy = { ...errors };

    if (!firstName.trim()) {
      errorsCopy.firstName = 'First name is required';
      valid = false;
    } else {
      errorsCopy.firstName = '';
    }

    if (!lastName.trim()) {
      errorsCopy.lastName = 'Last name is required';
      valid = false;
    } else {
      errorsCopy.lastName = '';
    }

    if (!email.trim()) {
      errorsCopy.email = 'Email is required';
      valid = false;
    } else {
      errorsCopy.email = '';
    }

    setErrors(errorsCopy);
    return valid;
  };

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const employee = { firstName, lastName, email };

      if (id) {
        updateEmployee(id, employee)
          .then(() => navigate('/employees'))
          .catch((error) => console.error(error));
      } else {
        createEmployee(employee)
          .then(() => navigate('/employees'))
          .catch((error) => console.error(error));
      }
    }
  };

  const pageTitle = () => (
    <h2 className="text-center">{id ? 'Update Employee' : 'Add Employee'}</h2>
  );

  return (
    <div className="employee-wrapper">
      <div className="employee-card">
        {pageTitle()}
        <div className="card-body">
          <form onSubmit={saveOrUpdateEmployee}>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                placeholder="Enter Employee First Name"
                name="firstName"
                value={firstName}
                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Enter Employee Last Name"
                name="lastName"
                value={lastName}
                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter Employee Email"
                name="email"
                value={email}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="form-group mt-4">
              <button type="submit" className="btn btn-success">
                {id ? 'Update' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
