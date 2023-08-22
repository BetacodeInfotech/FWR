import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  StatusBar,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('screen');
const Imgheight = height - 350;

const OnBoardScreen = props => {
  let rotateValueHolder = new Animated.Value(0);

  const animate = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 10,
      duration: 11000,
      useNativeDriver: true,
    }).start();
  };

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 4],
    outputRange: ['0deg', '90deg'],
  });

  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />

      <Animated.Image
        source={require('../Assets/Images/Flywheel.jpg')}
        onLoad={animate}
        style={[styles.backgroundImage, {transform: [{rotate: RotateData}]}]}
      />

      <Text style={styles.Header}>
        Food so good, your taste buds will love it.
      </Text>
      <Text style={styles.body}>
        The best meals, the finest snacks, the powerful flavour.
      </Text>

      <View style={styles.google}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('HomeScreen')}
          style={styles.btn}>
          <View style={styles.container}>
            <Image
              style={styles.img}
              source={require('../Assets/Images/google.png')}
            />
            <Text style={styles.txt}> Continue with Google</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
    height: '100%',
  },

  backgroundImage: {
    height: Imgheight,
    width: width,
    marginTop:20,
    marginBottom:20,
  },

  Header: {
    fontWeight: 'bold',
    fontSize: 45,
    color: 'white',
    textAlign: 'center',
    marginTop: -30,
  },

  body: {
    fontSize: 17,
    marginHorizontal: 30,
    color: '#fffaf0',
    textAlign: 'center',
    paddingLeft: 15,
    paddingTop: 25,
    paddingBottom: 20,
    fontWeight: '200',
  },

  input: {
    height: 55,
    borderRadius: 8,
    borderColor: '#777',
    paddingTop: 10,
    margin: 10,
    width: 370,
    alignContent: 'center',
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
  iconStyle: {
    fontSize: 40,
    marginTop: 30,
    color: 'black',
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    marginRight: 10,
    height: 40,
    width: 40,
    alignSelf: 'auto',
  },

  google: {
    alignItems: 'center',
  },

  btn: {
    backgroundColor: 'white',
    borderRadius: 8,
    height: 55,
    width: width - 30,
    justifyContent: 'center',
  },

  txt: {
    color: '#777',
    fontSize: 23,
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default OnBoardScreen;
