import MapView, {Marker} from 'react-native-maps';
import {useEffect, useState, useRef} from 'react';
import {useLocation} from '../../../../hook/useLocation';
import { Loading } from '../../../../components/Loading';
import { View } from 'react-native';
import styles from '../../screens/MapScreen/styles';




export const Map = () => {


  const [showPolyline, setShowPolyline] = useState(true);

  const {
    hasLocation,
    initialPosition,
    getCurrentLocation,
    followUserLocation,
    userLocation,
    stopFollowUserLocation,
    routeLines,
  } = useLocation();

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
      center: {latitude, longitude},
    });
  }, [userLocation]);

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

  return (
    <>
      <MapView
        style={{flex: 1}}
        showsMyLocationButton={false}
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
          
        onTouchStart={ () => following.current = false}
      >
        <Marker 
          draggable
          coordinate={initialPosition}
          image={require('../../../../assets/car.png')}
        >
        </Marker>
      </MapView>
    </>
  );
};
