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
} from "@mui/material";
import {
  Add as AddIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
} from "@mui/icons-material";
import EmptyState from "../../components/UI/EmptyState/EmptyState";

const Estoque = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items] = useState([]);

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
            Estoque
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Gerencie os itens em estoque
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ textTransform: "none" }}
        >
          Adicionar Item
        </Button>
      </Box>

      <Paper sx={{ mb: 3 }}>
        <Box p={2} display="flex" gap={2}>
          <TextField
            placeholder="Buscar produtos..."
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
          <Button
            variant="outlined"
            startIcon={<FilterIcon />}
            sx={{ textTransform: "none", minWidth: 120 }}
          >
            Filtros
          </Button>
        </Box>
      </Paper>

      {items.length === 0 ? (
        <EmptyState
          message="Nenhum item em estoque"
          description="Adicione itens ao estoque para começar"
        />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Produto</TableCell>
                <TableCell>SKU</TableCell>
                <TableCell align="right">Quantidade</TableCell>
                <TableCell>Unidade</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id} hover>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.sku}</TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell>{item.unit}</TableCell>
                  <TableCell>
                    <Chip
                      label={item.status}
                      size="small"
                      color={item.status === "Baixo" ? "error" : "success"}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Button size="small" sx={{ textTransform: "none" }}>
                      Editar
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

export default Estoque;
