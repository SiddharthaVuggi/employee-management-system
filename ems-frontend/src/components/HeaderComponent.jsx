import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderComponent.css';

const HeaderComponent = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          Employee Management System
        </Link>
      </nav>
    </header>
  );
};

export default HeaderComponent;
