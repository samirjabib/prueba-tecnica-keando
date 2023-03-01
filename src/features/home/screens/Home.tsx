import {Text, View, StyleSheet} from 'react-native';
import {useEffect} from 'react';

import data from '../../../data/data.json';
import {useUserHook} from '../../../hook/useUsersHook';
import {ItemList} from '../components';

export const Home = () => {
  const {users} = useUserHook();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuarios</Text>
      <View style={styles.itemsContainer}>
        {users?.map(user => {
          return <ItemList user={user} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: '#747474',
  },
  itemsContainer: {},
});
