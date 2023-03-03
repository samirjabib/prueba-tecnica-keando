import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        marginBottom: 20,
    },
    squareView:{
        borderColor: 'black',
        borderRadius: 15,
        padding: 15,
        backgroundColor:'rgba(255, 255, 255,0.3)',
        height: 75,
        width: 75,
        alignSelf: 'center'
    },
    label:{
        textAlign: 'center',
        color: 'white',
        fontWeight: '300',
        maxWidth: 90,
        fontSize: 12,
        marginTop: 10,
    }
  })

  export default styles