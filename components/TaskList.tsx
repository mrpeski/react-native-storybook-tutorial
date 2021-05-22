import * as React from 'react';
import PureTaskList, {TaskListProps}  from './PureTaskList';
import { connect } from 'react-redux';
import { archiveTask, pinTask } from '../lib/redux';

function TaskList(props: TaskListProps) {
  const { tasks, onPinTask, onArchiveTask } = props;
  const events = {
    onPinTask,
    onArchiveTask,
  };

  return <PureTaskList tasks={tasks} {...events} />;
}

export default connect(
  (props: TaskListProps) => ({
    tasks: props.tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'),
  }),
  dispatch => ({
    onArchiveTask: (id: string) => dispatch(archiveTask(id)),
    onPinTask: (id: string) => dispatch(pinTask(id)),
  })
)(TaskList);