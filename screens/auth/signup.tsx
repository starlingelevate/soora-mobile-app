import { Dimensions, Image, SafeAreaView, ScrollView, View } from 'react-native';
import globalStyle from '../../styles/global';
import React from 'react';
import { Button, Text, TextInput, useTheme } from 'react-native-paper';
import MyTextInput from '../../components/ui/textInput';
import Constants from '../../constants';


const Signup = ({navigation}) => {
  const theme = useTheme();

  return (
    <SafeAreaView style={{ ...globalStyle.container, backgroundColor: theme.colors.primary, paddingTop: 50 }}>
      <View style={{flex: 1}}>
        <View style={{  flex: 1, gap: 10, alignItems: "center"}}>

          <View style={{  flex: 5}}>
            <Image source={require("./../../assets/images/camera.png")} style={{ height: 250, width: 250 }} />
          </View>

          <View style={{ flexGrow: 1, alignItems: "center", paddingHorizontal: 50, backgroundColor: "#fff", width: "100%", borderRadius: 50, borderBottomStartRadius: 0, borderBottomEndRadius: 0, paddingBottom: 20 }}>
            <Text style={{ ...globalStyle.heroText, color: theme.colors.secondary, alignSelf: "flex-start", marginTop: 50 }}>SignUp</Text>
            <Text style={{ ...globalStyle.subHeroText, color: theme.colors.primary, alignSelf: "flex-start", marginTop: 10, marginBottom: 30 }}>Let's start an awsome journey</Text>
            <View style={{ flexDirection: "column", width: 300, gap: 20 }}>
              <View style={{ gap: 20 }}>
                <MyTextInput label="Name" />
                <MyTextInput label="Email" />
                <MyTextInput label="Password" />
              </View>
              <Button style={globalStyle.my1} mode="contained" onPress={() => console.log('Pressed')}
                buttonColor={theme.colors.secondary} textColor={theme.colors.tertiary}>
                Sign Up
              </Button>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1, flexDirection: "row"}}>
              <Text>or already have account, then </Text><Button mode='text' onPress={()=>{navigation.navigate(Constants.ROUTES.SIGNIN)}}>Login</Button>
            </View>
            <Text>By Singing up, you are accepting our </Text>
            <Text>Terms and Conditions & Privacy Policy</Text>
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
