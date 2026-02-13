import { Box, Typography, Stack } from "@mui/material";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

const UserManual = () => {
  return (
    <Box>
      <Stack spacing={3} alignItems="flex-start">
        <Typography variant="h5" fontWeight="600">
          Manual do Usuário
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Estamos preparando um material completo para orientar o uso do
          sistema.
        </Typography>

        <Stack direction="row" spacing={1.5} alignItems="center">
          <MenuBookOutlinedIcon color="primary" />
          <Typography variant="body2">
            Acesse o manual por aqui em breve.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default UserManual;
