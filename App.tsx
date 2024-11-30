/**
 * Base Application
 * @format
 */

import React from 'react';
import {Platform, SafeAreaView, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  Text,
} from 'react-native-paper';

import SplashScreen from './src/screens/splash';
// import HomeScreen from '@screens/home';
import IntroSlider from './src/screens/intro';
import Constants from './constants';
import Signup from './src/screens/auth/signup';
import SignIn from './src/screens/auth/signin';
import Logout from './src/screens/auth/logout';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import RootNavigation from './src/screens/root';
import { Colors } from './src/styles/colors';
import AuthSelector from './src/screens/auth';

const Stack = createNativeStackNavigator();

const BOLD = ['display', 'headline', 'labelLarge'];
const REGULAR = ['title', 'label', 'body', 'default'];

const theme = {
  ...DefaultTheme,
  colors: Colors.light,
  fonts: Object.fromEntries(Object.entries(DefaultTheme.fonts).map(([variantName, variantProps])=>[
    variantName,
    {
      ...variantProps,
      fontFamily:  BOLD.find(f => variantName.toLowerCase().includes(f)) ? 'Poppins-Bold' : REGULAR.find(f => variantName.toLowerCase().includes(f)) ? 'Poppins-Regular' : 'Poppins-Light',
    },
  ]
  )),
};

const queryClient = new QueryClient();

const App = (): React.JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <PaperProvider theme={theme}>
          <Stack.Navigator initialRouteName={Constants.ROUTES.AUTH_SELECTOR}>
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
              name={Constants.ROUTES.AUTH_SELECTOR}
              component={AuthSelector}
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
