import {View, FlatList} from 'react-native';
import {useEffect } from 'react';

import {useUserHook} from '../../../../hook/useUsersHook';

import {
  FlatListUsers,
  ItemSeparator,
  DraggableBottonSheet
} from '../../components';

import styles from './styles';
import {globalStyles} from '../../../../theme/appTheme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAuthStore} from '../../../../hook/useAuthStore';
import AntDesing from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import { MenuContainer } from '../../components/MenuContainer/MenuContainer';

interface NavigationProps extends NativeStackScreenProps<any, any> {} //Tipamos nuestras props de los metodos de react nativae



export const HomeScreen = ({navigation}: NavigationProps) => {
  const {users} = useUserHook();
  const {handleLogout, status,} = useAuthStore();

  // const ref = useRef<BottomSheetRefProps>(null);

  const data = () => {
    fetch("https://firebasestorage.googleapis.com/v0/b/portal-keando.appspot.com/o/samples%2FusersPasswords.json?alt=media&token=fbead5aa-4756-41db-a147-ac1e14a3a947")
      .then((response) =>  response.json())
      .then((data) => console.log(data, ' this is the console.log for data'))
  }

  useEffect( () => {
    data()
  },[])


  // const onPress = useCallback(() => {
  //   const isActive = ref?.current?.isActive();
  //   if (isActive) {
  //     ref?.current?.scrollTo(0);
  //   } else {
  //     ref?.current?.scrollTo(-200);
  //   }
  // }, []);

  return (
    <>
      <View style={globalStyles.container}>
        <View style={styles.iconMenu}>
          <TouchableOpacity onPress={handleLogout}>
            <AntDesing name="arrowleft" color={'#31cbe0'} size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <FlatList
            data={users}
            renderItem={({item}) => <FlatListUsers user={item} />}
            keyExtractor={item => item.uid}
            ItemSeparatorComponent={() => <ItemSeparator />}
          />
        </View>
      </View>
      <DraggableBottonSheet> 
        <MenuContainer navigation={navigation} />
      </DraggableBottonSheet>
      {/* <ButtonSheet ref={ref}>
        <MenuContainer/>
      </ButtonSheet> */}
    </>
  );
};

