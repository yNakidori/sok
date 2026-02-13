import { Box, Typography, Stack, Chip } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";

const AccessInfo = () => {
  const { user } = useAuth();

  const role = user?.role || "Usuário";
  const permissions = user?.permissions || [];

  return (
    <Box>
      <Stack spacing={2}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Nível de acesso
          </Typography>
          <Chip label={role} color="primary" />
        </Box>

        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Permissões
          </Typography>

          {permissions.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              Este usuário não possui permissões específicas.
            </Typography>
          ) : (
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {permissions.map((perm) => (
                <Chip key={perm} label={perm} size="small" />
              ))}
            </Stack>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default AccessInfo;
