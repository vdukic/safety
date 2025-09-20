import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompanyTable from "./company/Company";
import CompanyDetails from "./company/CompanyDetails";



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CompanyTable />} />
        <Route path="/company/:id" element={<CompanyDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
