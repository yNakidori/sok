import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tabs,
  Tab,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import ProfileForm from "./ProfileForm";
import SecurityForm from "./SecurityForm";
import AccessInfo from "./AccessInfo";

const AccountDialog = ({ open, onClose }) => {
  const [tab, setTab] = useState(0);

  const handleChangeTab = (_, newValue) => {
    setTab(newValue);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        Conta
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Tabs
        value={tab}
        onChange={handleChangeTab}
        indicatorColor="primary"
        textColor="primary"
        sx={{ px: 2 }}
      >
        <Tab label="Perfil" />
        <Tab label="Segurança" />
        <Tab label="Acesso" />
      </Tabs>

      <DialogContent dividers>
        <Box hidden={tab !== 0}>
          <ProfileForm />
        </Box>

        <Box hidden={tab !== 1}>
          <SecurityForm />
        </Box>

        <Box hidden={tab !== 2}>
          <AccessInfo />
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AccountDialog;
