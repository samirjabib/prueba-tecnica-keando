import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

import AntDesing from 'react-native-vector-icons/AntDesign';

import {NativeStackScreenProps} from '@react-navigation/native-stack';



export const MenuContainer = ({navigation} :any ) => {


  const navigator = () => {
    navigation.navigate('MapsScreen')
  }


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
        <TouchableOpacity  onPress={ navigator} >
          <View style={styles.iconContainer} >
            <AntDesing name="enviroment" size={30} color='white'/>
          </View>
        </TouchableOpacity>
        <Text style={styles.text}>Maps</Text>

      </View>
    </View>
  );
};
