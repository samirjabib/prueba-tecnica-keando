import {Text, View, StyleSheet} from 'react-native';

export const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logo}>K</Text>
      <Text style={styles.logoSubtitle}>Keando</Text>
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
