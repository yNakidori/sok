import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Tooltip,
} from "@mui/material";
import {
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
  AccountCircle as AccountIcon,
  Logout as LogoutIcon,
  InfoOutlined as InfoIcon,
} from "@mui/icons-material";

const DRAWER_WIDTH = 240;

const Topbar = ({
  toggleTheme,
  isDarkMode,
  onOpenAccount,
  onOpenAbout,
}) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    logout();
    navigate("/login");
  };

  const handleOpenAccount = () => {
    handleMenuClose();
    onOpenAccount();
  };

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      sx={{
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        ml: `${DRAWER_WIDTH}px`,
        borderBottom: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {/* breadcrumb / título futuro */}
        </Typography>

        {/* AÇÕES DA TOPBAR */}
        <Box display="flex" alignItems="center" gap={1}>
          {/* SOBRE NÓS */}
          <Tooltip title="Sobre o SISIFO">
            <IconButton onClick={onOpenAbout} color="inherit">
              <InfoIcon />
            </IconButton>
          </Tooltip>

          {/* TEMA */}
          <IconButton onClick={toggleTheme} color="inherit">
            {isDarkMode ? <LightIcon /> : <DarkIcon />}
          </IconButton>

          {/* MENU USUÁRIO */}
          <IconButton onClick={handleMenuOpen} color="inherit">
            <AccountIcon />
          </IconButton>
        </Box>

        {/* MENU CONTA */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Box sx={{ px: 2, py: 1 }}>
            <Typography variant="subtitle2">
              {user?.name || "Usuário"}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {user?.username}
            </Typography>
          </Box>

          <Divider />

          <MenuItem onClick={handleOpenAccount}>
            <ListItemIcon>
              <AccountIcon fontSize="small" />
            </ListItemIcon>
            Conta
          </MenuItem>

          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            Sair
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
