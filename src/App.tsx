import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompanyTable from "./company/Company";
import CompanyDetails from "./company/CompanyDetails";
import Login from "./Login";
import Header from "./Header";



const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/company" element={<CompanyTable />} />
        <Route path="/company/:id" element={<CompanyDetails />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
