/**
 * Base Application
 * @format
 */

import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  Text,
} from 'react-native-paper';

import SplashScreen from './screens/splash';
// import HomeScreen from './screens/home';
import IntroSlider from './screens/intro';
import Constants from './constants';
import Signup from './screens/auth/signup';
import SignIn from './screens/auth/signin';
import Logout from './screens/auth/logout';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import RootNavigation from './screens/root';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#7C93C3',
    tertiary: '#E1D7B7',
    secondary: '#1E2A5E',
  },
};

const queryClient = new QueryClient();

const App = (): React.JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <PaperProvider theme={theme}>
          <Stack.Navigator initialRouteName={Constants.ROUTES.ROOT}>
            <Stack.Screen
              name={Constants.ROUTES.SPLASH}
              component={SplashScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={Constants.ROUTES.INTRO}
              component={IntroSlider}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={Constants.ROUTES.ROOT}
              component={RootNavigation}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={Constants.ROUTES.SIGNUP}
              component={Signup}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={Constants.ROUTES.SIGNIN}
              component={SignIn}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={Constants.ROUTES.LOGOUT}
              component={Logout}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
