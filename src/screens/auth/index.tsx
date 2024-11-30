import {Image, SafeAreaView, StatusBar, View, StyleSheet} from 'react-native';
import globalStyle from '../../styles/global';
import React from 'react';
import {useTheme} from 'react-native-paper';
import Constants from '../../../constants';
import MyButton from '../../components/ui/button';

const AuthSelector = ({navigation}: {navigation: any}) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[globalStyle.container, styles.container, {backgroundColor: theme.colors.primary}]}
    >
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.primary}
        barStyle={'light-content'}
        showHideTransition={'fade'}
        hidden={false}
      />
      <View style={styles.mainView}>
        <View style={styles.logoContainer}>
          <View style={styles.logoWrapper}>
            <Image
              source={require('./../../assets/images/logo.png')}
              style={styles.logo}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <View style={styles.buttons}>
              <MyButton
                mode="containedInvert"
                label="Sign Up"
                onPress={() => navigation.navigate(Constants.ROUTES.SIGNUP)}
              />
              <MyButton
                mode="outlined"
                label="Login"
                onPress={() => navigation.navigate(Constants.ROUTES.SIGNIN)}
              />
              <MyButton mode="text" label="Need help?" />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  mainView: {
    flex: 1,
  },
  logoContainer: {
    flex: 3,
    gap: 10,
    justifyContent: 'center',
  },
  logoWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    height: 150,
    width: 215,
  },
  buttonContainer: {
    flex: 1,
    gap: 10,
    justifyContent: 'flex-end',
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  buttons: {
    paddingHorizontal: 20,
    width: '100%',
  },
});

export default AuthSelector;
