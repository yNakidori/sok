import { Box, Typography, Divider, Stack } from "@mui/material";

const AboutInfo = () => {
  return (
    <Box>
      <Stack spacing={2}>
        <Typography variant="h5" fontWeight="600">
          SISIFO ERP
        </Typography>

        <Typography variant="body1" color="text.secondary">
          O <strong>SISIFO</strong> é um sistema de gestão empresarial (ERP)
          desenvolvido para oferecer controle, clareza e consistência nos
          processos de estoque, pedidos e unidades.
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Pensado para equipes que lidam diariamente com grandes volumes de
          informações, o SISIFO prioriza simplicidade operacional, organização
          visual e confiabilidade dos dados.
        </Typography>

        <Divider />

        <Typography variant="subtitle1" fontWeight="500">
          Filosofia do nome
        </Typography>

        <Typography variant="body2" color="text.secondary">
          O nome SISIFO é inspirado no mito de <strong>Sísifo</strong>, figura da
          mitologia grega conhecida por empurrar uma pedra montanha acima,
          repetidamente.
        </Typography>

        <Typography variant="body2" color="text.secondary">
          No contexto do sistema, Sísifo representa a constância, a disciplina e
          a importância de processos bem definidos. Diferente do mito, aqui o
          esforço não é em vão: cada ação gera controle, histórico e evolução
          contínua do negócio.
        </Typography>

        <Divider />

        <Typography variant="caption" color="text.secondary">
          Versão do sistema: 1.0.0 • SISIFO ERP
        </Typography>
      </Stack>
    </Box>
  );
};

export default AboutInfo;
