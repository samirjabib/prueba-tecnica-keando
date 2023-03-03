import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, Login} from '../features';
import { BottonTab } from '../features/home/navigator';
import {useAuthStore} from '../hook/useAuthStore';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
  const { status } = useAuthStore();

  return <Stack.Navigator screenOptions={{ headerShown: false }}>
  {status === 'authenticated' ? 
      <Stack.Screen name='Home' component={HomeScreen} />      
      : <Stack.Screen name='Login' component={Login} />
  }
</Stack.Navigator>
};
