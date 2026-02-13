import { Box, Typography, Paper } from "@mui/material";
import { Inbox as InboxIcon } from "@mui/icons-material";

const EmptyState = ({
  message = "Nenhum item encontrado",
  description,
  icon: Icon = InboxIcon,
}) => {
  return (
    <Paper
      sx={{
        py: 8,
        px: 3,
        textAlign: "center",
        backgroundColor: "background.paper",
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          p: 2,
          borderRadius: 2,
          backgroundColor: "action.hover",
          mb: 2,
        }}
      >
        <Icon sx={{ fontSize: 48, color: "text.secondary" }} />
      </Box>
      <Typography variant="h6" color="text.primary" gutterBottom>
        {message}
      </Typography>
      {description && (
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      )}
    </Paper>
  );
};

export default EmptyState;
