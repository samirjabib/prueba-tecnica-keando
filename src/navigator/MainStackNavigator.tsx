import {createStackNavigator} from '@react-navigation/stack';
import {useAuthStore} from '../hook/useAuthStore';
import {
  HomeScreen,
  LoginScreen,
  SettingsScreen,
  AddReservation,
  MapsScreen,
} from '../features/';
import {RootStackParamList} from '../types';

const Stack = createStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
  const {status} = useAuthStore();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false,
       cardStyle:{
        backgroundColor:'white'
       }
        
      }}
      initialRouteName="HomeScreen"
      
      
      >
        
      {status === 'authenticated' ? (
        <Stack.Group>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
          <Stack.Screen name="AddReservation" component={AddReservation} />
          <Stack.Screen name="MapsScreen" component={MapsScreen} />
        </Stack.Group>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};
