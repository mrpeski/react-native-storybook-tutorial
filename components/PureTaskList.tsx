//components/PureTaskList.js
import * as React from 'react';
import Task, {Task as TaskType} from './Task';
import PercolateIcons from '../constants/Percolate';
import LoadingRow from './LoadingRow';
import { FlatList, Text, SafeAreaView, View } from 'react-native';
import { styles } from '../constants/globalStyles';

export type TaskListProps = {
    loading?: boolean,
    tasks: TaskType[],
    onPinTask: (id: string) => void,
    onArchiveTask: (id: string) => void,
}

export function PureTaskList(props: TaskListProps) {
    const { loading, tasks, onPinTask, onArchiveTask } = props;
  const events = {
    onPinTask,
    onArchiveTask,
  };
  if (loading) {
    return (
      <SafeAreaView style={styles.ListItems}>
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
      </SafeAreaView>
    );
  }
  if (tasks.length === 0) {
    return (
      <SafeAreaView style={styles.ListItems}>
        <View style={styles.WrapperMessage}>
          <PercolateIcons name="check" size={64} color={'#2cc5d2'} />
          <Text style={styles.TitleMessage}>You have no tasks</Text>
          <Text style={styles.SubtitleMessage}>Sit back and relax</Text>
        </View>
      </SafeAreaView>
    );
  }
  const tasksInOrder = [
    ...tasks.filter(t => t.state === 'TASK_PINNED'),
    ...tasks.filter(t => t.state !== 'TASK_PINNED'),
  ];
  return (
    <SafeAreaView style={styles.ListItems}>
      <FlatList
        data={tasksInOrder}
        keyExtractor={task => task.id}
        renderItem={({ item }) => <Task key={item.id} task={item} {...events} />}
      />
    </SafeAreaView>
  );
}

export default PureTaskList;