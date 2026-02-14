import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import {
  Lock as LockIcon,
  Person as PersonIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!credentials.username || !credentials.password) return;

    /**
     * MOCK DE LOGIN (sem backend)
     * username = email
     */
    login({
      username: credentials.username,          // usado internamente
      email: credentials.username,             // email real
      name: "Lucca",                            // nome real (editável depois)
      roles: ["ADMIN", "OPERATOR"],             // cargos
    });

    navigate("/app/home");
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 400, px: 2 }}>
      <Paper sx={{ p: 4 }}>
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            SISIFO
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sistema de Controle de Estoque
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name="username"
            label="Email"
            value={credentials.username}
            onChange={handleChange}
            margin="normal"
            autoComplete="username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            name="password"
            label="Senha"
            type={showPassword ? "text" : "password"}
            value={credentials.password}
            onChange={handleChange}
            margin="normal"
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>

          <Box textAlign="center">
            <Button size="small" sx={{ textTransform: "none" }}>
              Esqueceu a senha?
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
