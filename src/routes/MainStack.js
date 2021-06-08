import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Weather from '../screens/Weather';
import ViewWeather from '../screens/ViewWeather';

const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#00804A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            alignSelf: 'center',
            marginRight: 50,
          },
        }}>
        <Stack.Screen
          name="Weather"
          options={{
            title: 'WeatherApp',
            gestureDirection: 'horizontal-inverted',
          }}
          component={Weather}
        />
        <Stack.Screen
          name="ViewWeather"
          options={{
            title: 'WeatherApp',
            gestureDirection: 'horizontal-inverted',
          }}
          component={ViewWeather}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStack;
