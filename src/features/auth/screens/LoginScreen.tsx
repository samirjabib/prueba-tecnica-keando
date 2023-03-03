import {StackScreenProps} from '@react-navigation/stack';
import {useState} from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import {Logo, FormLogin, Fab} from '../components';
import {useAuthStore} from '../../../hook/useAuthStore';
import { getUser } from '../helpers';

const initialForm = {
  email: '',
  password: '',
};

interface Form {
  email: string;
  password: string;
}

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({navigation}: Props) => {
  const [form, setForm] = useState<Form>(initialForm);
  const {handleLogin, handleLogout, status, errorLogout, errorMessage } = useAuthStore();
  console.log(status)

  if(status === 'checking'){
    handleLogout()
  }



  const navigate = () => navigation.navigate('Home');



  const onSubmit = () => {
      const user = getUser(form)

      handleLogin(user)

   
  };

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <FormLogin form={form} setForm={setForm} />
      <Fab navigator={navigate} onSubmit={onSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonLogin: {
    borderRadius: 100,
    borderWidth: 10,
    borderColor: 'black',
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
