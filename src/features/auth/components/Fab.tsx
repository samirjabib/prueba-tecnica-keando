import {StyleSheet, useWindowDimensions} from 'react-native';
import {Text, View, TouchableNativeFeedback} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { StackNavigationProp } from '@react-navigation/stack';


export const Fab = ({onSubmit}:any) => {
  const { width } = useWindowDimensions();



  return (
    <View style={styles.buttonContainer}>
      <TouchableNativeFeedback
        onPress={onSubmit}
        background={TouchableNativeFeedback.Ripple('blue', true, 30)}>
        <View style={{...styles.button, width: width * 0.8}}>
          <Text>Ingresar</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 40,
    alignItems: 'center',
  },
  button: {
    borderWidth: 2,
    height: 70,
    borderColor: 'white',
    marginTop: 60,
    borderRadius: 100,
    backgroundColor: '#3acce1',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
