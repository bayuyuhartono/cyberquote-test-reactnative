import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/RootstackParamTypes';

type mainScreenProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;

const MainScreen = () => {
  const navigation = useNavigation<mainScreenProp>();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Main Screen</Text>
      <Button
        title="Statement"
        onPress={() => navigation.navigate('Statement')}
      />
      <Button
        title="Activity"
        onPress={() => navigation.navigate('Activity')}
      />
      <Button title="Wallet" onPress={() => navigation.navigate('Wallet')} />
      <Button
        title="Add Wallet"
        onPress={() => navigation.navigate('AddWallet')}
      />
      <Button
        title="Transactions"
        onPress={() => navigation.navigate('Transactions')}
      />
    </View>
  );
};

export default MainScreen;
