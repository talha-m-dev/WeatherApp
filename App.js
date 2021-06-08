import React, {useEffect} from 'react';
import {Provider as StateProvider} from 'react-redux';
import store from './src/redux/store';
import MainStack from './src/routes/MainStack';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <StateProvider store={store}>
      <MainStack />
    </StateProvider>
  );
};

export default App;
