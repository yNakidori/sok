import { Box, Typography, Stack, Divider, IconButton } from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";

const ContactInfo = () => {
  return (
    <Box>
      <Stack spacing={3}>
        <Typography variant="h5" fontWeight="600">
          Contato
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Caso tenha sugestões, dúvidas ou precise de suporte técnico, utilize
          um dos canais abaixo. Nossa equipe está sempre evoluindo o SISIFO.
        </Typography>

        <Divider />

        {/* E-mail */}
        <Stack direction="row" spacing={2} alignItems="center">
          <EmailOutlinedIcon color="primary" />
          <Box>
            <Typography variant="subtitle2">
              Sugestões de melhoria
            </Typography>
            <Typography variant="body2" color="text.secondary">
              sugestoes@sisifo.com
            </Typography>
          </Box>
        </Stack>

        {/* Suporte */}
        <Stack direction="row" spacing={2} alignItems="center">
          <SupportAgentOutlinedIcon color="primary" />
          <Box>
            <Typography variant="subtitle2">
              Suporte técnico
            </Typography>
            <Typography variant="body2" color="text.secondary">
              +55 (11) 4000-1234
            </Typography>
          </Box>
        </Stack>

        <Divider />

        {/* Redes sociais */}
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Redes sociais
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton aria-label="Instagram">
              <InstagramIcon />
            </IconButton>

            <IconButton aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>

            <IconButton aria-label="Website">
              <LanguageIcon />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default ContactInfo;
