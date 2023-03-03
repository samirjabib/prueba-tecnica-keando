import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
    flexWrap: 'wrap',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop:30,
  },
  menuContainer: {
    borderColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop:6,
    textAlign: 'center',
    color: 'white',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: 80,
    width: 80,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  },
});

export default styles;
