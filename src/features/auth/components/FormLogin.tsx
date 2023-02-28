import {View, StyleSheet, useWindowDimensions} from 'react-native';
import {useState} from 'react';
import AntDesing from 'react-native-vector-icons/AntDesign';
import {TextInput} from 'react-native-gesture-handler';
import React from 'react';

interface Form {
  email: string;
  password: string;
}

const initialForm = {
  email: '',
  password: '',
};

export const FormLogin = () => {
  const {width} = useWindowDimensions();

  const [form, setForm] = useState<Form>(initialForm);

  const {email, password} = form;

  console.log(email, password)

  return (
    <View style={styles.formContainer}>
      <View style={{...styles.inputContainer, width: width * 0.8}}>
        <View style={styles.icon}>
          <AntDesing name="user" style={{color: '#54b0db', fontSize: 34}} />
        </View>
        <TextInput
          value={email}
          onChangeText={value =>
            setForm(prev => {
              return {...prev, email: value};
            })
          }
          placeholderTextColor={'#cacdd3'}
          placeholder="Correo Electronico"
          textContentType="emailAddress"
          style={{...styles.input, width: width * 0.8}}
        />
      </View>
      <View style={{...styles.inputContainer, width: width * 0.8}}>
        <View style={styles.icon}>
          <AntDesing name="lock1" style={{color: '#54b0db', fontSize: 34}} />
        </View>
        <TextInput
          value={password}
          onChangeText={value =>
            setForm(prev => {
              return {...prev, password: value};
            })
          }
          placeholderTextColor={'#cacdd3'}
          placeholder="Password"
          secureTextEntry={true}
          style={{...styles.input, width: width * 0.8}}
        />
        <AntDesing
          name="eye"
          style={{
            color: '#54b0db',
            fontSize: 25,
            position: 'relative',
            right: 40,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    alignSelf: 'center',
    flexDirection: 'column',
    width: '80%',

    marginTop: 70,
  },
  inputContainer: {
    height: 100,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  input: {
    width: 100,
    backgroundColor: '#ffffff',
    borderColor: '#3acce1',
    color: 'black',
    borderBottomWidth: 1,
    borderRadius: 100,
    shadowColor: '#3acce1',
    paddingLeft: 85,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  icon: {
    width: 80,
    height: 80,
    backgroundColor: '#ffffff',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    shadowColor: '#3acce1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    position: 'absolute',
  },
});
