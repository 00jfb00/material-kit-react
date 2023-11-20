import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { fDate } from 'src/utils/format-time';
import { fShortenNumber } from 'src/utils/format-number';

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import { BorderLinearProgress } from 'src/components/progress';
import { Tooltip } from '@mui/material';

// ----------------------------------------------------------------------

export default function ChallengeCard({ challenge }) {
  const { cover, title, description, points, done, progress, conqueredAt } = challenge;

  const renderAvatar = (
    <Avatar
      sx={{
        position: 'absolute',
        bottom: (theme) => theme.spacing(-2),
        backgroundColor: 'success.main',
        zIndex: 9,
        top: 24,
        left: 24,
        width: 40,
        height: 40,
      }}
    >
      <Iconify width={40} icon="lets-icons:done-duotone" />
    </Avatar>
  );

  const renderTitle = (
    <Link
      color="inherit"
      variant="subtitle2"
      underline="none"
      sx={{
        overflow: 'hidden',
        WebkitLineClamp: 2,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        typography: 'h5',
        height: 60,
        color: 'common.white',
      }}
    >
      {title}
    </Link>
  );

  const renderProgress = (
    <Tooltip title={`${progress}% concluído`} arrow>
      <BorderLinearProgress variant="determinate" value={progress} />
    </Tooltip>
  );

  const renderDescription = (
    <Link
      color="inherit"
      variant="caption"
      underline="none"
      sx={{
        overflow: 'hidden',
        WebkitLineClamp: 2,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        typography: 'caption',
        height: 60,
        color: 'common.white',
      }}
    >
      {description}
    </Link>
  );

  const renderInfo = (
    <Stack
      direction="row"
      flexWrap="wrap"
      spacing={1.5}
      justifyContent="flex-end"
      sx={{
        mt: 3,
        color: 'text.disabled',
      }}
    >
      {[{ number: points, icon: 'mdi:star-four-points-circle' }].map((info, _index) => (
        <Stack
          key={_index}
          direction="row"
          sx={{
            opacity: 0.48,
            color: 'common.white',
          }}
        >
          <Iconify width={16} icon={info.icon} sx={{ mr: 0.5 }} />
          <Typography variant="caption">Vale {fShortenNumber(info.number)} pontos</Typography>
        </Stack>
      ))}
    </Stack>
  );

  const renderCover = (
    <Box
      component="img"
      alt={title}
      src={cover}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderDate = (
    <Typography
      variant="caption"
      component="div"
      sx={{
        mb: 2,
        opacity: 0.48,
        color: 'common.white',
      }}
    >
      {fDate(conqueredAt)}
    </Typography>
  );

  const renderShape = (
    <SvgColor
      color="paper"
      src="/assets/icons/shape-avatar.svg"
      sx={{
        width: 80,
        height: 36,
        zIndex: 9,
        bottom: -15,
        position: 'absolute',
        color: 'background.paper',
        display: 'none',
      }}
    />
  );

  return (
    <Grid xs={12} sm={12} md={6}>
      <Card>
        <Box
          sx={{
            position: 'relative',
            '&:after': {
              top: 0,
              content: "''",
              width: '100%',
              height: '100%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
            },
            pt: {
              xs: 'calc(100% * 4 / 3)',
              sm: 'calc(100% * 3 / 4.66)',
            },
          }}
        >
          {renderShape}

          {done ? renderAvatar : null}

          {renderCover}
        </Box>

        <Box
          sx={{
            p: (theme) => theme.spacing(4, 3, 3, 3),
            width: 1,
            bottom: 0,
            position: 'absolute',
          }}
        >
          {done ? renderDate : null}

          {renderTitle}

          {renderDescription}

          {renderProgress}

          {renderInfo}
        </Box>
      </Card>
    </Grid>
  );
}

ChallengeCard.propTypes = {
  challenge: PropTypes.object.isRequired,
};
