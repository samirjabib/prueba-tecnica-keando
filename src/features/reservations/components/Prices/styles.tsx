import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    textSub: {
      marginTop: 40,
      textAlign: 'center',
      fontSize: 14,
      color: '#b7bdcb',
      textTransform: 'uppercase',
      marginBottom: 10,
    },
    boxIconsPrice: {
      marginTop: 4,
      flexDirection: 'row',
      justifyContent: 'space-between',
  
      gap: 14,
    },
    boxPrice: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3cc7ec',
      borderRadius: 20,
      height: 100,
      width: 100,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
    iconContainer: {},
    textPrice: {
      color: 'white',
    },
  });
  