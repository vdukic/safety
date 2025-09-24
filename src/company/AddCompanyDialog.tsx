import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@mui/material";

export type AddCompanyDialogProps = {
  open: boolean;
  newCompany: { name: string; pib: string; address: string };
  onChange: (field: string, value: string) => void;
  onClose: () => void;
  onSave: () => void;
};

const AddCompanyDialog: React.FC<AddCompanyDialogProps> = ({ open, newCompany, onChange, onClose, onSave }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Dodaj novu firmu</DialogTitle>
    <DialogContent>
      <TextField
        autoFocus
        margin="dense"
        label="Naziv firme"
        type="text"
        fullWidth
        value={newCompany.name}
        onChange={e => onChange("name", e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        margin="dense"
        label="PIB"
        type="text"
        fullWidth
        value={newCompany.pib}
        onChange={e => onChange("pib", e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        margin="dense"
        label="Adresa"
        type="text"
        fullWidth
        value={newCompany.address}
        onChange={e => onChange("address", e.target.value)}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Otkaži</Button>
      <Button onClick={onSave} variant="contained" color="primary">Sačuvaj</Button>
    </DialogActions>
  </Dialog>
);

export default AddCompanyDialog;
