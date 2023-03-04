import { View, Text } from 'react-native';
import MapboxGL from "@rnmapbox/maps";

const tokenmapbox="pk.eyJ1Ijoic2FtaXJkZXYiLCJhIjoiY2xldTViaHc2MGc3czN2cDN5eW9mNzI4MSJ9.upnIPRBDHtXGLeqchTkkJQ"


MapboxGL.setAccessToken(tokenmapbox)


export const MapBox = () => {
    return(
       <MapboxGL.MapView style={{flex:1}}>

       </MapboxGL.MapView>
    )
}