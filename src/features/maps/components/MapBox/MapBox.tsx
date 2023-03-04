import { View, Text } from 'react-native';
import MapboxGL from "@rnmapbox/maps";

const tokenmapbox="sk.eyJ1Ijoic2FtaXJkZXYiLCJhIjoiY2xldWNncTF1MDZjZjN4cnRjYW9xaDV6cCJ9.ouCS-aJOSxa9ldVWv5F6qw"


MapboxGL.setAccessToken(tokenmapbox)


export const MapBox = () => {
    return(
       <MapboxGL.MapView style={{flex:1}}>

       </MapboxGL.MapView>
    )
}