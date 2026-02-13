import {
  Box,
  Typography,
} from "@mui/material";

import {
  InventoryOutlined,
  ArchiveOutlined,
  ShoppingCartOutlined,
  HomeOutlined,
  TrendingUpOutlined,
  WarningAmberOutlined,
} from "@mui/icons-material";

/* =====================
   STAT CARD
===================== */
const StatCard = ({ title, value, icon: Icon }) => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderRadius: 3,
        p: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
        transition: "all .25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 20px 55px rgba(0,0,0,0.12)",
        },
      }}
    >
      <Box>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>

        <Typography variant="h4" fontWeight={600}>
          {value}
        </Typography>
      </Box>

      <Box
        sx={{
          p: 1.5,
          borderRadius: 2,
          background:
            "linear-gradient(135deg, #0284c7, #0ea5e9)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon fontSize="medium" />
      </Box>
    </Box>
  );
};

/* =====================
   HOME
===================== */
const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "calc(100vh - 64px)",
        p: 4,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {/* HEADER */}
      <Box>
        <Typography variant="h4" fontWeight={600}>
          Visão Geral
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Resumo geral do sistema SISIFO
        </Typography>
      </Box>

      {/* MOSAICO 2x3 */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: 3,
        }}
      >
        <StatCard
          title="Total de Produtos"
          value="0"
          icon={ArchiveOutlined}
        />

        <StatCard
          title="Itens em Estoque"
          value="0"
          icon={InventoryOutlined}
        />

        <StatCard
          title="Pedidos Ativos"
          value="0"
          icon={ShoppingCartOutlined}
        />

        <StatCard
          title="Unidades"
          value="0"
          icon={HomeOutlined}
        />

        <StatCard
          title="Mais pedido hoje"
          value="—"
          icon={TrendingUpOutlined}
        />

        <StatCard
          title="Estoque crítico"
          value="0"
          icon={WarningAmberOutlined}
        />
      </Box>

      {/* DASHBOARDS */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "2fr 1fr",
          },
          gap: 3,
        }}
      >
        {/* PRODUTOS MAIS PEDIDOS */}
        <Box
          sx={{
            bgcolor: "background.paper",
            borderRadius: 4,
            p: 4,
            minHeight: 360,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            Produtos mais pedidos
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            mb={2}
          >
            Ranking por volume de saída
          </Typography>

          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              bgcolor: "action.hover",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "text.secondary",
            }}
          >
            Gráfico ou tabela aqui
          </Box>
        </Box>

        {/* ESTOQUE CRÍTICO */}
        <Box
          sx={{
            bgcolor: "background.paper",
            borderRadius: 4,
            p: 4,
            minHeight: 360,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            Estoque crítico
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            mb={2}
          >
            Produtos abaixo do mínimo
          </Typography>

          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              bgcolor: "action.hover",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "text.secondary",
            }}
          >
            Alertas aqui
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
