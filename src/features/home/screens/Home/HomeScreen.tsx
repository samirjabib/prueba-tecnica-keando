import {View, FlatList} from 'react-native';
import {useCallback, useRef} from 'react';

import {useUserHook} from '../../../../hook/useUsersHook';
import {
  BottomSheetRefProps,
  ButtonSheet,
  FlatListUsers,
  Header,
  ItemSeparator,
  MenuContainer
} from '../../components';

import styles from './styles';
import {globalStyles} from '../../../../theme/appTheme';

export const HomeScreen = () => {
  const {users} = useUserHook();
  const ref = useRef<BottomSheetRefProps>(null);

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }
  }, []);

  return (
    <>
      <View style={globalStyles.container}>
        <View style={styles.container}>
          <FlatList
            data={users}
            renderItem={({item}) => <FlatListUsers user={item} />}
            ListHeaderComponent={() => (
              <Header title="Menu" onPress={onPress} isActive={ref?.current?.isActive()}/>
            )}
            keyExtractor={item => item.uid}
            ItemSeparatorComponent={() => <ItemSeparator />}
          />
        </View>
      </View>
      <ButtonSheet ref={ref}>
        <MenuContainer/>
      </ButtonSheet>
    </>
  );
};
