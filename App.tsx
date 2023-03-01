import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';

import {store} from './src';
import {Provider} from 'react-redux';
import {StackNavigator} from './src/navigator/StackNavigator';
import {persistor} from './src/store/store';
import {BottonTab} from './src/navigator/Tabs';
import { View, StyleSheet } from 'react-native';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{flex:1, backgroundColor:'white'}}>
          <NavigationContainer>
            {/* <StackNavigator /> */}
            <BottonTab />
          </NavigationContainer>
        </View>
      </PersistGate>
    </Provider>
  );
}

export default App;
