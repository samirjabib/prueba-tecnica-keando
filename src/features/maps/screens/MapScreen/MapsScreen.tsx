import { View } from 'react-native';
import MapView from 'react-native-maps';
import { usePermissionsHook } from '../../../../hook/usePermissionsHook';
import { Map, MapBox,} from '../../components'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../types';



export const MapsScreen = ({ navigation } : Props ) => {

  const { locationStatus } =usePermissionsHook()


  return (
    <View style={{flex:1}}>
    <Map navigation={navigation}/>
    {/* <MapBox navigation={navigation}/> */}
  </View>
  );
};

