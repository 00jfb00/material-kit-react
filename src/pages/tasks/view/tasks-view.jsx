import { useState } from 'react';

import { Button, Container, Stack, Typography } from '@mui/material';
import TaskItem from '../components/task-item';
import { tasks } from 'src/_mock/tasks';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function TasksView() {
  const [selected, setSelected] = useState(
    tasks.filter((task) => task.completed).map((task) => task.id)
  );

  const handleClickComplete = (taskId) => {
    const tasksCompleted = selected.includes(taskId)
      ? selected.filter((value) => value !== taskId)
      : [...selected, taskId];

    setSelected(tasksCompleted);
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Tarefas</Typography>

        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          Nova Tarefa
        </Button>
      </Stack>
      {tasks
        .sort((a, b) => a.completed - b.completed || false)
        .map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            checked={selected.includes(task.id)}
            onChange={() => handleClickComplete(task.id)}
          />
        ))}
    </Container>
  );
}
