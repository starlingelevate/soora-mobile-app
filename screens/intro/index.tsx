import {Image, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import globalStyle from '../../styles/global';
import Constants from '../../constants';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

const test = require('./../../assets/images/animals/antelope.png');

const slides = [
  {
    key: 1,
    title: 'Click a Selfie',
    text: 'Description.\nSay something cool',
    image: require('./../../assets/images/animals/sheep.png'),
    backgroundColor: '#9AA0A8',
  },
  {
    key: 2,
    title: 'Scan Event QR Code',
    text: 'Other cool stuff',
    image: require('./../../assets/images/animals/cow.png'),
    backgroundColor: '#A9D8B8',
  },
  {
    key: 3,
    title: "Boom! That's your photos",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('./../../assets/images/animals/buffalo.png'),
    backgroundColor: '#A7C4B5',
  },
];

const IntroSlider = ({navigation}: any) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const renderItem = ({item}: any) => {
    return (
      <View
        style={{...globalStyle.slide, backgroundColor: item?.backgroundColor}}>
        <Text style={globalStyle.title}>{item?.title}</Text>
        <Image style={globalStyle.image} source={item?.image} />
        <Text style={globalStyle.text}>{item?.text}</Text>
      </View>
    );
  };
  const onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    navigation.navigate(Constants.ROUTES.SIGNIN);
  };

  return (
    <AppIntroSlider renderItem={renderItem} data={slides} onDone={onDone} />
  );
};

export default IntroSlider;
