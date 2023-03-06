import {View, Text, StyleSheet} from 'react-native';
import {default as FontAwesome} from 'react-native-vector-icons/FontAwesome';
import {default as MaterialIcon} from 'react-native-vector-icons/MaterialIcons';
import AntDesing from 'react-native-vector-icons/AntDesign';

import { styles } from './styles';

export const Prices = () => {




  return (
    <View>
      <Text style={styles.textSub}>costo por minuto</Text>

      <View style={styles.boxIconsPrice}>
        <View style={styles.boxPrice}>
          <Text style={styles.iconContainer}>
            <AntDesing name="car" color={'#C7FFEB'} size={18} />
          </Text>
          <Text style={styles.textPrice}>$1.500</Text>
        </View>
        <View style={styles.boxPrice}>
          <Text style={styles.iconContainer}>
            <FontAwesome name="motorcycle" color={'#C7FFEB'} size={18} />
          </Text>
          <Text style={styles.textPrice}>$1.000</Text>
        </View>
        <View style={styles.boxPrice}>
          <Text style={styles.iconContainer}>
            <MaterialIcon name="motorcycle" color={'#C7FFEB'} size={18} />
          </Text>
          <Text style={styles.textPrice}>$ 800</Text>
        </View>
      </View>
    </View>
  );
};
