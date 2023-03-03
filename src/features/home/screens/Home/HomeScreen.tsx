import {Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {useCallback, useMemo, useRef} from 'react';
import {useUserHook} from '../../../../hook/useUsersHook';
import {useState} from 'react';
import {ItemList} from '../../components/ItemList';
import {BottomSheetRefProps, ButtonSheet} from '../../components';
import AntDesing from 'react-native-vector-icons/AntDesign';

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
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Usuarios</Text>
          <View>
          <TouchableOpacity onPress={onPress}>
            <Text>
              <AntDesing name="menufold" color={'black'} size={25} />
            </Text>
          </TouchableOpacity>
          </View>
        </View>

        <View style={styles.itemsContainer}>
          {users?.map(user => {
            return <ItemList key={user.id} user={user} />;
          })}
        </View>
      </View>
      <ButtonSheet ref={ref}>
        <View style={{flex:1, backgroundColor:'orange'}}/>
      </ButtonSheet>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    color: '#747474',
    fontWeight: '600',
    fontStyle: 'italic',
  },
  itemsContainer: {
    gap: 30,
  },
  headerContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 40,
  },
});
