import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop:60,
    gap:40,
  },
  menuContainer: {
    borderColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',

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
    height: 60,
    width: 60,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  },
});

export default styles;
