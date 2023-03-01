import {Text, View, StyleSheet} from 'react-native';

import {useUserHook} from '../../../hook/useUsersHook';
import {ItemList} from '../components';

export const Home = () => {
  const {users} = useUserHook();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuarios</Text>
      <View style={styles.itemsContainer}>
        {users?.map(user => {
          return <ItemList key={user.id} user={user} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff',
  },
  title: {
    fontSize: 20,
    color: '#747474',
    marginHorizontal:20,
    marginTop:60,
    marginBottom:40,
    fontWeight:'600',
    fontStyle:'italic'
  },
  itemsContainer: {
    gap:30,
  },
});
