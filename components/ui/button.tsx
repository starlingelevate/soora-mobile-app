import {SafeAreaView, View} from 'react-native';
import globalStyle from '../../styles/global';
import React from 'react';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';

const MyButton = ({label, onPress, ...rest}: any) => {
  const theme = useTheme();

  return (
    <Button
      style={globalStyle.my1}
      mode="contained"
      onPress={() => onPress()}
      buttonColor={theme.colors.secondary}
      textColor={theme.colors.tertiary}
      {...rest}>
      {label}
    </Button>
  );
};

export default MyButton;
