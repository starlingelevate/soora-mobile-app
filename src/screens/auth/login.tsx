import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StatusBar,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import MyTextInput from '../../components/ui/textInput';
import MyButton from '../../components/ui/button';
import Constants from '../../../constants';
import MyCheckbox from '../../components/ui/checkbox';
import {NavigationProp} from '@react-navigation/native';

type LoginProps = {
  navigation: NavigationProp<any>;
};

const Login: React.FC<LoginProps> = ({navigation}) => {
  const theme = useTheme();
  const [rememberMe, setRememberMe] = useState(false);

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
                source={require('./../../assets/images/back.png')}
                style={styles.backImage}
              />
            </View>

            <Image
              source={require('./../../assets/images/dark_logo_only.png')}
              style={styles.logo}
            />

            <Text variant="titleLarge" style={[styles.title, {color: theme.colors.primary}]}>
              Log In
            </Text>
            <Text variant="bodyLarge" style={[styles.subtitle, {color: theme.colors.primary}]}>
              To get started, enter your registered E-mail ID
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.formGroup}>
              <MyTextInput label="E-mail ID" left="email-variant" />
              <MyTextInput
                label="Enter Password"
                left="key-variant"
                type="password"
              />
              <View style={styles.rememberForgot}>
                <MyCheckbox
                  status={rememberMe ? 'checked' : 'unchecked'}
                  label="Remember me"
                  onPress={() => setRememberMe(!rememberMe)}
                />
                <MyButton
                  mode="text"
                  onPress={() => {
                    navigation.navigate(Constants.ROUTES.FORGOT_PASSWORD);
                  }}>
                  Forgot your password?
                </MyButton>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <MyButton
              mode="contained"
              onPress={() => console.log('Login button pressed')}
              label="Log In"
            />

            <View style={styles.signupPrompt}>
              <Text style={styles.signupText}>Don't have an account?</Text>
              <MyButton
                mode="text"
                onPress={() => {
                  navigation.navigate(Constants.ROUTES.SIGNUP);
                }}
                label="Sign Up"
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

export default Login;
