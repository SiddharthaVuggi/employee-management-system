import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import EmployeeComponent from './components/EmployeeComponent';
import  HeaderComponent  from './components/HeaderComponent';


function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <div className="container mt-4">
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<ListEmployeeComponent />} />
          <Route path="/employees" element={<ListEmployeeComponent />} />

          {/* Add or Update Employee */}
          <Route path="/add-employee" element={<EmployeeComponent />} />
          <Route path="/edit-employee/:id" element={<EmployeeComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
