import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  TextField,
  InputAdornment,
  Chip,
} from "@mui/material";
import {
  Add as AddIcon,
  Search as SearchIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";
import EmptyState from "../../components/UI/EmptyState/EmptyState";

const UnitCard = ({ unit, onEdit, onDelete }) => (
  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
    <CardContent sx={{ flexGrow: 1 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        mb={2}
      >
        <LocationIcon color="primary" />
        <Chip
          label={unit.active ? "Ativa" : "Inativa"}
          size="small"
          color={unit.active ? "success" : "default"}
        />
      </Box>
      <Typography variant="h6" gutterBottom fontWeight="600">
        {unit.name}
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={1}>
        {unit.address}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {unit.city} - {unit.state}
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: "flex-end", px: 2, pb: 2 }}>
      <IconButton size="small" onClick={() => onEdit(unit)}>
        <EditIcon fontSize="small" />
      </IconButton>
      <IconButton size="small" onClick={() => onDelete(unit.id)}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </CardActions>
  </Card>
);

const Unidades = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [units] = useState([]);

  const handleEdit = (unit) => {
    console.log("Edit unit:", unit);
  };

  const handleDelete = (id) => {
    console.log("Delete unit:", id);
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
            Unidades
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Gerencie suas unidades e locais
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ textTransform: "none" }}
        >
          Nova Unidade
        </Button>
      </Box>

      <Paper sx={{ mb: 3 }}>
        <Box p={2}>
          <TextField
            placeholder="Buscar unidades..."
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

      {units.length === 0 ? (
        <EmptyState
          message="Nenhuma unidade cadastrada"
          description="Adicione uma unidade para começar"
        />
      ) : (
        <Grid container spacing={3}>
          {units.map((unit) => (
            <Grid item xs={12} sm={6} md={4} key={unit.id}>
              <UnitCard
                unit={unit}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Unidades;
