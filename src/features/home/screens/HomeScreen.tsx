import {Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {useCallback, useMemo, useRef} from 'react';
import {useUserHook} from '../../../hook/useUsersHook';
import {useState} from 'react';
import {ItemList} from '../components/ItemList';
import {BottomSheetRefProps, ButtonSheet} from '../components';
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
        <Text style={styles.title}>Usuarios</Text>
        <View style={styles.itemsContainer}>
          {users?.map(user => {
            return <ItemList key={user.id} user={user} />;
          })}
        </View>
        <View style={styles.bottonNavBar}>
          <TouchableOpacity>
            <Text>
              <AntDesing name="home" color={'white'} size={30} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>
              <AntDesing name="menu-fold" color={'white'} size={30} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ButtonSheet ref={ref} />
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
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 40,
    fontWeight: '600',
    fontStyle: 'italic',
  },
  itemsContainer: {
    gap: 30,
  },
  bottonNavBar: {
    position: 'absolute',
    backgroundColor: '#3dc7ec',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    bottom: 0,
    width: '100%',
  },
});
