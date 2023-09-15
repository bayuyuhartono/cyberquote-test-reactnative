import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {COLORS} from '../constant/color';
import BellIcon from '../icons/BellIcon';

type Props = NativeStackHeaderProps;

const HeaderA = ({options, route}: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{options.title || route?.name}</Text>
      </View>
      <View style={styles.iconWrap}>
        {options.headerBackVisible && (
          <>
            <BellIcon />
            <Image
              source={require('../../src/assets/avatar.png')}
              style={styles.image}
            />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    backgroundColor: COLORS.WHITE,
    paddingVertical: 32,
    paddingHorizontal: 32,
  },
  title: {
    color: COLORS.BLACK,
    fontSize: 20,
  },
  iconWrap: {
    gap: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: 25,
    height: 25,
    borderRadius: 400 / 2,
  },
});

export default HeaderA;
