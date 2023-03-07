import MapView, {LatLng, Marker} from 'react-native-maps';
import {useEffect, useState, useRef} from 'react';
import {useLocation} from '../../../../hook/useLocation';
import {Loading} from '../../../../components/Loading';
import {Fab} from '../Fab';
import {RootStackParamList} from '../../../../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import AntDesing from 'react-native-vector-icons/AntDesign';
import {
  GooglePlacesAutocomplete,
  GooglePlaceDetail,
} from 'react-native-google-places-autocomplete';
import {InputAutocomplete} from '../InputComplete/InputComplete';
import MapViewDirections from 'react-native-maps-directions';

interface Props extends NativeStackScreenProps<RootStackParamList> {}

export const Map = ({navigation}: Props) => {
  const [showPolyline, setShowPolyline] = useState(true);

  const moveTo = async (position: LatLng) => {
    const camera = await mapViewRef.current?.getCamera();
    if (camera) {
      camera.center = position;
      mapViewRef.current?.animateCamera(camera, {duration: 1000});
    }
  };

  const {
    hasLocation,
    initialPosition,
    getCurrentLocation,
    followUserLocation,
    userLocation,
    stopFollowUserLocation,
    routeLines,
  } = useLocation();

  const [origin, setOrigin] = useState<LatLng | any>(initialPosition);
  const [destination, setDestination] = useState<LatLng | any>();

  const mapViewRef = useRef<MapView>();
  const following = useRef<boolean>(true);

  useEffect(() => {
    followUserLocation();
    return () => {
      stopFollowUserLocation();
    };
  }, []);

  useEffect(() => {
    if (!following.current) return;

    const {latitude, longitude} = userLocation;
    mapViewRef.current?.animateCamera({
      //Seguimiento de la perosna
      center: {latitude, longitude},
    });
  }, [userLocation]);

  const navigatorBack = () => {
    navigation?.goBack();
  };

  const centerPosition = async () => {
    const {latitude, longitude} = await getCurrentLocation();

    following.current = true;

    mapViewRef.current?.animateCamera({
      center: {latitude, longitude},
    });
  };

  if (!hasLocation) {
    return <Loading />;
  }

  const onPlacedSelected = (
    details: GooglePlaceDetail | null,
    flag: 'origin' | 'destination',
  ) => {
    const set = flag === 'origin' ? setOrigin : setDestination;

    const position = {
      latitude: details?.geometry.location.lat || 0,
      longitude: details?.geometry.location.lng || 0,
    };
    set(position);
    moveTo(position);
  };

  return (
    <>
      <View style={styles.searchContainer}>
        <Text style={{color: 'black'}}>Destination</Text>
        {/* <InputAutocomplete
          label="origin"
          onPlaceSelected={details => {
            () => {
              onPlacedSelected(details, 'origin');
            };
          }}
        /> */}
        <InputAutocomplete
          label="Destination "
          onPlaceSelected={details => {
            onPlacedSelected(details, 'destination');
          }}
        />

        <View
          style={{
            backgroundColor: '#00b5e0',
            borderRadius: 2,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
            marginTop: 10,
          }}>
          <TouchableOpacity>
            <Text style={{color: 'white'}}>Trazar ruta</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.iconMenu}>
        <TouchableOpacity onPress={navigatorBack}>
          <AntDesing name="arrowleft" color={'white'} size={25} />
        </TouchableOpacity>
      </View>
      <MapView
        ref={el => (mapViewRef.current = el!)}
        style={{flex: 1}}
        showsMyLocationButton={true}
        userInterfaceStyle={'dark'}
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onTouchStart={() => (following.current = false)}>
        <Marker
          draggable
          coordinate={initialPosition}
          image={require('../../../../assets/car.png')}
        />
        {destination && <Marker coordinate={destination} />}
        {origin && destination && (
          <MapViewDirections
            apikey="AIzaSyBjkKYc5FhHD13I93mijKzBG5hv0VSVe_s"
            origin={origin}
            destination={destination}
          />
        )}
      </MapView>
      <Fab
        iconName="flag"
        onPress={centerPosition}
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}
      />
      <Fab
        iconName="edit"
        onPress={() => setShowPolyline(value => !value)}
        style={{
          position: 'absolute',
          bottom: 80,
          right: 20,
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
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
  textInput: {},
  searchContainer: {
    position: 'absolute',
    top: 130,
    left: 20,
    width: '90%',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    zIndex: 999,
    color: 'black',
  },
  input: {
    borderColor: '#888',
    color: 'black',
    borderWidth: 1,
  },
});
