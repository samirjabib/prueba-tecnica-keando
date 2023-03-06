import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';

import Geolocation from '@react-native-community/geolocation';

import {Location} from '../types';
import {useRef, useEffect} from 'react';

export const useLocationStore = () => {
  const dispatch = useDispatch();

  const {userLocation} = useSelector((state: RootState) => state.places);
  const watchId = useRef<number>();
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
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

  useEffect(() => {
    getCurrentPosition().then(location => {
        if(!isMounted) return;
        
    });
  });

  console.log(userLocation);

  return {
    userLocation,
  };
};
