import {Image, SafeAreaView, View} from 'react-native';
import globalStyle from '../../styles/global';
import React, {useEffect} from 'react';
import {Text, useTheme} from 'react-native-paper';
import Constants from '../../../constants';
import {useMutation, useQuery} from '@tanstack/react-query';
import {logout} from '../../services/auth';
import {AxiosResponse} from 'axios';
import debouce from 'lodash/debounce';

const Logout = ({navigation}) => {
  const theme = useTheme();

  const mutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      navigation.navigate(Constants.ROUTES.SIGNIN);
    },
    onError: () => {
      navigation.navigate(Constants.ROUTES.SIGNIN);
    },
  });
  
  const handleLogout = (): void => {
    console.log('calling logout');
    mutation.mutate({});
  };

  useEffect(() => {
    handleLogout();
  }, []);

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
            <Text
              style={{
                ...globalStyle.subHeroText,
                color: theme.colors.secondary,
                alignSelf: 'flex-center',
                marginTop: 50,
              }}>
              Thank you for usking the Application, we are logging you out.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Logout;
