import {View, StyleSheet, Text} from 'react-native';
import AntDesing from 'react-native-vector-icons/AntDesign';

import {UsersPark} from '../../../store/slices';

interface Props {
  user: UsersPark;
}

import { globalStyles } from '../../../theme/appTheme';

export const ItemList = ({user}: Props) => {


  return (
    <View style={globalStyles.container}>
      <View style={styles.firstColumn}>
        <View style={styles.iconContainer}>
          <AntDesing name="car" style={{color: 'white', fontSize: 34}} />
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.companyRol}>{user.companyRol}</Text>
          <Text style={styles.name}>
            {user.firstName} {user.lastName}
          </Text>
          <Text style={styles.age}>{user.birthday}</Text>
        </View>
      </View>
      <View style={styles.emailContainer}>
        <View style={styles.emailButton}><Text>{user.state}</Text></View>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </View>
  );
};




const styles = StyleSheet.create({
  dataContainer: {},
  companyRol: {
    fontStyle:'italic',
    color: '#5e5e5e',
  },
  name: {
    color: '#7d7d7d',
    fontSize:15
  },
  age: {
    color: '#aaaaaa',
  },
  emailContainer:{
    paddingTop:16,
    borderTopWidth:1,
    borderTopColor:'#f4f4f6',
    flexDirection:'row'
  },
  email: {
    color: '#b3b3b3',
  },
  emailButton:{
    backgroundColor:'#fe7795',
    width:20,
    height:20,
    borderRadius:100,
    marginRight:6
  },
  iconContainer: {
    backgroundColor: '#fc7693',
    width: 60,
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstColumn: {
    alignItems:'center',
    flexDirection:'row',
    gap:10,
  },
});
