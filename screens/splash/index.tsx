import { useEffect } from "react";
import { Text, View } from "react-native";
import SplashScreen from 'react-native-splash-screen'

const Splash = () => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is Splash screen</Text>
    </View>
  );
};

export default Splash;
