import React from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import Ex3Screen from './screens/Ex3Screen';
import Ex4Screen from './screens/Ex4Screen';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Ex3: { screen: Ex3Screen },
  Ex4: { screen: Ex4Screen },
});

export default App;