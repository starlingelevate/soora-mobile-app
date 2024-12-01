import * as React from 'react';
import {View} from 'react-native';
import {Checkbox, Text, useTheme} from 'react-native-paper';

const MyCheckbox = ({status, label, ...rest}) => {

    const theme = useTheme();

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Checkbox status={status} {...rest}/>
      {label && <Text style={{color: theme.colors.primary}}>{label}</Text>}
    </View>
  );
};

export default MyCheckbox;
