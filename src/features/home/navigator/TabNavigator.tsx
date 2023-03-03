import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import AntDesing from 'react-native-vector-icons/AntDesign';
import { Home } from '../screens';
import { Menu } from '../screens/Menu';


const Tab = createBottomTabNavigator();

export const BottonTab = ()=> {
  return (
    <Tab.Navigator
     
    >
      <Tab.Screen name="Home"   options={{tabBarIcon:() => <AntDesing name='home' color={'white'} size={30}/>}} component={Home} />
      <Tab.Screen name="Menu" options={{tabBarIcon:() => <AntDesing name='menu-fold' color={'white'} size={30}/>}} component={Menu}/>
    </Tab.Navigator>
  );
}