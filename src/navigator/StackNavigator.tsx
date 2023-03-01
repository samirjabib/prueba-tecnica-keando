import {createStackNavigator} from '@react-navigation/stack';
import {Home, Login} from '../features';
import {useAuthStore} from '../hook/useAuthStore';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  const {uid} = useAuthStore();
  console.log(uid, 'in the navigator');

  return <Stack.Navigator screenOptions={{ headerShown: false }}>
  {uid ? 
      <Stack.Screen name='Home' component={Home} />
      : <Stack.Screen name='Login' component={Login} />
  }
</Stack.Navigator>
};
