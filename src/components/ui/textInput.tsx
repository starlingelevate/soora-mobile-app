import {SafeAreaView, View} from 'react-native';
import globalStyle from '../../styles/global';
import React from 'react';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';

const MyTextInput = ({label, type, ...rest}: any) => {
  const theme = useTheme();

  return type !== 'password' ? (
    <TextInput
      label={label}
      {...rest}
      mode="flat"
      textColor={theme.colors.secondary}
      style={{
        //backgroundColor: theme.colors.secondary,
        borderRadius: 5,
      }}
    />
  ) : (
    <TextInput
      secureTextEntry
      label={label}
      {...rest}
      mode="flat"
      textColor={theme.colors.secondary}
      style={{
        //backgroundColor: theme.colors.secondary,
        borderRadius: 5,
      }}
    />
  );
};

export default MyTextInput;
