import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import BadgesCard from '../components/badges-card';
import BadgesSearch from '../components/badges-search';
import { performance } from 'src/_mock/performance';
import { badges } from 'src/_mock/badges';
import { useState } from 'react';
import { applyFilter } from '../utils/filter';

// ----------------------------------------------------------------------

export default function BadgesView() {
  const [filterName, setFilterName] = useState('');

  const handleFilterByName = (name) => {
    setFilterName(name);
  };

  const badgeList = badges.map((badge) => {
    const conquered = performance.badges.find((b) => b.id === badge.id) || {};
    badge = { ...badge, ...conquered };
    return badge;
  });

  const badgeFiltered = applyFilter({
    inputData: badgeList,
    comparator: undefined,
    filterName,
  });

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Badges</Typography>
      </Stack>

      <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
        <BadgesSearch
          filterName={filterName}
          onFilterName={handleFilterByName}
          badges={badgeList}
        />
      </Stack>

      <Grid container spacing={3}>
        {badgeFiltered.map((badge, index) => (
          <BadgesCard key={badge.id} badge={badge} index={index} />
        ))}
      </Grid>
    </Container>
  );
}
