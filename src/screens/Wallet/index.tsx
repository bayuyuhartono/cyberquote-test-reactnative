import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {COLORS} from '../../constant/color';
import Card from '../../components/Card';
import {CardTypes} from '../../types/ComponentTypes';

const CARD_DATA = [
  {
    title: 'Main Wallet',
    amount: '$13.800,18',
    idNumber: '13989-98099-28837',
    backgroundColor: COLORS.BG_PURPLE,
  },
  {
    title: 'XYZ Wallet',
    amount: '$19.980,12',
    idNumber: '88987-34323-78788',
    backgroundColor: COLORS.BG_GREEN,
  },
  {
    title: 'ABC Wallet',
    amount: '$73.139,38',
    idNumber: '38937-56577-67800',
    backgroundColor: COLORS.BG_YELLOW,
  },
  {
    title: 'KLOE Wallet',
    amount: '$43.139,35',
    idNumber: '78788-12312-22334',
    backgroundColor: COLORS.BG_PURPLE,
  },
  {
    title: 'Lord Wallet',
    amount: '$13.999,28',
    idNumber: '98782-87888-23222',
    backgroundColor: COLORS.BG_YELLOW,
  },
];

const Wallet = () => {
  const renderCard = ({item, index}: {item: CardTypes; index: number}) => (
    <Card
      key={'card' + index}
      title={item.title}
      amount={item.amount}
      idNumber={item.idNumber}
      backgroundColor={item.backgroundColor}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.cardWrap}>
        <FlatList
          data={CARD_DATA}
          renderItem={renderCard}
          keyExtractor={item => item.title}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  cardWrap: {
    alignItems: 'center',
  },
});

export default Wallet;
