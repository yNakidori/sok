import { useState, useEffect } from "react";
import { Box, TextField, Button, Stack } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";

const ProfileForm = () => {
  const { user } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.username || "");
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔒 Aqui futuramente entra a chamada pra API
    console.log("Atualizar perfil:", { name, email });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />

        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ alignSelf: "flex-start" }}
        >
          Salvar alterações
        </Button>
      </Stack>
    </Box>
  );
};

export default ProfileForm;
