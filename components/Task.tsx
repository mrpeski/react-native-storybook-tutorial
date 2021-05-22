// components/Task.js
import * as React from 'react';
import { TextInput, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { styles } from '../constants/globalStyles';
import PercolateIcons from '../constants/Percolate';

export type Task = { id: string, title: string, state: string, updatedAt?: Date }; 

type TaskProps = {
  task: Task,
  onArchiveTask: (id: string) => void,
  onPinTask: (id:string) => void,
}

export default function Task(props: TaskProps) {
  const {id, title, state} = props.task;
  const {onArchiveTask, onPinTask} = props;
  return (
    <SafeAreaView style={styles.ListItem}>
        <TouchableOpacity onPress={() => onArchiveTask(id)}>
        {state !== 'TASK_ARCHIVED' ? (
          <View style={styles.CheckBox} />
        ) : (
          <PercolateIcons name="check" size={20} color={'#2cc5d2'} />
        )}
      </TouchableOpacity>
      <TextInput
        placeholder="Input Title"
        style={
          state === 'TASK_ARCHIVED' ? styles.ListItemInputTaskArchived : styles.ListItemInputTask
        }
        value={title}
        editable={false}
      />
      <TouchableOpacity onPress={() => onPinTask(id)}>
        <PercolateIcons
          name="star"
          size={20}
          color={state !== 'TASK_PINNED' ? '#eee' : '#26c6da'}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}