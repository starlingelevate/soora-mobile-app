import React, {useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextComponent,
  View,
} from 'react-native';
import {Card, Text} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import moment from 'moment';
import Header from '../../components/header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MyButton from '../../components/ui/button';
import Sidebar from '../../components/sidebar';

const DATA = [
  {title: 'buffalo', img: require('./../../assets/images/animals/buffalo.png')},
  {title: 'cow', img: require('./../../assets/images/animals/cow.png')},
  {
    title: 'crocodile',
    img: require('./../../assets/images/animals/crocodile.png'),
  },
  {
    title: 'elephant',
    img: require('./../../assets/images/animals/elephant.png'),
  },
  {
    title: 'flamingo',
    img: require('./../../assets/images/animals/flamingo.png'),
  },
  {
    title: 'hedgehog',
    img: require('./../../assets/images/animals/hedgehog.png'),
  },
  {title: 'horse', img: require('./../../assets/images/animals/horse.png')},
  {title: 'sheep', img: require('./../../assets/images/animals/sheep.png')},
  {
    title: 'antelope',
    img: require('./../../assets/images/animals/antelope.png'),
  },
  {title: 'bear', img: require('./../../assets/images/animals/bear.png')},
  {title: 'bison', img: require('./../../assets/images/animals/bison.png')},
  {title: 'fox', img: require('./../../assets/images/animals/fox.png')},
  {
    title: 'hippopotamus',
    img: require('./../../assets/images/animals/hippopotamus.png'),
  },
  {title: 'lynx', img: require('./../../assets/images/animals/lynx.png')},
  {title: 'panda', img: require('./../../assets/images/animals/panda.png')},
  {title: 'pig', img: require('./../../assets/images/animals/pig.png')},
  {title: 'rabbit', img: require('./../../assets/images/animals/rabbit.png')},
  {
    title: 'reindeer',
    img: require('./../../assets/images/animals/reindeer.png'),
  },
  {
    title: 'rhinoceros',
    img: require('./../../assets/images/animals/rhinoceros.png'),
  },
];

type EventProps = {
  title: string;
  cover_image: any;
};

const Item = ({event}: {event: EventProps}) => {


  const {img:cover_image, title} = event;

  return (
    <Card style={{margin: 10}} mode={'elevated'}>
      <Card.Cover source={cover_image} />
      <Card.Content>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginVertical: 15,
            alignItems: 'center',
          }}>
          <View style={{flex: 10}}>
            <Text style={{textTransform: 'capitalize'}}>
              {title}
            </Text>
            <Text style={{textTransform: 'capitalize'}}>
              {moment().format('DD.MM.YYYY')}
            </Text>
          </View>
          <View style={{flex: 2, display: 'flex', flexDirection: 'row'}}>
            <Icon name="image" size={20} />
            <Text variant="labelLarge" style={{marginLeft: 5}}>{100}</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const ListHeader = () => {
  return (
    <View
      style={{
        width: '100%',
        marginVertical: 10,
        justifyContent: 'flex-start',
      }}>
      <Text style={{textAlign: 'left', fontSize: 16}}>
        Your Events
      </Text>
    </View>
  );
};

const HomeScreen = ({navigation, route, options}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Sidebar/>
      <View style={{flex: 0.1}}>
        <Header navigation={navigation} route={route} options={options} />
      </View>

      <FlatList
        data={DATA}
        snapToAlignment="start"
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').width}
        renderItem={({item, index}) => {
          if (index === 0) {
            return (
              <>
                <ListHeader />
                <Item event={item} />
              </>
            );
          }

          return <Item event={item} />;
        }}
        keyExtractor={item => item.title}
        style={{width: '100%'}}
      />
      <MyButton label="Enter Event Buffalo" style={{width: '100%', marginVertical: 20}}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    //backgroundColor: '#f9c2ff',
    width: 360,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    marginTop: 40,
    fontSize: 48,
    letterSpacing: 10,
    textTransform: 'uppercase',
  },
  img: {
    height: 256,
    width: 256,
  },
});

export default HomeScreen;
