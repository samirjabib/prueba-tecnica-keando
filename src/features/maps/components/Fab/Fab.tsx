import { View, StyleSheet, StyleProp, ViewStyle , TouchableOpacity} from 'react-native';
import AntDesing from 'react-native-vector-icons/AntDesign';


interface Props {
    iconName:string,
    onPress: () => void,
    style?: StyleProp<ViewStyle>
}


export const Fab = ({iconName, onPress, style = {}} : Props) => {
  return (
    <View style={{...style as any}}>
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.blackButton}
        >
            <AntDesing name={iconName} color="white" size={35}/>
        </TouchableOpacity>

        
    </View>
  )
}


const styles = StyleSheet.create({
    blackButton:{
        zIndex:9999,
        height:50,
        width:50,
        backgroundColor:'#00b5e0',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:3,
        },
        shadowOpacity:0.27,
        shadowRadius:4.46,
        elevation:6,
    }
})