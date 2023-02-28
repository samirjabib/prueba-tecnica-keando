import {StackScreenProps} from '@react-navigation/stack';
import {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Logo, FormLogin, Fab} from '../components';
import {useAuthStore} from '../../../hook/useAuthStore';

const initialForm = {
  email: '',
  password: '',
};

interface Form {
  email: string;
  password: string;
}

interface Props extends StackScreenProps<any, any> {}

export const Login = ({navigation}: Props) => {
  const [form, setForm] = useState<Form>(initialForm);

  console.log(form.email, form.password);

  const {handleLogin, handleLogout, name} = useAuthStore();

  const navigate = () => navigation.navigate('Home');

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <FormLogin form={form} setForm={setForm} />
      <Fab navigator={navigate} />
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
