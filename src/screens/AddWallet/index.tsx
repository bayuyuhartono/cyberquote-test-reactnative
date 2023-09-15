import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/RootstackParamTypes';

type statementScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Statement'
>;

function AddWallet() {
  const navigation = useNavigation<statementScreenProp>();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Add Wallet Screen</Text>
      <Button title="Butt" onPress={() => navigation.navigate('Main')} />
    </View>
  );
}

export default AddWallet;
