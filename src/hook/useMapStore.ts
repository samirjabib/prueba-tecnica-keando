import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';



import {setMap} from '../store/slices/mapSlice';

export const useMapStore = () => {
  const dispatch = useDispatch();
  const { isMapReady, map} = useSelector(
    (state: RootState) => state.map,
  );


  const onHandleSetMap = (map:any) => {

    dispatch(setMap(map))
  }

  return {
    isMapReady,
    onHandleSetMap,

    map
  };
};
