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
import { Tooltip } from '@mui/material';

// ----------------------------------------------------------------------

export default function PostCard({ badge, index }) {
  const { cover, title, points, description, conqueredAt, acquired } = badge;


  const renderAvatar = (
    <Avatar
      alt="Badge Conquistado"
      src="https://www.creativefabrica.com/wp-content/uploads/2023/02/06/Gold-Metal-Trophy-vector-illustration-Graphics-60191104-1.jpg"
      sx={{
        zIndex: 9,
        width: 32,
        height: 32,
        position: 'absolute',
        left: (theme) => theme.spacing(3),
        bottom: (theme) => theme.spacing(-2),
        ...(!acquired && {
          zIndex: 9,
          top: 24,
          left: 24,
          width: 40,
          height: 40,
        }),
      }}
    />
  );

  const renderTitle = (
    <Link
      color="inherit"
      variant="subtitle2"
      underline="hover"
      sx={{
        height: 44,
        overflow: 'hidden',
        WebkitLineClamp: 2,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        ...(!acquired && {
          color: 'common.white',
        }),
      }}
    >
      {title}
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
            color: 'text.primary',
            ...(!acquired && {
              opacity: 0.48,
              color: 'common.white',
            }),
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
        color: 'text.disabled',
        ...(!acquired && {
          opacity: 0.48,
          color: 'common.white',
        }),
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
        ...(!acquired && { display: 'none' }),
      }}
    />
  );

  return (
    <Grid xs={12} sm={6} md={3}>
      <Tooltip title={description} arrow>
        <Card style={{ maxHeight: 300 }}>
          <Box
            sx={{
              position: 'relative',
              pt: 'calc(100% * 2 / 4)',
              ...(!acquired && {
                pt: 'calc(100% * 4 / 3)',
                '&:after': {
                  top: 0,
                  content: "''",
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
                },
              }),
            }}
          >
            {renderShape}

            {acquired ? renderAvatar : null}

            {renderCover}
          </Box>

          <Box
            sx={{
              p: (theme) => theme.spacing(4, 3, 3, 3),
              ...(!acquired && {
                width: 1,
                bottom: 0,
                position: 'absolute',
              }),
            }}
          >
            {acquired ? renderDate : null}

            {renderTitle}

            {renderInfo}
          </Box>
        </Card>
      </Tooltip>
    </Grid>
  );
}

PostCard.propTypes = {
  badge: PropTypes.object.isRequired,
  index: PropTypes.number,
};
