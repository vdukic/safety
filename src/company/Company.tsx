
import React, { useState } from "react";
import "./Company.scss";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import AddCompanyDialog from "./AddCompanyDialog";

type Company = {
  id: number;
  name: string;
  pib: string;
  address: string;
};

const companies: Company[] = [
  { id: 1, name: "Firma A", pib: "123456789", address: "Beograd, Srbija" },
  { id: 2, name: "Firma B", pib: "987654321", address: "Novi Sad, Srbija" },
  { id: 1, name: "Firma A", pib: "123456789", address: "Beograd, Srbija" },
  { id: 2, name: "Firma B", pib: "987654321", address: "Novi Sad, Srbija" },
  { id: 1, name: "Firma A", pib: "123456789", address: "Beograd, Srbija" },
  { id: 2, name: "Firma B", pib: "987654321", address: "Novi Sad, Srbija" },
  { id: 1, name: "Firma A", pib: "123456789", address: "Beograd, Srbija" },
  { id: 2, name: "Firma B", pib: "987654321", address: "Novi Sad, Srbija" },
  { id: 1, name: "Firma A", pib: "123456789", address: "Beograd, Srbija" },
  { id: 2, name: "Firma B", pib: "987654321", address: "Novi Sad, Srbija" },
  { id: 1, name: "Firma A", pib: "123456789", address: "Beograd, Srbija" },
  { id: 2, name: "Firma B", pib: "987654321", address: "Novi Sad, Srbija" },
  { id: 1, name: "Firma A", pib: "123456789", address: "Beograd, Srbija" },
  { id: 2, name: "Firma B", pib: "987654321", address: "Novi Sad, Srbija" },
  { id: 1, name: "Firma A", pib: "123456789", address: "Beograd, Srbija" },
  { id: 2, name: "Firma B", pib: "987654321", address: "Novi Sad, Srbija" },
  { id: 1, name: "Firma A", pib: "123456789", address: "Beograd, Srbija" },
  { id: 2, name: "Firma B", pib: "987654321", address: "Novi Sad, Srbija" },
  { id: 1, name: "Firma A", pib: "123456789", address: "Beograd, Srbija" },
  { id: 2, name: "Firma B", pib: "987654321", address: "Novi Sad, Srbija" },
  { id: 1, name: "Firma A", pib: "123456789", address: "Beograd, Srbija" },
  { id: 2, name: "Firma B", pib: "987654321", address: "Novi Sad, Srbija" },
];

const CompanyTable: React.FC = () => {
  const navigate = useNavigate();


  const [open, setOpen] = useState(false);
  const [newCompany, setNewCompany] = useState({ name: "", pib: "", address: "" });

  const handleRowDoubleClick = (company: Company) => {
    navigate(`/company/${company.id}`);
  };

  const handleAdd = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
    setNewCompany({ name: "", pib: "", address: "" });
  };

  const handleDialogSave = () => {
    // Dodaj logiku za dodavanje nove firme
    setOpen(false);
    setNewCompany({ name: "", pib: "", address: "" });
  };

  const handleDialogChange = (field: string, value: string) => {
    setNewCompany(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center", marginBottom: 20 }}>Companies</h1>
        <div style={{ display: "flex", justifyContent: "right", marginBottom: 20 }}>
          <Button variant="contained" color="primary" size="medium" onClick={handleAdd}>
            Add
          </Button>
        </div>

        <AddCompanyDialog
          open={open}
          newCompany={newCompany}
          onChange={handleDialogChange}
          onClose={handleDialogClose}
          onSave={handleDialogSave}
        />

        <TableContainer component={Paper} className="table-wrapper">
          <Table className="company-table">
            <TableHead>
              <TableRow>
                <TableCell style={{ width: "40%" }}>Company</TableCell>
                <TableCell style={{ width: "25%" }}>PIB</TableCell>
                <TableCell style={{ width: "35%" }}>Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {companies.map((c) => (
                <TableRow key={c.id} hover onDoubleClick={() => handleRowDoubleClick(c)}>
                  <TableCell>{c.name}</TableCell>
                  <TableCell>{c.pib}</TableCell>
                  <TableCell>{c.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default CompanyTable;