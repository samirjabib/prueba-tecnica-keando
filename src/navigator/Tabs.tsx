import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../features/home/screens/Home';
import React from 'react';
import { Login } from '../features/auth/screens/Login';

import AntDesing from 'react-native-vector-icons/AntDesign';


const Tab = createBottomTabNavigator();

export const BottonTab = ()=> {
  return (
    <Tab.Navigator
    >
      <Tab.Screen name="Home" options={{tabBarIcon:() => <AntDesing name='home' color={'#3dc7ec'} size={30}/>}} component={Home} />
      <Tab.Screen name="Menu" options={{tabBarIcon:() => <AntDesing name='menu-fold' color={'#3dc7ec'} size={30}/>}} component={Login}/>
    </Tab.Navigator>
  );
}