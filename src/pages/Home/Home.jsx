import { Box, Grid, Paper, Typography, Card, CardContent } from "@mui/material";
import {
  Inventory as InventoryIcon,
  ShoppingCart as OrderIcon,
  Category as ProductIcon,
  Store as StoreIcon,
} from "@mui/icons-material";

const StatCard = ({ title, value, icon: Icon, color }) => (
  <Card sx={{ height: "100%", minHeight: 120 }}>
    <CardContent>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h4" component="div" fontWeight="bold">
            {value}
          </Typography>
        </Box>
        <Box
          sx={{
            p: 1.5,
            borderRadius: 2,
            backgroundColor: `${color}.100`,
            color: `${color}.main`,
          }}
        >
          <Icon sx={{ fontSize: 32 }} />
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const Home = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="600">
        Dashboard
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>
        Visão geral do sistema de controle de estoque
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total de Produtos"
            value="0"
            icon={ProductIcon}
            color="primary"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Itens em Estoque"
            value="0"
            icon={InventoryIcon}
            color="success"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Pedidos Ativos"
            value="0"
            icon={OrderIcon}
            color="warning"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Unidades" value="0" icon={StoreIcon} color="info" />
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, height: 400 }}>
            <Typography variant="h6" gutterBottom>
              Atividade Recente
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="calc(100% - 40px)"
            >
              <Typography color="text.secondary">
                Nenhuma atividade registrada
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: 400 }}>
            <Typography variant="h6" gutterBottom>
              Alertas
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="calc(100% - 40px)"
            >
              <Typography color="text.secondary">
                Nenhum alerta no momento
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
