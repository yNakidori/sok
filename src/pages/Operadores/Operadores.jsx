import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  InputAdornment,
  Chip,
  Tabs,
  Tab,
} from "@mui/material";
import { Add as AddIcon, Search as SearchIcon } from "@mui/icons-material";
import EmptyState from "../../components/UI/EmptyState/EmptyState";

const Operadores = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tabValue, setTabValue] = useState(0);

  // Mock de operadores (sem backend)
  const [users] = useState([]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const getRoleColor = (role) => {
    if (role === "supervisor") return "primary";
    return "default";
  };

  return (
    <Box>
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Box>
          <Typography variant="h4" gutterBottom fontWeight="600">
            Operadores
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Gerencie os usuários e níveis de acesso do sistema.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ textTransform: "none" }}
        >
          Novo operador
        </Button>
      </Box>

      {/* FILTROS */}
      <Paper sx={{ mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} sx={{ px: 2, pt: 2 }}>
          <Tab label="Todos" sx={{ textTransform: "none" }} />
          <Tab label="Administradores" sx={{ textTransform: "none" }} />
          <Tab label="Operadores" sx={{ textTransform: "none" }} />
        </Tabs>

        <Box p={2}>
          <TextField
            placeholder="Buscar por nome ou usuário..."
            size="small"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Paper>

      {/* CONTEÚDO */}
      {users.length === 0 ? (
        <EmptyState
          message="Nenhum operador cadastrado"
          description="Adicione operadores para começar a gerenciar acessos."
        />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Usuário</TableCell>
                <TableCell>Cargo</TableCell>
                <TableCell align="right">Ações</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {users.map((user) => (
                <TableRow key={user.username} hover>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>
                    <Chip
                      label={
                        user.role === "supervisor"
                          ? "Administrador"
                          : "Operador"
                      }
                      size="small"
                      color={getRoleColor(user.role)}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Button size="small" sx={{ textTransform: "none" }}>
                      Gerenciar acesso
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Operadores;
