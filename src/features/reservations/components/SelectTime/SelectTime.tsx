import {View, Text, TextInput} from 'react-native';

import {styles} from './styles';

export const SelectTime = () => {
  return (
    <>
      <Text style={styles.subTitle}>TIEMPO ESTIMADO</Text>
      <View style={styles.container}>
        <TextInput
          placeholder="00"
          style={styles.text}
          placeholderTextColor="gray"></TextInput>
        <TextInput
          placeholder="00"
          placeholderTextColor="gray"
          style={styles.text}></TextInput>
      </View>
    </>
  );
};
