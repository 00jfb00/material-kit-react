/* eslint-disable no-return-assign */
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import ChallengesCard from '../components/challenges-card';
import { Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import React from 'react';
import { performance } from 'src/_mock/performance';

// ----------------------------------------------------------------------

export default function ChallengesView() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Desafios Disponíveis</Typography>
      </Stack>

      <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab label="Propostos" value="1" />
          <Tab label="Diários" value="2" />
        </TabList>
        <TabPanel value="1">
          <Grid container spacing={3}>
            {performance.challenges
              .filter((challenge) => challenge.type === 'Regular')
              .sort((a, b) => a.done - b.done || false)
              .map((challenge) => (
                <ChallengesCard key={challenge.id} challenge={challenge} />
              ))}
          </Grid>
        </TabPanel>
        <TabPanel value="2">
          <Grid container spacing={3}>
            {performance.challenges
              .filter((challenge) => challenge.type === 'Diário')
              .sort((a, b) => a.done - b.done || false)
              .map((challenge) => (
                <ChallengesCard key={challenge.id} challenge={challenge} />
              ))}
          </Grid>
        </TabPanel>
      </TabContext>
    </Container>
  );
}
