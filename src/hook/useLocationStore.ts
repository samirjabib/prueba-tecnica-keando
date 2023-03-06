import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {setUserLocation, setInitialPosition, setIsLoading} from '../store';

import Geolocation from '@react-native-community/geolocation';

import {Location} from '../types';
import { useRef, useEffect, useState } from 'react';

export const useLocationStore = () => {
  const dispatch = useDispatch();
  
  const [hasLocation, setHasLocation] = useState(false);

  const {userLocation, isLoading} = useSelector(
    (state: RootState) => state.places,
  );
  const watchId = useRef<number>();
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    getCurrentPosition().then(location => {
      if (!isMounted.current) return;
      setUserLocation(location);
      setInitialPosition(location);
      setUserLocation(location);
      setHasLocation(true);
    });
  }, []);

  const getCurrentPosition = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        ({coords}) => {
          resolve({
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
        },
        err => reject({err}),
        {enableHighAccuracy: true},
      );
    });
  };


  const followUserLocation = () => {
    watchId.current = Geolocation.watchPosition(
      ({coords}) => {
        if (!isMounted.current) return;

        const location: Location = {
          latitude: coords.latitude,
          longitude: coords.longitude,
        };

        dispatch(setUserLocation(location));
      },
      err => console.log(err),
      {enableHighAccuracy: true, distanceFilter: 10},
    );
  };

  const stopFollowUserLocation = () => {
    if (watchId.current) Geolocation.clearWatch(watchId.current);
  };


  useEffect(() => {
    getCurrentPosition().then(location => {
      if (!isMounted) return;
      dispatch(setUserLocation(location));
      dispatch(setInitialPosition(location));
      dispatch(setIsLoading(false));
    });
  }, []);

  return {
    userLocation,
    isLoading,
    followUserLocation,
    getCurrentPosition,
  };
};
