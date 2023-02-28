import {createStackNavigator} from '@react-navigation/stack';
import {Home, Login } from '../features';


export type RootStackParamList = {
  Home:undefined,
  Login:undefined,
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={Login}
      />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
