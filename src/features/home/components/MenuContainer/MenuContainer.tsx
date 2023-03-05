import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

import AntDesing from 'react-native-vector-icons/AntDesign';

export const MenuContainer = ({navigation}: any) => {
  const navigator = (navigate: string) => {
    navigation.navigate(navigate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={ () => navigator('AddReservation')}>
          <View style={styles.iconContainer}>
            <AntDesing name="car" size={30} color="white" />
          </View>
        </TouchableOpacity>
        <Text style={styles.text}>Agregar vehiculos</Text>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => navigator('MapsScreen')}>
          <View style={styles.iconContainer}>
            <AntDesing name="enviroment" size={30} color="white" />
          </View>
        </TouchableOpacity>
        <Text style={styles.text}>Maps</Text>
      </View>
    </View>
  );
};
