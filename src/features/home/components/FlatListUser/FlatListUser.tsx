import {View, Text} from 'react-native';
import AntDesing from 'react-native-vector-icons/AntDesign';

import {UsersPark} from '../../../../store/slices';

interface Props {
  user: UsersPark;
}

import styles from './styles';

export const FlatListUsers = ({user}: Props) => {


  return (
    <View style={styles.dataContainer}>
      <View style={styles.firstColumn}>
        <View style={styles.iconContainer}>
          <AntDesing name="car" style={styles.icon} />
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



