import {Text, View} from 'react-native';
import { useEffect } from 'react';

import data from '../../../data/data.json'
import { useUserHook } from '../../../hook/useUsersHook';


export const Home = () => {

  const { users} = useUserHook()
  console.log(users)

  return (
    <View>
      <View>
        <Text>
          {JSON.stringify(data.map(data => data.email))}
        </Text>
      </View>
    </View>
  );
};
