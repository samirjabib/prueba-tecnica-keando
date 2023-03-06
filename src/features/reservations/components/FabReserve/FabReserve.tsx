import { View, Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { TextStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';



type Props = {
    styleButton?: StyleProp<ViewStyle>
}

export const FabReserve = ({styleButton} :Props) => {
  return (
    <View style={[styles.buttonContainer, styleButton]}>
      <TouchableOpacity>
        <View><Text style={styles.textButton}>Button</Text></View>
      </TouchableOpacity>
    </View>
  );
};


export const styles = StyleSheet.create({
    buttonContainer:{
      marginTop:70,
        borderColor:'white',
        paddingVertical:14,
        width: '45%',
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textButton:{
        color:'black',
        with:400,
        textAlign:'center',
        fontWeight:'600'
    }
    
})