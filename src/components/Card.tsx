import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constant/color';
import {CardTypes} from '../types/ComponentTypes';

const Card = ({title, amount, idNumber, backgroundColor}: CardTypes) => {
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>{amount}</Text>
      <Text style={styles.idnumber}>{idNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 319,
    height: 170,
    paddingVertical: 32,
    paddingHorizontal: 32,
    marginVertical: 8,
    borderRadius: 12,
  },
  title: {
    fontSize: 14,
    color: COLORS.GRAY,
  },
  amount: {
    fontSize: 28,
    color: COLORS.WHITE,
    marginTop: 8,
  },
  idnumber: {
    fontSize: 14,
    color: COLORS.YELLOW,
    marginTop: 16,
  },
});

export default Card;
