import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Touchable,
  View,
} from 'react-native';
import globalStyle from '../../styles/global';
import React, {useEffect, useState} from 'react';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';
import MyTextInput from '../../components/ui/textInput';
import Constants from '../../constants';
import {useMutation, useQuery} from '@tanstack/react-query';
import {login} from '../../services/auth';
import HomeScreen from '../home';

const SignIn = ({navigation}) => {
  const theme = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("---------------------",data);
      navigation.navigate(Constants.ROUTES.ROOT);
    },
  });

  const handleLogin = (): void => {
    mutation.mutate({username: email, password});
  };

  return (
    <SafeAreaView
      style={{
        ...globalStyle.container,
        backgroundColor: theme.colors.primary,
        paddingTop: 50,
      }}>
      <View style={{flex: 1}}>
        <View style={{flex: 1, gap: 10, alignItems: 'center'}}>
          <View style={{flex: 5}}>
            <Image
              source={require('./../../assets/images/camera.png')}
              style={{height: 250, width: 250}}
            />
          </View>

          <View
            style={{
              flexGrow: 1,
              alignItems: 'center',
              paddingHorizontal: 50,
              backgroundColor: '#fff',
              width: '100%',
              borderRadius: 50,
              borderBottomStartRadius: 0,
              borderBottomEndRadius: 0,
              paddingBottom: 20,
            }}>
            <Text
              style={{
                ...globalStyle.heroText,
                color: theme.colors.secondary,
                alignSelf: 'flex-start',
                marginTop: 50,
              }}>
              Login
            </Text>
            <Text
              style={{
                ...globalStyle.subHeroText,
                color: theme.colors.primary,
                alignSelf: 'flex-start',
                marginTop: 10,
                marginBottom: 30,
              }}>
              Let's dive into new era of sharing
            </Text>
            <View style={{flexDirection: 'column', width: 300, gap: 20}}>
              <View style={{gap: 20}}>
                <MyTextInput
                  label="Email"
                  onChange={(e: any) => setEmail(e.nativeEvent.text)}
                />
                <MyTextInput
                  type="password"
                  label="Password"
                  onChange={(e: any) => setPassword(e.nativeEvent.text)}
                />
              </View>
              <Button
                style={globalStyle.my1}
                mode="contained"
                onPress={() => handleLogin()}
                buttonColor={theme.colors.secondary}
                textColor={theme.colors.tertiary}>
                Sign In
              </Button>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                flexDirection: 'row',
              }}>
              <Text>or Don't have an account, get a new by </Text>
              <Button
                mode="text"
                onPress={() => {
                  navigation.navigate(Constants.ROUTES.SIGNUP);
                }}>
                Signup
              </Button>
            </View>
            <Text>By Singingin, you are accepting our </Text>
            <Text>Terms and Conditions & Privacy Policy</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
