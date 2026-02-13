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
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Add as AddIcon,
  Search as SearchIcon,
  MoreVert as MoreIcon,
} from "@mui/icons-material";
import EmptyState from "../../components/UI/EmptyState/EmptyState";

const Produtos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
            Produtos
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Cadastre e gerencie seus produtos
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ textTransform: "none" }}
        >
          Novo Produto
        </Button>
      </Box>

      <Paper sx={{ mb: 3 }}>
        <Box p={2}>
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
        </Box>
      </Paper>

      {products.length === 0 ? (
        <EmptyState
          message="Nenhum produto cadastrado"
          description="Crie seu primeiro produto para começar"
        />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>SKU</TableCell>
                <TableCell>Categoria</TableCell>
                <TableCell align="right">Preço</TableCell>
                <TableCell>Unidade</TableCell>
                <TableCell align="right">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id} hover>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.sku}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell align="right">{product.price}</TableCell>
                  <TableCell>{product.unit}</TableCell>
                  <TableCell align="right">
                    <IconButton size="small" onClick={handleMenuOpen}>
                      <MoreIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Editar</MenuItem>
        <MenuItem onClick={handleMenuClose}>Duplicar</MenuItem>
        <MenuItem onClick={handleMenuClose}>Excluir</MenuItem>
      </Menu>
    </Box>
  );
};

export default Produtos;
