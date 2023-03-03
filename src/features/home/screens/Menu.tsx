import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import AntDesing from 'react-native-vector-icons/AntDesign';
export const Menu = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View>
          <AntDesing name="home" color={'white'} size={30} />
        </View>
        <Text>Hola</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <AntDesing name="home" color={'white'} size={30} />
        </View>
        <Text>Hola</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <AntDesing name="home" color={'white'} size={30} />
        </View>
        <Text>Hola</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00b5e0',
  },
});
