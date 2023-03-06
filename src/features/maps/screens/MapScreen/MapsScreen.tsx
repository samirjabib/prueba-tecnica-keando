import { View } from 'react-native';
import MapView from 'react-native-maps';
import { usePermissionsHook } from '../../../../hook/usePermissionsHook';
import { Map, MapBox,} from '../../components'


export const MapsScreen = () => {

  const { locationStatus } =usePermissionsHook()


  return (
    <View style={{flex:1}}>
    {/* <Map/> */}
    <MapBox/>
  </View>
  );
};

