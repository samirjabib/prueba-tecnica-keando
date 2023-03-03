import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import {StatusBar} from 'react-native';
import {store} from './src';
import {Provider} from 'react-redux';
import {persistor} from './src/store/store';
import {View} from 'react-native';
import {MainStackNavigator} from './src/navigator/MainStackNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1, marginTop: 24}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <StatusBar translucent />
            <MainStackNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
