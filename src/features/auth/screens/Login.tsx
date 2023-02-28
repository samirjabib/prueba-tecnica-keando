import {StackScreenProps} from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import {Logo, FormLogin, Fab} from '../components';

interface Props extends StackScreenProps<any, any> {}

export const Login = ({navigation}: Props) => {

  

  const navigate = () =>  navigation.navigate('Home')

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <FormLogin/>
      <Fab navigator={navigate}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonLogin: {
    borderRadius: 100,
    borderWidth:10,
    borderColor:'black',
    width:'100%',
    height:40,
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center'
  },
});
