import {View, FlatList} from 'react-native';
import {useCallback, useRef} from 'react';

import {useUserHook} from '../../../../hook/useUsersHook';

import {
  BottomSheetRefProps,
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
  const {handleLogout, status} = useAuthStore();

  // const ref = useRef<BottomSheetRefProps>(null);

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
            <AntDesing name="back" color={'black'} size={25} />
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
        <MenuContainer navigation={navigation}/>
      </DraggableBottonSheet>
      {/* <ButtonSheet ref={ref}>
        <MenuContainer/>
      </ButtonSheet> */}
    </>
  );
};

