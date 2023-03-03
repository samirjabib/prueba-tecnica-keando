import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    dataContainer:{
      flex:1,
      backgroundColor: '#ffffff',
    },
    companyRol: {
      fontStyle:'italic',
      color: '#5e5e5e',
    },
    name: {
      color: '#7d7d7d',
      fontSize:15
    },
    age: {
      color: '#aaaaaa',
    },
    emailContainer:{
      paddingTop:16,
      borderTopWidth:1,
      borderTopColor:'#f4f4f6',
      flexDirection:'row'
    },
    email: {
      color: '#b3b3b3',
    },
    emailButton:{
      backgroundColor:'#fe7795',
      width:20,
      height:20,
      borderRadius:100,
      marginRight:6
    },
    iconContainer: {
      backgroundColor: '#fc7693',
      width: 60,
      height: 60,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:10,
    },
    firstColumn: {
      alignItems:'center',
      flexDirection:'row',
      gap:10,
    },
    
    icon:{
      color: 'white', fontSize: 34,
    }
  });
  
  export default styles