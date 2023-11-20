import Container from '@mui/material/Container';
import PointsHistoryTimeline from '../components/points-history-timeline';
import { history } from 'src/_mock/history';

// ----------------------------------------------------------------------

export default function PointsHistoryView() {
  return (
    <Container>
      <PointsHistoryTimeline
        title="Seu histórico de pontos"
        list={history.history.map((item) => ({
          id: item.id,
          title: item.title,
          points: item.points,
          type: item.type,
          time: item.createdAt,
        }))}
      />
    </Container>
  );
}
