import React, {ReactElement, useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StatusBar,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import {NavigationProp} from '@react-navigation/native';

type LayoutProps = {
    header: ReactElement,
    main: ReactElement,
    footer: ReactElement,
  navigation: NavigationProp<any>;
};

const Layout: React.FC<LayoutProps> = ({navigation, header, main, footer}) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: theme.colors.white},
      ]}>
      <StatusBar
        animated
        backgroundColor={theme.colors.primary}
        barStyle="light-content"
        showHideTransition="fade"
        hidden={false}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <View style={styles.backIcon}>
              <Image
                source={require('./../../../assets/images/back.png')}
                style={styles.backImage}
              />
            </View>

            <Image
              source={require('./../../../assets/images/dark_logo_only.png')}
              style={styles.logo}
            />

            {header}

          </View>

          <View style={styles.form}>
            {main}
          </View>

          <View style={styles.footer}>

            {footer}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  scrollView: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
    minHeight: '100%',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  backIcon: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backImage: {
    height: 32,
    width: 32,
  },
  logo: {
    height: 48,
    width: 48,
  },
  title: {
    marginTop: 20,
  },
  subtitle: {
    marginTop: 10,
    marginBottom: 30,
  },
  form: {
    flex: 1,
    width: '100%',
  },
  formGroup: {
    gap: 15,
  },
  rememberForgot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  signupPrompt: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    marginVertical: 19,
    textAlignVertical: 'center',
  },
});

export default Layout;
