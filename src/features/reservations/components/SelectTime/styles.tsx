import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    borderWidth:1,
    borderColor: 'gray',
    backgroundColor: '#ffffff',
    width: '30%',
    borderRadius: 7,
    textAlign:'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  subTitle: {
    marginTop: 70,
    textAlign: 'center',
    fontSize: 14,
    color: '#b7bdcb',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
});
