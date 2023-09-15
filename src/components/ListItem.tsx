import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constant/color';
import {ListItemTypes} from '../types/ComponentTypes';

const ListItem = ({title, description, amount, when, image}: ListItemTypes) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.senderWrap}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.amount}>{amount}</Text>
        <Text style={styles.description}>{when}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    paddingVertical: 8,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
  leftSide: {
    flexDirection: 'row',
  },
  senderWrap: {
    marginHorizontal: 8,
  },
  rightSide: {
    alignItems: 'flex-end',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    color: COLORS.BLACK,
  },
  description: {
    fontSize: 14,
    color: COLORS.DARK_GRAY,
  },
  amount: {
    fontSize: 16,
    color: COLORS.BLACK,
    fontWeight: 'bold',
  },
});

export default ListItem;
