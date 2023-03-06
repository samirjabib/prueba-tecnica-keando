import {Text, View, StyleSheet, Image} from 'react-native';


export const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={require('../../../assets/keando-logo.jpg')} style={{width:200, height:200, justifyContent:'center', alignItems:'center', marginLeft:19,}}/>
      <Text style={styles.textTitle}>Bienvenido a Keando</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 40,
    alignSelf: 'center',
  },
  logo: {
    fontSize: 100,
    color: '#61b4dd',
    fontWeight: 'bold',
    textAlign:'center'
  },
  logoSubtitle: {
    color: '#61b4dd',
    fontSize: 20,
    textAlign: 'center',
    position: 'relative',
    bottom:16,
    fontWeight:'700'
  },
  textTitle: {
    marginTop:20,
    color: '#54b0db',
    fontSize: 25,
    textAlign: 'center',
    fontWeight:'400'
  },
});
