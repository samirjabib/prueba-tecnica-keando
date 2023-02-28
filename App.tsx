import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


import {store} from './src';
import {Provider} from 'react-redux';
import { StackNavigator } from './src/navigator/StackNavigator';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
