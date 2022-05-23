import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signup from "./Screen/about";
import Login from "./Screen/home";
import Dashboard from "./Screen/service";
 
export default function Approuter() {
  return (
    <Router>
      <div>
      <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="dashboard" element={<Dashboard />} /> 
      <Route path="*" element={<><h1>404 Page Not Found</h1></>} />
          
      </Routes>  
      </div>
    </Router>
  )
}