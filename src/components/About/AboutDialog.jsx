import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Tabs,
  Tab,
  Box,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

/**
 * Conteúdo - Sobre
 */
const AboutInfo = () => (
  <Box>
    <Typography variant="h6" gutterBottom>
      SISIFO ERP
    </Typography>

    <Typography variant="body2" color="text.secondary" paragraph>
      O SISIFO é um sistema de gestão focado em controle de estoque, pedidos e
      unidades, desenvolvido para ser simples, resiliente e eficiente.
    </Typography>

    <Typography variant="body2" color="text.secondary" paragraph>
      Inspirado no mito de Sísifo, o sistema representa constância, controle e
      evolução contínua dos processos empresariais.
    </Typography>

    <Divider sx={{ my: 2 }} />

    <Typography variant="caption" color="text.secondary">
      Versão do sistema: 1.0.0
    </Typography>
  </Box>
);

/**
 * Conteúdo - Contato
 */
const ContactInfo = () => (
  <Box>
    <Typography variant="h6" gutterBottom>
      Contato
    </Typography>

    <Typography variant="body2" color="text.secondary">
      Suporte técnico:
    </Typography>

    <Typography variant="body2">suporte@sisifo.com</Typography>

    <Typography variant="body2" sx={{ mt: 2 }} color="text.secondary">
      Horário de atendimento:
    </Typography>

    <Typography variant="body2">
      Segunda a sexta, das 9h às 18h
    </Typography>
  </Box>
);

/**
 * Conteúdo - Manual do Usuário
 */
const UserManual = () => (
  <Box>
    <Typography variant="h6" gutterBottom>
      Manual do Usuário
    </Typography>

    <Typography variant="body2" color="text.secondary" paragraph>
      Aqui você encontrará orientações básicas para utilizar o sistema.
    </Typography>

    <Typography variant="body2">
      • Cadastro de produtos  
      • Controle de estoque  
      • Criação de pedidos  
      • Gestão de unidades
    </Typography>

    <Typography
      variant="body2"
      color="text.secondary"
      sx={{ mt: 2 }}
    >
      Em breve: manual completo interativo.
    </Typography>
  </Box>
);

/**
 * ABOUT DIALOG
 */
const AboutDialog = ({ open, onClose }) => {
  const [tab, setTab] = useState(0);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        Sobre o sistema

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Divider />

      <Tabs
        value={tab}
        onChange={(_, newValue) => setTab(newValue)}
        variant="fullWidth"
      >
        <Tab icon={<InfoOutlinedIcon />} label="Sobre" />
        <Tab icon={<ContactMailOutlinedIcon />} label="Contato" />
        <Tab icon={<MenuBookOutlinedIcon />} label="Manual" />
      </Tabs>

      <Divider />

      <DialogContent sx={{ minHeight: 260 }}>
        {tab === 0 && <AboutInfo />}
        {tab === 1 && <ContactInfo />}
        {tab === 2 && <UserManual />}
      </DialogContent>
    </Dialog>
  );
};

export default AboutDialog;
