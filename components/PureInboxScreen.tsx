// components/PureInboxScreen.js
import * as React from "react";
import PercolateIcons from "../constants/Percolate";
import TaskList from "./TaskList";
import { Text, SafeAreaView, View, ViewStyle } from "react-native";
import { styles } from "../constants/globalStyles";

type Props = {
  error?: string | null;
};
const PureInboxScreen: React.FunctionComponent<Props> = (
  props
): JSX.Element => {
  if (props.error) {
    return (
      <SafeAreaView style={styles.PageListsShow}>
        <View style={styles.WrapperMessage}>
          <PercolateIcons name="face-sad" size={64} color={"#2cc5d2"} />
          <Text style={styles.TitleMessage}>Oh no!</Text>
          <Text style={styles.SubtitleMessage}>Something went wrong</Text>
        </View>
      </SafeAreaView>
    );
  }
  const localStyle: ViewStyle[] = [styles.titlepage, styles.PageListsShowhead];
  return (
    <SafeAreaView style={styles.PageListsShow}>
      <View style={localStyle}>
        <Text numberOfLines={1} style={styles.TitleWrapper}>
          Taskbox
        </Text>
      </View>
      <TaskList />
    </SafeAreaView>
  );
};

export default PureInboxScreen;
