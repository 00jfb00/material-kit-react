import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import HardSkillsCard from '../components/hard-skills-card';
import { ladders } from 'src/_mock/hard-skills';

// ----------------------------------------------------------------------

export default function ProductsView() {
  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Ladders Técnicas
      </Typography>

      <Grid container spacing={3}>
        {ladders
          .sort((a, b) => (a.status === 'Concluída') - (b.status === 'Concluída') || false)
          .map((ladder) => (
            <Grid key={ladder.id} xs={12} sm={6} md={3}>
              <HardSkillsCard ladder={ladder} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
