import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import AppTasks from '../components/app-tasks';
import AppNewsUpdate from '../components/app-news-update';
import AppOrderTimeline from '../components/app-order-timeline';
import AppCurrentVisits from '../components/app-current-visits';
import AppWebsiteVisits from '../components/app-website-visits';
import AppWidgetSummary from '../components/app-widget-summary';
import AppConversionRates from '../components/app-conversion-rates';
import { performance } from 'src/_mock/performance';
import { averageDailyPoints } from 'src/_mock/averageDailyPoints';
import { history } from 'src/_mock/history';
import { tasks } from 'src/_mock/tasks';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Olá, Bem vindo de volta 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Seu Rank Atual"
            total={performance.rank}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Seus pontos atuais"
            total={performance.points}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Número de Badges"
            total={performance.badges.length}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Conhecimentos técnicos adquiridos"
            total={performance.progress.hardSkills.details.done}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>
        <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="Últimos desafios"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <AppTasks
            title="Tarefas"
            list={tasks.map((item) => ({
              id: item.id,
              name: item.name,
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Média de pontos diários"
            subheader="últimos 7 dias"
            chart={averageDailyPoints}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Distribuição de pontos"
            chart={{
              series: history.pointsDistribution,
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Progressão das ladders"
            subheader="% de conclusão"
            chart={{
              series: Object.values(performance.progress).map((item) => ({
                label: item.label,
                value: item.details.percentage,
              })),
            }}
          />
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Últimos pontos adquiridos"
            list={history.history.slice(0, 4).map((item) => ({
              id: item.id,
              title: item.title,
              points: item.points,
              type: item.type,
              time: item.createdAt,
            }))}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
