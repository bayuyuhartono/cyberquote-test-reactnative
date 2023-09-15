import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';

type Props = {
  backgroundColor?: string;
  barStyle?: 'default' | 'light-content' | 'dark-content';
};

const AppStatusBar = ({backgroundColor, barStyle}: Props) => {
  return (
    <View style={[styles.statusBar, {backgroundColor}]}>
      <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} />
    </View>
  );
};

const BAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: BAR_HEIGHT,
  },
});

export default AppStatusBar;
