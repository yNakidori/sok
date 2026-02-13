import { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import AccountDialog from "../components/Account/AccountDialog";
import AboutDialog from "../components/About/AboutDialog";

import { useTheme } from "../theme/ThemeContext";

const AppLayout = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  const [accountOpen, setAccountOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Topbar
          toggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
          onOpenAccount={() => setAccountOpen(true)}
          onOpenAbout={() => setAboutOpen(true)}
        />

        <Toolbar />

        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Box>
      </Box>

      {/* DIALOGS */}
      <AccountDialog
        open={accountOpen}
        onClose={() => setAccountOpen(false)}
      />

      <AboutDialog
        open={aboutOpen}
        onClose={() => setAboutOpen(false)}
      />
    </Box>
  );
};

export default AppLayout;
