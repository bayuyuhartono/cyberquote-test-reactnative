import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './src/types/RootstackParamTypes';
import HeaderB from './src/components/HeaderB';
import HeaderA from './src/components/HeaderA';
import MenuIcon from './src/icons/MenuIcon';
import FilterIcon from './src/icons/FilterIcon';
import MainScreen from './src/screens/Main';
import Statement from './src/screens/Statement';
import Activity from './src/screens/Activity';
import Wallet from './src/screens/Wallet';
import AddWallet from './src/screens/AddWallet';
import Transactions from './src/screens/Transactions';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          options={{
            header: HeaderA,
            headerBackVisible: true,
          }}
          component={MainScreen}
        />
        <Stack.Screen
          name="Statement"
          options={{
            headerTintColor: 'dark',
            header: HeaderB,
            headerRight: MenuIcon,
            headerBackVisible: true,
          }}
          component={Statement}
        />
        <Stack.Screen
          name="Activity"
          options={{
            header: HeaderA,
            headerBackVisible: true,
          }}
          component={Activity}
        />
        <Stack.Screen
          name="Wallet"
          options={{
            header: HeaderA,
            headerBackVisible: true,
          }}
          component={Wallet}
        />
        <Stack.Screen
          name="AddWallet"
          options={{
            title: 'Add Wallet',
            header: HeaderB,
            headerBackVisible: true,
          }}
          component={AddWallet}
        />
        <Stack.Screen
          name="Transactions"
          options={{
            headerTintColor: 'light',
            header: HeaderB,
            headerRight: FilterIcon,
            headerBackVisible: true,
          }}
          component={Transactions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
