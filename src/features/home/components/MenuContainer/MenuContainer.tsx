import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';

import AntDesing from 'react-native-vector-icons/AntDesign';
import { RootStackParamList } from '../../../../types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const iconsListNavigator = [
  {
    name: 'car',
    title: 'Agregar vehiculo',
    component: 'AddReservation',
  },

  {
    name: 'google-maps',
    component: 'MapsScreen',
    title: 'Mis Parqueaderos',
  },
  {
    name: 'settings',
    component: 'SettingsScreen',
    title: 'settings',
  },
  {
    name: 'car',
    title: 'Agregar ',
    component: 'AddReservation',
  },

  {
    name: 'google-maps',
    component: 'MapsScreen',
    title: 'Mis Parqueaderos',
  },
  {
    name: 'settings',
    component: 'SettingsScreen',
    title: '',
  },
];


export const MenuContainer = ({navigation} : NativeStackScreenProps<RootStackParamList>) => {

  const navigator = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <AntDesing name="car" size={30}  color='white'/>
          </View>
        </TouchableOpacity>
        <Text style={styles.text}>Agregar vehiculos</Text>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity  onPress={() => navigation.navigate('HomeScreen')} >
          <View style={styles.iconContainer} >
            <AntDesing name="enviroment" size={30} color='white'/>
          </View>
        </TouchableOpacity>
        <Text style={styles.text}>Maps</Text>

      </View>
    </View>
  );
};
