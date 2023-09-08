import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../Const/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BuyButton} from '../Components/BuyButton';

const {width, height} = Dimensions.get('window');
// const frameWidth = width;
// const columnWidth = frameWidth / 3;

const DetailsScreen = ({navigation, route}) => {
  const [size, setSize] = useState('small');
  const [showFullDescription, setShowFullDescription] = useState(false);
  const description =
    'Lorem ipsum dolor sit amet. Ut maxime saepe in reiciendis cupiditate aut error fuga. Est consequatur velit eum voluptatum molestiae non quibusdam consequatur in aperiam quos et internos nobis et nulla odit aut voluptatum quas.';

  const ToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const item = route.params;
  
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
      <View style={styles.header}>
        <View style={{
          flexDirection:"row"
        }}>

        <Icon
          name="arrow-back-ios"
          size={28}
          onPress={() => navigation.goBack()}
          />
        <Text style={styles.detail}> Detail </Text>
          </View>
        <TouchableOpacity>
          <Image
            source={require('../Assets/Images/details/heart.png')}
            style={styles.heart}
          />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.item}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View>
          <Text style={styles.Name}>{item.name}</Text>
          <Text style={styles.Ingredients}>{item.ingredients}</Text>
        </View>
        <View style={styles.rating}>
          <View style={{flexDirection:"row"}}>
          <Image style={styles.star} source={item.ratingImage} />
          <Text style={styles.number}> {item.rating} </Text>

          </View>
          <Image
            source={require('../Assets/Images/details/beans.png')}
            style={styles.bean}
          />
          <Image
            source={require('../Assets/Images/details/pack.png')}
            style={styles.pack}
          />
        </View>
        <View style={styles.hairlineWidth}/>
        <View style={styles.about}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.data}>
            {showFullDescription
              ? description
              : `${description.slice(0, 100)}...`}
          </Text>
          <Text style={styles.read}>
            {description.length > 100 && (
              <TouchableOpacity onPress={ToggleDescription}>
                <Text style={styles.readmore}>
                  {showFullDescription ? 'Read Less' : 'Read More'}
                </Text>
              </TouchableOpacity>
            )}
          </Text>
        </View>
        <View>
          <Text style={styles.size}>Size</Text>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            onPress={() => setSize('small')}
            style={{
              backgroundColor: size == 'small' ? Colors.bisque : Colors.white,
              ...styles.btnS,
            }}>
            <Text
              style={{
                color: size == 'small' ? Colors.sienna : Colors.black,
                ...styles.textS,
              }}>
              {' '}
              S{' '}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSize('medium')}
            style={{
              backgroundColor: size == 'medium' ? Colors.bisque : Colors.white,
              ...styles.btnM,
            }}>
            <Text
              style={{
                color: size == 'medium' ? Colors.sienna : Colors.black,
                ...styles.textM,
              }}>
              {' '}
              M{' '}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSize('large')}
            style={{
              backgroundColor: size == 'large' ? Colors.bisque : Colors.white,
              ...styles.btnL,
            }}>
            <Text
              style={{
                color: size == 'large' ? Colors.sienna : Colors.black,
                ...styles.textL,
              }}>
              {' '}
              L{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.hairlineWidth}>
          <Text>____________________________________________________</Text>
        </View>
        <View style={styles.footer}>
          <View>
            <Text style={styles.footerPrice}>Price</Text>
            <Text style={styles.footerPriceNumber}>{item.price}</Text>
          </View>
          <BuyButton
            Press={() => {
              navigation.navigate('Order', item);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.white,
    // height: height,
    // width: width,
  },

  footerPrice: {
    fontSize: 18,
  },

  footerPriceNumber: {
    fontSize: 25,
    fontWeight: '800',
    color: Colors.sienna,
    paddingBottom: 10,
  },

  footer: {
    // marginTop:1,
    marginHorizontal: 10,
    flexDirection: 'row',
  },

  btnS: {
    // backgroundColor:Colors.white,
    alignItems: 'center',
    width: 105,
    height: 40,
    marginRight: 7,
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 0.5,
  },

  textS: {
    fontSize: 18,
  },

  btnM: {
    // backgroundColor:Colors.white,
    width: 105,
    marginRight: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 0.5,
  },

  textM: {
    fontSize: 18,
  },

  btnL: {
    // backgroundColor:Colors.white,
    width: 105,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 0.5,
  },

  textL: {
    fontSize: 18,
  },

  btn: {
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingTop: 8,
  },

  header: {
    marginTop: 40,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },

  detail: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    // marginHorizontal: 110,
    alignItems: 'center',
  },

  heart: {
    height: 25,
    width: 25,
    tintColor: 'red',
    // marginRight:5,
  },

  item: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
  },

  image: {
    height: 250,
    width: 340,
    borderRadius: 25,
  },

  Name: {
    paddingTop: 20,
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },

  Ingredients: {
    marginHorizontal: 10,
    fontSize: 16,
  },

  rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingTop: 15,
    paddingBottom: 18,
  },

  star: {
    height: 22,
    width: 22,
  },

  number: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  bean: {
    marginLeft: 160,
    height: 50,
    width: 50,
    marginVertical: -18,
    marginHorizontal: 10,
  },

  pack: {
    marginHorizontal: 1,
    marginVertical: -18,
    height: 50,
    width: 50,
  },

  hairlineWidth: {
    height: 1,
    backgroundColor: 'gray',
    // marginHorizontal: 40,
    margin: 10,
    // paddingBottom: 15,
  },

  about: {
    marginHorizontal: 10,
  },

  description: {
    fontSize: 21,
    fontWeight: '700',
    color: 'black',
    paddingBottom: 5,
  },

  data: {
    fontSize: 18,
  },

  readmore: {
    color: Colors.sienna,
    fontSize: 17,
    fontWeight: '800',
  },

  size: {
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    paddingTop: 8,
    paddingBottom: 5,
  },
});

export default DetailsScreen;
