import React from 'react';
import {Button, Text, useTheme} from 'react-native-paper';
import globalStyle from '../../styles/global';

type MyButtonProps = {
  children?: React.ReactNode;
  label?: string;
  mode: 'contained' | 'containedInvert' | 'text' | 'textInvert' | 'outlined';
  onPress: () => void;
  [key: string]: any; // To allow additional props like `disabled`, `loading`, etc.
};

const MyButton: React.FC<MyButtonProps> = ({children, label, mode, onPress, ...rest}) => {
  const theme = useTheme();

  const getButtonStyle = () => {
    switch (mode) {
      case 'contained':
        return {
          buttonStyle: globalStyle.myButtonContained,
          textStyle: {fontSize: 18, color: theme.colors.white},
          buttonColor: theme.colors.primary,
        };
      case 'containedInvert':
        return {
          buttonStyle: globalStyle.myButtonContainedInvert,
          textStyle: {fontSize: 18, color: theme.colors.primary},
          buttonColor: theme.colors.white,
        };
      case 'text':
        return {
          buttonStyle: {marginVertical: 10},
          textStyle: {textDecorationLine: 'underline', color: theme.colors.primary},
        };
      case 'textInvert':
        return {
          buttonStyle: {marginVertical: 10},
          textStyle: {textDecorationLine: 'underline', color: theme.colors.platinumGrey},
        };
      case 'outlined':
      default:
        return {
          buttonStyle: globalStyle.myButtonOutlined,
          textStyle: {fontSize: 18, color: theme.colors.white},
        };
    }
  };

  const {buttonStyle, textStyle, buttonColor} = getButtonStyle();

  return (
    <Button
      style={buttonStyle}
      mode={mode === 'containedInvert' ? 'contained' : mode} // Adjust mode for 'containedInvert'
      onPress={onPress}
      buttonColor={buttonColor}
      {...rest}
    >
      <Text style={textStyle}>{children || label}</Text>
    </Button>
  );
};

export default MyButton;
