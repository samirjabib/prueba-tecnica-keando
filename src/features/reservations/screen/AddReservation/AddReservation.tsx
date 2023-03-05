import {View, Text, Image, TouchableOpacity} from 'react-native';

import {globalStyles} from '../../../../theme/appTheme';
import styles from './styles';
import AntDesing from 'react-native-vector-icons/AntDesign';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
interface Props extends NativeStackScreenProps<any, any> {} //Tipamos nuestras props de los metodos de react nativae

export const AddReservation = ({navigation}: Props) => {
  const navigatorBack = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.iconMenu}>
        <TouchableOpacity onPress={navigatorBack}>
          <AntDesing name="arrowleft" color={'#31cbe0'} size={25} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Reserva</Text>
      <View style={styles.dataParkContainer}>
        <Image
          source={{
            uri: 'https://img.freepik.com/foto-gratis/estructura-vehiculo-automovil-interior-sotano-grande_1127-2362.jpg?w=1380&t=st=1678032365~exp=1678032965~hmac=1c975fc2cbd6e61e33a3e56477cb5dd896cdc54a00615e05fee35f0aa910288a',
          }}
          style={styles.image}
        />
        <Text>parqueadero de prueba</Text>
        <Text>Av- 126 #546 - 15</Text>
      </View>
    </View>
  );
};
