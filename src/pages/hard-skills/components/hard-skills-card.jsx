import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Label from 'src/components/label';
import { BorderLinearProgress } from 'src/components/progress';
import { Tooltip } from '@mui/material';
import { useRouter } from 'src/routes/hooks';

// ----------------------------------------------------------------------

export default function HardSkillsCard({ ladder }) {
  const router = useRouter();

  const renderStatus = (
    <Label
      variant="filled"
      color={(ladder.status === 'Concluída' && 'success') || 'info'}
      sx={{
        zIndex: 9,
        top: 16,
        right: 16,
        position: 'absolute',
        textTransform: 'uppercase',
      }}
      style={{ cursor: 'pointer' }}
    >
      {ladder.status}
    </Label>
  );

  const renderImg = (
    <Box
      component="img"
      alt={ladder.name}
      src={ladder.cover}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderInfo = (
    <Typography
      component="span"
      variant="caption"
      sx={{
        color: 'text.disabled',
      }}
    >
      {ladder.acquiredKnowledges}/{ladder.totalKnowledges} aprendizados
    </Typography>
  );

  return (
    <Card
      style={{ cursor: 'pointer' }}
      onClick={() => router.push(`/:user/hard-skills/${ladder.id}`, { state: { ladder } })}
    >
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {ladder.status && renderStatus}

        {renderImg}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="none" variant="subtitle2" noWrap>
          {ladder.name}
        </Link>

        <Tooltip title={`${Math.floor(ladder.progress)}% concluído`} arrow>
          <BorderLinearProgress variant="determinate" value={ladder.progress} />
        </Tooltip>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {renderInfo}
        </Stack>
      </Stack>
    </Card>
  );
}

HardSkillsCard.propTypes = {
  ladder: PropTypes.object,
};
