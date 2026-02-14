import { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Chip,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";

// Permissões possíveis no sistema (mock)
const AVAILABLE_PERMISSIONS = [
  { key: "estoque_visualizar", label: "Visualizar estoque" },
  { key: "estoque_editar", label: "Editar estoque" },
  { key: "operadores_gerenciar", label: "Gerenciar operadores" },
  { key: "relatorios_visualizar", label: "Visualizar relatórios" },
];

const AccessInfo = () => {
  const { user } = useAuth();

  const role = user?.role || "usuário";

  // Estado local das permissões (mock)
  const [permissions, setPermissions] = useState(
    user?.permissions || []
  );

  const handleTogglePermission = (permissionKey) => {
    setPermissions((prev) =>
      prev.includes(permissionKey)
        ? prev.filter((p) => p !== permissionKey)
        : [...prev, permissionKey]
    );
  };

  const roleLabel =
    role === "supervisor" ? "Administrador" : "Operador";

  return (
    <Box>
      <Stack spacing={3}>
        {/* NÍVEL DE ACESSO */}
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Nível de acesso
          </Typography>
          <Chip
            label={roleLabel}
            color={role === "supervisor" ? "primary" : "default"}
          />
        </Box>

        <Divider />

        {/* PERMISSÕES */}
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Permissões do usuário
          </Typography>

          <FormGroup>
            {AVAILABLE_PERMISSIONS.map((perm) => (
              <FormControlLabel
                key={perm.key}
                control={
                  <Checkbox
                    checked={permissions.includes(perm.key)}
                    onChange={() => handleTogglePermission(perm.key)}
                    disabled={
                      role !== "supervisor" &&
                      perm.key === "operadores_gerenciar"
                    }
                  />
                }
                label={perm.label}
              />
            ))}
          </FormGroup>

          {role !== "supervisor" && (
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ mt: 1, display: "block" }}
            >
              Algumas permissões são exclusivas de administradores.
            </Typography>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default AccessInfo;
