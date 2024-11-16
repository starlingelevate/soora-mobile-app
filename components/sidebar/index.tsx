import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Drawer, List, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Constants from '../../constants';

const Sidebar = ({navigation}: {navigation: any}) => {
  const handleNavigation = route => {
    // navigation.closeDrawer();
    console.log('-----===========');
    navigation.navigate(route);
  };

  return (
    <DrawerContentScrollView
      alwaysBounceVertical={false}
      style={[styles.drawerContent]}>
      <Drawer.Section
        showDivider={false}
        style={{
          height: '100%',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <View style={{flex: 2, marginLeft: 20}}>
            <Icon name="arrow-back-ios" size={20} />
          </View>
          <View style={{flex: 10, justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              {Constants.APP_NAME}
            </Text>
          </View>
        </View>

        <List.AccordionGroup>
          <List.Section>
            <List.Item
              title="Home"
              left={props => (
                <List.Icon {...props} icon="home-variant-outline" />
              )}
              onPress={() => {
                handleNavigation(Constants.ROUTES.ROOT_HOME);
              }}
            />
            <List.Accordion
              left={props => (
                <List.Icon {...props} icon="account-circle-outline" />
              )}
              title="Account"
              id="1">
              <List.Item
                style={{marginLeft: 30}}
                title="Edit Profile"
                left={props => (
                  <List.Icon {...props} icon="account-edit-outline" />
                )}
                onPress={() => {
                  handleNavigation(Constants.ROUTES.ROOT_HOME);
                }}
              />
              <List.Item
                style={{marginLeft: 30}}
                title="Update Selfie"
                left={props => (
                  <List.Icon {...props} icon="account-reactivate-outline" />
                )}
                onPress={() => {
                  handleNavigation(Constants.ROUTES.ROOT_HOME);
                }}
              />
            </List.Accordion>
            <List.Accordion
              left={props => <List.Icon {...props} icon="cog-outline" />}
              title="Settings"
              id="2">
              <List.Item
                style={{marginLeft: 30}}
                title="Push Notifications"
                left={props => <List.Icon {...props} icon="bell-outline" />}
                onPress={() => {
                  handleNavigation(Constants.ROUTES.ROOT_HOME);
                }}
              />
            </List.Accordion>
          </List.Section>
        </List.AccordionGroup>

        <View>
          <List.Item
            title="Logout"
            left={props => <List.Icon {...props} icon="logout" />}
            onPress={() => {
              handleNavigation(Constants.ROUTES.LOGOUT);
            }}
          />
        </View>
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  v3Preference: {
    height: 56,
    paddingHorizontal: 28,
  },
  badge: {
    alignSelf: 'center',
  },
  collapsedSection: {
    marginTop: 16,
  },
  annotation: {
    marginHorizontal: 24,
    marginVertical: 6,
  },
});

export default Sidebar;
