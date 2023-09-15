import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {COLORS} from '../constant/color';
import BackIcon from '../icons/BackIcon';

type Props = {
  goBack?: () => void;
} & NativeStackHeaderProps;

const HeaderB = ({options, route, goBack}: Props) => {
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            options.headerTintColor === 'dark' ? COLORS.BLUE : COLORS.WHITE,
        },
      ]}>
      {options.headerBackVisible && (
        <View style={styles.backWrap}>
          <TouchableOpacity onPress={goBack || navigation.goBack}>
            <BackIcon
              color={
                options.headerTintColor === 'dark' ? COLORS.WHITE : COLORS.BLACK
              }
            />
          </TouchableOpacity>
        </View>
      )}
      <View>
        <Text
          style={[
            styles.title,
            {
              color:
                options.headerTintColor === 'dark'
                  ? COLORS.WHITE
                  : COLORS.BLACK,
            },
          ]}>
          {options.title || route?.name}
        </Text>
      </View>
      <View style={styles.menuWrap}>
        {options?.headerRight &&
          options.headerRight({
            tintColor: undefined,
            canGoBack: false,
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    paddingVertical: 32,
    paddingHorizontal: 32,
  },
  backWrap: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  menuWrap: {
    justifyContent: 'center',
  },
});

export default HeaderB;
