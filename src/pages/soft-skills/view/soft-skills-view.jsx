import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import SoftSkillsCard from '../components/soft-skills-card';
import { ladders } from 'src/_mock/soft-skills';

// ----------------------------------------------------------------------

export default function SoftSkillsView() {
  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Ladders Comportamentais
      </Typography>

      <Grid container spacing={3}>
        {ladders.map((ladder) => (
          <Grid key={ladder.id} xs={12} sm={6} md={3}>
            <SoftSkillsCard ladder={ladder} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
