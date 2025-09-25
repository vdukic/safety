import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Paper } from "@mui/material";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Nema validacije, direktno vodi na /company
    navigate("/company");
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Paper sx={{ padding: 4, minWidth: 320 }} elevation={3}>
        <form onSubmit={handleLogin}>
          <h2 style={{ textAlign: "center", marginBottom: 24 }}>Login</h2>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
