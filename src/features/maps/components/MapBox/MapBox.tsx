import {StyleSheet, View, TouchableOpacity} from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import {RootStackParamList} from '../../../../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import AntDesing from 'react-native-vector-icons/AntDesign';

MapboxGL.setAccessToken(
  'sk.eyJ1Ijoic2FtaXJkZXYiLCJhIjoiY2xldzhhdmw5MGF4czN4czN2bXdjdjd4ciJ9.Iw2WNk0OAaBPcj4E_ai0fA',
);

interface Props extends NativeStackScreenProps<RootStackParamList> {}

export const MapBox = ({navigation}: Props) => {
  
  const navigatorBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.iconMenu}>
        <TouchableOpacity onPress={() => console.log(navigation)}>
          <AntDesing name="arrowleft" color={'white'} size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '100%',
    width: '100%',
  },
  map: {
    flex: 1,
  },
  iconMenu: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 100,
    position: 'absolute',
    zIndex: 99999,
    top: 50,
    padding: 12,
    left: 12,
    backgroundColor: '#31cbe0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
