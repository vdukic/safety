import { useParams } from "react-router-dom";
import React, { useState } from "react";
import CompanyTabPanel from "./tabs/CompanyTabPanel";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const CompanyDetails = () => {
  const { id } = useParams<{ id: string }>();

  const [files, setFiles] = useState([
    { name: "dokument1.pdf" },
    { name: "izvestaj.xlsx" },
    { name: "slika.png" }
  ]);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFileName(e.target.files[0].name);
      setFiles([...files, { name: e.target.files[0].name }]);
    }
  };

  const handleDownload = (fileName: string) => {
    alert(`Download: ${fileName}`);
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, display: "flex", gap: 24, padding: 24 }}>
        <div style={{ flex: 1, background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.05)", padding: 24 }}>
          <h2>Company Details</h2>
          <p>Company ID: {id}</p>
          {/* More info here */}
        </div>
        <div style={{ flex: 1, background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.05)", padding: 24, display: "flex", flexDirection: "column" }}>
          <h3>Fajlovi</h3>
          <div style={{ marginBottom: 16, display: "flex", alignItems: "center" }}>
            <Button variant="contained" component="label">
              Upload File
              <input type="file" hidden onChange={handleFileUpload} />
            </Button>
            {selectedFileName && (
              <span style={{ marginLeft: 12 }}>{selectedFileName}</span>
            )}
          </div>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Ime fajla</TableCell>
                  <TableCell align="right">Preuzmi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {files.map((file, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{file.name}</TableCell>
                    <TableCell align="right">
                      <IconButton onClick={() => handleDownload(file.name)}>
                        <DownloadIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <CompanyTabPanel />
    </div>
  );
};

export default CompanyDetails;
