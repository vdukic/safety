import React from "react";
import "./Company.scss";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

type Company = {
  id: number;
  name: string;
  pib: string;
  address: string;
};

const companies: Company[] = [
  { id: 1, name: "Firma A", pib: "123456789", address: "Beograd, Srbija" },
  { id: 2, name: "Firma B", pib: "987654321", address: "Novi Sad, Srbija" },
];

const CompanyTable: React.FC = () => {
  const navigate = useNavigate();

  const handleRowDoubleClick = (company: Company) => {
    navigate(`/company/${company.id}`);
  };

  const handleAdd = () => {
    alert("Dodavanje nove firme");
  };

  const handleEdit = (row: Company) => {
    alert(`Edit firma: ${row.name}`);
  };

  const handleDelete = (row: Company) => {
    alert(`Delete company: ${row.name}`);
  };

  return (
    <div className="container">
      <h1>Companies</h1>
      <button className="add-btn" onClick={handleAdd}>
        Add
      </button>

      <div className="table-wrapper">
        <table className="company-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>PIB</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((c) => (
              <tr key={c.id} onDoubleClick={() => handleRowDoubleClick(c)}>
                <td>{c.name}</td>
                <td>{c.pib}</td>
                <td>{c.address}</td>
                <td>
                  <FiEdit onClick={() => handleEdit(c)} style={{ cursor: "pointer", color: "green", marginRight: 8 }} />
                  <FiTrash2 onClick={() => handleDelete(c)} style={{ cursor: "pointer", color: "red" }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyTable;