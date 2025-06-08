# Employee Management System (EMS)

A full-stack Employee Management System that allows users to perform CRUD operations on employee data with secure login and database storage. Built with **Spring Boot (Java)** for the backend, **MySQL** for data persistence, and a lightweight **HTML/CSS/JavaScript** frontend.

## Features

-  User Authentication using JWT
-  Employee CRUD operations (Create, Read, Update, Delete)
-  RESTful API with Spring Boot
-  SQL database integration using MySQL
-  Simple, user-friendly frontend interface
-  Modular code structure

## Folder Structure

├── backend/ # Spring Boot backend
│ ├── src/
│ │ ├── main/java/com/ems/
│ │ └── resources/application.properties
│ └── pom.xml
├── frontend/ # Static frontend files
│ ├── index.html
│ ├── login.html
│ ├── register.html
│ ├── employees.html
│ └── styles.css
└── README.md

 ## API Endpoints
 
| Method | Endpoint              | Description             |
| ------ | --------------------- | ----------------------- |
| POST   | `/api/auth/register`  | Register a new user     |
| POST   | `/api/auth/login`     | Login and get JWT token |
| GET    | `/api/employees`      | Get all employees       |
| POST   | `/api/employees`      | Create a new employee   |
| PUT    | `/api/employees/{id}` | Update an employee      |
| DELETE | `/api/employees/{id}` | Delete an employee      |

## Tech Stack

- Frontend: HTML5, CSS3, JavaScript

- Backend: Java 17, Spring Boot, Spring Security, JPA
- Database: MySQL
- Build Tool: Maven
- Auth: JWT (JSON Web Token)

## Future Enhancements

- Role-based access control (Admin/User)

- Employee search, filter, pagination

- Deploy to Heroku or Netlify

- Profile picture upload

- Responsive UI with Angular
