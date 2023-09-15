import React, {useState} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import Tab from '../../components/Tab';
import {COLORS} from '../../constant/color';
import {LineChart} from 'react-native-chart-kit';
import ListItem from '../../components/ListItem';
import {ListItemTypes} from '../../types/ComponentTypes';

const TAB_DATA = ['Week', 'Month', 'Year'];
const TAB_LIST_DATA = ['All', 'Expense', 'Income'];
const CHART_DATA = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ['Rainy Days'], // optional
};
const SENDER_DATA = [
  {
    title: 'Dave Mustain',
    description: 'Transfer',
    amount: '$70',
    when: '08:00 AM',
    image: 'https://i.pravatar.cc/300',
  },
  {
    title: 'Tom Araya',
    description: 'Transfer',
    amount: '$60',
    when: '1w ago',
    image: 'https://i.pravatar.cc/300',
  },
  {
    title: 'James Hetfield',
    description: 'Transfer',
    amount: '$129',
    when: '2w ago',
    image: 'https://i.pravatar.cc/300',
  },
  {
    title: 'Bruce Dickinson',
    description: 'Transfer',
    amount: '$19',
    when: '2w ago',
    image: 'https://i.pravatar.cc/300',
  },
  {
    title: 'Tom Morello',
    description: 'Transfer',
    amount: '$88',
    when: '2w ago',
    image: 'https://i.pravatar.cc/300',
  },
];

const ActivityScreen = () => {
  const [selected, setSelected] = useState('Week');
  const [selectedList, setSelectedList] = useState('All');

  const renderSender = ({
    item,
    index,
  }: {
    item: ListItemTypes;
    index: number;
  }) => (
    <ListItem
      key={index}
      title={item.title}
      description={item.description}
      amount={item.amount}
      when={item.when}
      image={item.image}
    />
  );

  return (
    <View style={styles.container}>
      <Tab tabData={TAB_DATA} selected={selected} setSelected={setSelected} />
      <LineChart
        data={CHART_DATA}
        width={Dimensions.get('window').width}
        height={220}
        chartConfig={{
          backgroundColor: COLORS.WHITE,
          backgroundGradientFrom: COLORS.WHITE,
          backgroundGradientTo: COLORS.WHITE,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: () => COLORS.WHITE,
          labelColor: () => COLORS.BLACK,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: COLORS.BG_GREEN,
          },
        }}
      />
      <Tab
        tabData={TAB_LIST_DATA}
        selected={selectedList}
        setSelected={setSelectedList}
      />
      <FlatList
        nestedScrollEnabled
        data={SENDER_DATA}
        renderItem={renderSender}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
});

export default ActivityScreen;
