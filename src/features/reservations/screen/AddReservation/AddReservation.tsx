import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {useState} from 'react';

import {globalStyles} from '../../../../theme/appTheme';
import styles from './styles';
import AntDesing from 'react-native-vector-icons/AntDesign';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Prices, SelectTime} from '../../components';
import {DropDownSelect} from '../../../../components/DropDownSelect/DropDownSelect';
import {FabReserve} from '../../components';
import { RootStackParamList } from '../../../../types';

export type Vehicule = {
  key: number;
  value: string;
};

const vehicules = [
  {key: 1, value: 'Car'},
  {key: 2, value: 'Motorcycling'},
  {key: 3, value: 'byke'},
];

const references = [
  {key: 1, value: 'Referecia 1'},
  {key: 2, value: 'Referencia 2'},
  {key: 3, value: 'Referencia 3'},
];

interface Props extends NativeStackScreenProps<RootStackParamList> {}

export const AddReservation = ({navigation}: Props) => {
  const [vehicule, setVehicule] = useState<Vehicule[]>([] as Vehicule[]);

  const navigatorBack = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView>
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
          <Text style={styles.textPark}>parqueadero de prueba</Text>
          <Text style={styles.textDireccion}>Av- 126 #546 - 15</Text>
        </View>
        <Prices />
        <Text style={styles.subTitle}>Elige un Vehiculo</Text>
        <View style={{flexDirection: 'column', gap: 12}}>
          <DropDownSelect setState={setVehicule} data={vehicules} />
          <DropDownSelect setState={setVehicule} data={references} />
        </View>
        <View style={{flexDirection: 'column', gap: 12}}></View>
        <SelectTime />
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-around',
            gap: 20,
            marginBottom:20
          }}>
          <FabReserve
            styleButton={{backgroundColor: 'gray'}}
          />
          <FabReserve
            styleButton={{backgroundColor: '#3cc7ec'}}
          />
        </View>
      </ScrollView>
    </View>
  );
};
