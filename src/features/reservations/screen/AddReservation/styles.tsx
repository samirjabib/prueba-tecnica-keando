import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  iconMenu: {
    marginTop: 20,
    marginBottom: 25,
  },
  title:{
    fontSize:24,
    color:'#31cbe02',
    fontWeight:'500'

  },
  dataParkContainer:{
    marginTop:20,
    alignItems:'center'
  },

  image:{
    width:115,
    height:120,
    borderRadius:15,
  },
  textPark:{
    textAlign:'center',
    fontSize:16,
    color:'#626261',
    textTransform:'uppercase',
    marginTop:22,
    fontWeight:'500'
  },
  textDireccion:{
    textAlign:'center',
    fontSize:16,
    color:'#626261',
    fontWeight:'400'
  },
  subTitle:{
          marginTop: 40,
          textAlign: 'center',
          fontSize: 14,
          color: '#b7bdcb',
          textTransform: 'uppercase',
          marginBottom: 10,
  }
  
});

export default styles;
