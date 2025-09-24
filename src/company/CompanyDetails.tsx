import { useParams } from "react-router-dom";
import React from "react";
import CompanyTabPanel from "./tabs/CompanyTabPanel";

const CompanyDetails = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, padding: 24 }}>
        <h2>Company Details</h2>
        <p>Company ID: {id}</p>
        {/* More info here */}
      </div>
      <CompanyTabPanel />
    </div>
  );
};

export default CompanyDetails;
