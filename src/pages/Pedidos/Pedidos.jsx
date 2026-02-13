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

const Pedidos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tabValue, setTabValue] = useState(0);
  const [orders] = useState([]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const getStatusColor = (status) => {
    const colors = {
      Pendente: "warning",
      Confirmado: "info",
      Enviado: "primary",
      Entregue: "success",
      Cancelado: "error",
    };
    return colors[status] || "default";
  };

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Box>
          <Typography variant="h4" gutterBottom fontWeight="600">
            Pedidos
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Acompanhe e gerencie seus pedidos
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ textTransform: "none" }}
        >
          Novo Pedido
        </Button>
      </Box>

      <Paper sx={{ mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} sx={{ px: 2, pt: 2 }}>
          <Tab label="Todos" sx={{ textTransform: "none" }} />
          <Tab label="Pendentes" sx={{ textTransform: "none" }} />
          <Tab label="Em andamento" sx={{ textTransform: "none" }} />
          <Tab label="Concluídos" sx={{ textTransform: "none" }} />
        </Tabs>
        <Box p={2}>
          <TextField
            placeholder="Buscar pedidos..."
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

      {orders.length === 0 ? (
        <EmptyState
          message="Nenhum pedido encontrado"
          description="Crie um novo pedido para começar"
        />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Número</TableCell>
                <TableCell>Cliente</TableCell>
                <TableCell>Data</TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id} hover>
                  <TableCell>{order.number}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell align="right">{order.total}</TableCell>
                  <TableCell>
                    <Chip
                      label={order.status}
                      size="small"
                      color={getStatusColor(order.status)}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Button size="small" sx={{ textTransform: "none" }}>
                      Ver detalhes
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

export default Pedidos;
