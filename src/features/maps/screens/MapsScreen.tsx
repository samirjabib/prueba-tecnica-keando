import { View, Text, StyleSheet } from 'react-native';
export const MapsScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Soy el map parking</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title:{
    fontSize:30,
    color:'Black'
  }
})