import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../features/home/screens/Home';
import React from 'react';
import { Login } from '../features/auth/screens/Login';

import AntDesing from 'react-native-vector-icons/AntDesign';


const Tab = createBottomTabNavigator();

export const BottonTab = ()=> {
  return (
    <Tab.Navigator
    
    screenOptions={({ route }) => ({
      tabBarStyle:{
        backgroundColor:'#3dc7ec',
        borderTopLeftRadius:17,
        borderTopRightRadius:17,
        height:60,

        backfaceVisibility:'hidden'
      },
      })}
    >
      <Tab.Screen name="Home"   options={{tabBarIcon:() => <AntDesing name='home' color={'white'} size={30}/>}} component={Home} />
      <Tab.Screen name="Login" options={{tabBarIcon:() => <AntDesing name='menu-fold' color={'white'} size={30}/>}} component={Login}/>
    </Tab.Navigator>
  );
}