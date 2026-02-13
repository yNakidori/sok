import { useState } from "react";
import { Box, TextField, Button, Stack, Alert } from "@mui/material";

const SecurityForm = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("A nova senha e a confirmação não coincidem.");
      return;
    }

    // 🔒 Aqui futuramente entra a chamada pra API
    console.log("Alterar senha:", {
      currentPassword,
      newPassword,
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={2}>
        {error && <Alert severity="error">{error}</Alert>}

        <TextField
          label="Senha atual"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          fullWidth
        />

        <TextField
          label="Nova senha"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          fullWidth
        />

        <TextField
          label="Confirmar nova senha"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ alignSelf: "flex-start" }}
        >
          Alterar senha
        </Button>
      </Stack>
    </Box>
  );
};

export default SecurityForm;
