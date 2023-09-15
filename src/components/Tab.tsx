import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../constant/color';

type Props = {
  tabData: string[];
  selected: string;
  setSelected: (value: string) => void;
};

const Tab = ({tabData, selected, setSelected}: Props) => {
  const renderItem = ({item, index}: {item: string; index: number}) => (
    <TouchableOpacity
      key={index}
      onPress={() => setSelected(item)}
      style={[
        styles.tabContainer,
        selected === item && {backgroundColor: COLORS.BLUE},
      ]}>
      <Text
        style={[
          styles.text,
          {color: selected === item ? COLORS.WHITE : COLORS.DARK_GRAY},
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tabData}
        renderItem={renderItem}
        keyExtractor={item => item}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    paddingVertical: 32,
    paddingHorizontal: 32,
  },
  tabContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  tabSelected: {
    backgroundColor: COLORS.BLUE,
  },
  text: {
    fontSize: 16,
  },
});

export default Tab;
