import { StatusBar, StyleSheet } from 'react-native';
import { Colors } from './colors';

const globalStyle = StyleSheet.create({
    container: {
      flex: 1,
      //alignItems: 'center',
      justifyContent: 'center',
      //marginTop: StatusBar.currentHeight || 0,
    },
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    image: {
      width: 320,
      height: 320,
    },
    text: {
      color: 'rgba(255, 255, 255, 0.8)',
      backgroundColor: 'transparent',
      textAlign: 'center',
      paddingHorizontal: 16,
    },
    title: {
      fontSize: 32,
      color: 'white',
      backgroundColor: 'transparent',
      textAlign: 'center',
      marginBottom: 16,
    },
    heroText: {
      fontSize: 32,
      fontWeight: 'bold',
    },
    subHeroText: {
      fontSize: 18,
    },
    myButtonContained: {
      paddingVertical: 10,
      marginVertical: 10,
      width: '100%',
      borderRadius: 8,
    },
    myButtonOutlined: {
      paddingVertical: 10,
      marginVertical: 10,
      borderColor: '#fff',
      borderWidth: 1,
      color: Colors.light.white,
      width: '100%',
      borderRadius: 8,
    },
    myButtonContainedInvert: {
      paddingVertical: 10,
      marginVertical: 10,
      width: '100%',
      borderRadius: 8,
    }

});

export default globalStyle;
