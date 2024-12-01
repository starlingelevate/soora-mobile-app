import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  StyleSheet,
} from 'react-native';
import globalStyle from '../../styles/global';
import React from 'react';
import { Text, useTheme } from 'react-native-paper';
import MyTextInput from '../../components/ui/textInput';
import Constants from '../../../constants';
import MyButton from '../../components/ui/button';
import { NavigationProp } from '@react-navigation/native';

type SignupProps = {
  navigation: NavigationProp<any>;
};

const Signup: React.FC<SignupProps> = ({ navigation }) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[globalStyle.container, styles.container, { backgroundColor: theme.colors.white }]}
    >
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.primary}
        barStyle="light-content"
        showHideTransition="fade"
        hidden={false}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.wrapper}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.backIcon}>
              <Image
                source={require('./../../assets/images/back.png')}
                style={styles.backImage}
              />
            </View>

            <Image
              source={require('./../../assets/images/dark_logo_only.png')}
              style={styles.logo}
            />

            <Text
              variant="titleLarge"
              style={[styles.title, { color: theme.colors.primary }]}
            >
              Sign Up
            </Text>
            <Text
              variant="bodyLarge"
              style={[styles.subtitle, { color: theme.colors.primary }]}
            >
              Fill your details to create a new account
            </Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <View style={styles.formFields}>
              <MyTextInput
                label="Email"
                left="email-variant"
                helpText="Verification code will be sent to your E-mail ID"
              />
              <MyTextInput label="Enter Password" left="key-variant" type="password" />
              <MyTextInput
                label="Confirm Password"
                left="key-variant"
                type="password"
                helpText="Password must be 8 characters long. Use a mix of letters, numbers, and symbols."
              />
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={[styles.terms, { color: theme.colors.primary }]}>
              By Signing up, you agree to our Terms, Privacy Policy and Cookie Use.
            </Text>
            <MyButton mode="contained" onPress={() => console.log('Pressed')} label="Verify" />

            <View style={styles.signInWrapper}>
              <Text style={[styles.signInText, { color: theme.colors.primary }]}>Already have an account ?</Text>
              <MyButton
                mode="text"
                onPress={() => {
                  navigation.navigate(Constants.ROUTES.SIGNIN);
                }}
                label="Log in"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
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
  formFields: {
    gap: 10,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  terms: {
    marginBottom: 10,
  },
  signInWrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  signInText: {
    marginVertical: 19,
    textAlignVertical: 'center',
  },
});

export default Signup;
