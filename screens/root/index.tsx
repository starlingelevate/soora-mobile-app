import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../home';
import Constants from '../../constants';
import Sidebar from '../../components/sidebar';

const Drawer = createDrawerNavigator();

export default function RootNavigation() {
  return (
    <Drawer.Navigator initialRouteName={Constants.ROUTES.ROOT_HOME} drawerContent={Sidebar}>
        <Drawer.Screen name={Constants.ROUTES.ROOT_HOME} component={HomeScreen} options={{title: 'Soora'}}/>
    </Drawer.Navigator>
  );
}