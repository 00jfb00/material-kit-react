import React, { useState } from 'react';
import { movingMotivators } from 'src/_mock/moving-motivators';
import {
  DndContext,
  TouchSensor,
  useSensor,
  useSensors,
  closestCenter,
  PointerSensor,
  KeyboardSensor,
} from '@dnd-kit/core';
import { SortableContext, arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { SortableItem } from '../components/sortable-item';
import { Container, Grid, Stack, Typography } from '@mui/material';

const getItems = () => {
  const availableMovingMotivators = [
    {
      id: 'curiosidade',
      title: 'Curiosidade',
      details: '',
      cover: '/assets/images/moving-motivators/curiosidade.png',
    },
    {
      id: 'aceitacao',
      title: 'Aceitação',
      details: '',
      cover: '/assets/images/moving-motivators/aceitacao.png',
    },
    {
      id: 'honra',
      title: 'Honra',
      details: '',
      cover: '/assets/images/moving-motivators/honra.png',
    },
    {
      id: 'maestria',
      title: 'Maestria',
      details: '',
      cover: '/assets/images/moving-motivators/maestria.png',
    },
    {
      id: 'poder',
      title: 'Poder',
      details: '',
      cover: '/assets/images/moving-motivators/poder.png',
    },
    {
      id: 'liberdade',
      title: 'Liberdade',
      details: '',
      cover: '/assets/images/moving-motivators/liberdade.png',
    },
    {
      id: 'status',
      title: 'Status',
      details: '',
      cover: '/assets/images/moving-motivators/status.png',
    },
    {
      id: 'relacao',
      title: 'Relação',
      details: '',
      cover: '/assets/images/moving-motivators/relacao.png',
    },
    {
      id: 'ordem',
      title: 'Ordem',
      details: '',
      cover: '/assets/images/moving-motivators/ordem.png',
    },
    {
      id: 'meta',
      title: 'Meta',
      details: '',
      cover: '/assets/images/moving-motivators/meta.png',
    },
  ];
  return movingMotivators.map((id) => availableMovingMotivators.find((item) => item.id === id));
};

export default function MovingMotivatorsView() {
  const [items, setItems] = useState(getItems());
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
    useSensor(TouchSensor)
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    const oldId = over ? over.id : '';
    if (active.id !== oldId) {
      setItems((_items) => {
        const oldIndex = _items.findIndex((item) => item.id === active.id);
        const newIndex = _items.findIndex((item) => item.id === oldId);
        return arrayMove(_items, oldIndex, newIndex);
      });
    }
  };

  return (
    <Container>
      <Stack direction="column" alignItems="start" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Moving Motivators</Typography>
        <br />
        <Typography variant="caption">
          Ordene os cards abaixo considereando oque mais é importante para você durante sua jornada
          profissional conosco. Quão mais ao topo e ao lado esquerdo, mais prioritário:
        </Typography>
      </Stack>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items}>
          <Grid
            style={{ alignItems: 'center' }}
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {items.map((item) => (
              <Grid
                style={{ padding: 10, alignItems: 'center', justifyContent: 'center' }}
                item
                xs={2}
                sm={4}
                md={4}
                key={item.id}
              >
                <SortableItem item={item} />
              </Grid>
            ))}
          </Grid>
        </SortableContext>
      </DndContext>
    </Container>
  );
}
