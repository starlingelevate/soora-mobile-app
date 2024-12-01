import React, {View} from 'react-native';
import {useTheme} from 'react-native-paper';
import RNPickerSelect, {Item} from 'react-native-picker-select';

const MyDropdown = ({
  label,
  options,
}: {
  label: string;
  options: Array<Item>;
}) => {
  const theme = useTheme();


  options = options.map((op)=>{
    op.color = theme.colors.primary;
    return op;
  });

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: theme.colors.primary,
        borderRadius: 8,
      }}>
      <RNPickerSelect
        placeholder={{label: label, value: null, color: theme.colors.conversionGrey}}
        onValueChange={value => console.log(value)}
        items={options}
      />
    </View>
  );
};

export default MyDropdown;
