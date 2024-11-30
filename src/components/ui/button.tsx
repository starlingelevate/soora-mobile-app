import {SafeAreaView, View} from 'react-native';
import globalStyle from '../../styles/global';
import React from 'react';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';

const MyButton = ({label, mode, onPress, ...rest}: any) => {
  const theme = useTheme();

  return mode === 'contained' ? (
    <Button
      style={globalStyle.myButtonContained}
      mode={mode}
      onPress={() => onPress()}
      buttonColor={theme.colors.primary}
      {...rest}>
      <Text style={{fontSize: 18}}>
        {label}
      </Text>
    </Button>
  ) : mode === 'containedInvert' ? (
    <Button
      style={globalStyle.myButtonContainedInvert}
      mode={'contained'}
      onPress={() => onPress()}
      buttonColor={theme.colors.white}
      textColor={theme.colors.primary}
      {...rest}>
      <Text style={{fontSize: 18}}>
        {label}
      </Text>
    </Button>
  ) : mode === 'text' ? (
    <Button mode="text" style={{marginVertical: 10}}>
      <Text style={{textDecorationLine: 'underline', color: theme.colors.platinumGrey}}>
        {label}
      </Text>
    </Button>
  ) : (
    <Button
      style={globalStyle.myButtonOutlined}
      mode={'outlined'}
      onPress={() => onPress()}
      {...rest}>
      <Text style={{fontSize: 18, color: theme.colors.white}}>
        {label}
      </Text>
    </Button>
  );
};

export default MyButton;
