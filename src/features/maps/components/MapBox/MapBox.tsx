import {StyleSheet, View, TouchableOpacity} from 'react-native';
import MapboxGL, {Camera} from '@rnmapbox/maps';
import {RootStackParamList} from '../../../../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import AntDesing from 'react-native-vector-icons/AntDesign';
import {useLocationStore} from '../../../../hook/useLocationStore';
import {Loading} from '../../../../components/Loading';
import {useRef, useEffect} from 'react';
import {useMapStore} from '../../../../hook';
import { Fab } from '../Fab';

MapboxGL.setAccessToken(
  'sk.eyJ1Ijoic2FtaXJkZXYiLCJhIjoiY2xldzhhdmw5MGF4czN4czN2bXdjdjd4ciJ9.Iw2WNk0OAaBPcj4E_ai0fA',
);

interface Props extends NativeStackScreenProps<RootStackParamList> {}

export const MapBox = ({navigation}: Props) => {
  const {isLoading, userLocation, getCurrentPosition,} = useLocationStore();
  const {onHandleSetMap, map, isMapReady} = useMapStore();


  if (isLoading) {
    return <Loading />;
  }


  const navigatorBack = () => {
    navigation?.goBack();
  };

  const mapViewRef = useRef<MapboxGL.MapView>();
  const camera = useRef<Camera>(null);4
  const following = useRef<boolean>(true);


  useEffect(() => {
    onHandleSetMap(mapViewRef);
  }, []);

  // useEffect(() => {
  //   camera.current?.setCamera({<<<<<<<<<<<<<<<<<<<

  //     centerCoordinate:[ userLocation.longitude,userLocation?.latitude]
  //   });
  // }, []);

  const centerPosition = async () => {
    
      if(!isMapReady) throw new Error('Mapa no esta listo')
      if( !userLocation) throw new Error('No ahi ubicacion del usuario')

      map?.flyTo({
        zoom:14,
        cemter:userLocation
      })
    
  };

  return (
    <>
      <View style={styles.iconMenu}>
        <TouchableOpacity onPress={navigatorBack}>
          <AntDesing name="arrowleft" color={'white'} size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView
            ref={el => (mapViewRef.current = el!)}
            style={styles.map}
            styleURL={'mapbox://styles/mapbox/streets-v12'}>
            <MapboxGL.Camera
        
              animationMode="flyTo"
              ref={camera}
              zoomLevel={16}
              centerCoordinate={[
                userLocation?.longitude,
                userLocation?.latitude,
              ]}
            />
            <MapboxGL.PointAnnotation
              coordinate={[userLocation?.longitude, userLocation?.latitude]}
            />
            <MapboxGL.UserLocation visible={true} />
          </MapboxGL.MapView>
        </View>
      </View>
      <Fab
        iconName="flag"
        onPress={centerPosition}
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}
      />
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
    height: 500,
    width: 500,
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
