import React, {useState} from 'react';
import {Platform, View} from 'react-native';
import {Appbar, Text} from 'react-native-paper';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import Icon, {} from 'react-native-vector-icons/MaterialCommunityIcons';
import Constants from '../../../constants';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const Header = ({
  navigation,
}: NativeStackHeaderProps): React.JSX.Element => {


  const title = Constants.APP_NAME;
  const [showActions, setShowActions] = useState(false);

  return (
    <View style={{padding: 12, width: '100%', flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 0.3}}>
        <Text style={{textAlign: "center", fontSize: 23}}>{title}</Text>
      </View>
      <View style={{flex: 0.3}}>
      <Icon name={'bell'}size={20} />
      </View>
    </View>
  );
};

export default Header;
