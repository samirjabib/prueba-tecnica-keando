import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    iconMenu: {
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 100,
      position: 'absolute',
      zIndex: 99999,
      top: 50,
      padding: 12,
      left: 12,
      backgroundColor: '#31cbe0',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
    textInput: {},
    searchContainer: {
      position: 'absolute',
      top: 130,
      left: 20,
      width: '90%',
      backgroundColor: 'white',
      shadowColor: 'black',
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 4,
      padding: 8,
      zIndex: 999,
      color: 'black',
    },
    input: {
      borderColor: '#888',
      color: 'black',
      borderWidth: 1,
    },
  });
  