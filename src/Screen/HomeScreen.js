import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  Dimensions,
  Animated,
} from 'react-native';
import React from 'react';
import foods from '../Const/foods';
import Colors from '../Const/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {categories} from '../Const/categories';

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

//Make the whole page scrollable below the location and profile tab.

const HomeScreen = props => {
  const [selectedCategoryIndex, setselectedCategoryIndex] = React.useState(0);

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

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setselectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? Colors.sienna
                    : Colors.secondary,
                ...styles.categorybtn,
              }}>
              <Text
                style={{
                  color:
                    selectedCategoryIndex == index
                      ? Colors.white
                      : Colors.black,
                  ...styles.categoryText,
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const Card = ({food}) => {
    return (
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor="#DDDDDD"
        // style={styles.container}
        onPress={() => props.navigation.navigate('DetailsScreen', food)}>
        <View style={styles.card}>
          <View style={styles.foodImg}>
            <Image source={food.image} style={styles.img} />
          </View>
          <View style={styles.rating}>
            <Image source={food.ratingImage} style={styles.star} />
            <Text style={styles.number}>{food.rating}</Text>
          </View>
          <View style={styles.foodContainer}>
            <Text style={styles.foodName}>{food.name}</Text>
            <Text style={styles.foodIngredients}>{food.ingredients}</Text>
          </View>
          <View style={styles.price}>
            <Text style={styles.foodPrice}>{food.price}</Text>
            {/* <Icon name="add" size={20} style={styles.addToCartBtn}/> */}
          </View>
          <View style={styles.addToCartBtn}>
            <Icon name="add" size={22} color={Colors.white} />
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <Image
        source={require('../Assets/Images/2131.jpg')}
        style={styles.topImage}
      />

      <Animated.Image
        source={require('../Assets/Images/Flywheel.jpg')}
        onLoad={animate}
        style={[styles.avatar, {transform: [{rotate: RotateData}]}]}
      />

      <TouchableOpacity>
        <View style={styles.locationBtn}>
          <Text style={styles.locationButton}>Location</Text>
          <Text style={styles.address}> Bilzen,Tanjungbalai</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.ab}>
        <TextInput
          style={styles.input}
          placeholder="Search menu"
          onChangeText={val => setLocation(val)}
        />

        <TouchableOpacity style={styles.btn}>
          <Image
            source={require('../Assets/Images/settings.png')}
            style={styles.setting}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.8}>
        <Image
          source={require('../Assets/Images/New/Thali1.jpg')}
          style={styles.firstImgBtn}
        />
        <Text style={styles.firstImgText}>Special Veg Thali</Text>
        <Image
          source={require('../Assets/Images/Promo.png')}
          style={styles.promo}
        />
      </TouchableOpacity>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({item}) => <Card food={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    // height: '100%',
    flex: 1,
    backgroundColor: 'white',
  },

  ab: {
    flexDirection: 'row',
  },

  locationBtn: {
    marginVertical: 20,
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  promo: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'absolute',
    marginVertical: -170,
    marginHorizontal: 55,
    borderRadius: 7,
    height: 30,
    width: 90,
  },

  firstImgBtn: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    marginVertical: -185,
    marginHorizontal: 31,
    height: 200,
    width: 350,
    borderRadius: 30,
  },

  topImage: {
    backgroundColor: '#808080',
    height: '40%',
    position: 'absolute',
  },

  search: {
    height: 41,
    width: 41,
    borderRadius: 10,
  },

  firstImgText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginHorizontal: 55,
    position: 'absolute',
    marginVertical: -120,
    textDecorationLine: 'underline',
    backgroundColor: 'black',
  },

  avatar: {
    position: 'absolute',
    height: 50,
    width: 50,
    marginVertical: 50,
    marginHorizontal: 328,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  locationButton: {
    color: 'white',
    fontSize: 15,
    paddingLeft: 20,
    paddingTop: 35,
    paddingRight: 200,
  },

  address: {
    color: 'white',
    fontSize: 17,
    paddingLeft: 18,
  },

  input: {
    backgroundColor: `#808080`,
    marginVertical: 160,
    width: 350,
    borderRadius: 10,
    marginHorizontal: 30,
    marginTop: 90,
    marginBottom: 230,
    fontSize: 20,
  },

  setting: {
    height: 41,
    width: 41,
    borderRadius: 10,
  },

  btn: {
    position: 'absolute',
    marginVertical: 93,
    marginHorizontal: 336,
  },

  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  categorybtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },

  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  foodContainer: {
    marginHorizontal: 10,
    underlayColor: Colors.white,
  },

  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 5,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: 'white',
  },

  foodImg: {
    alignItems: 'center',
  },

  img: {
    width: 185,
    height: 130,
    borderRadius: 15,
  },

  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 4,
  },

  foodIngredients: {
    fontSize: 15,
    color: Colors.grey,
    marginTop: 2,
  },

  price: {
    marginTop: 7,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  foodPrice: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },

  addBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },

  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 10,
    marginVertical: -30,
    marginHorizontal: 150,
    backgroundColor: Colors.sienna,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rating: {
    flexDirection: 'row',
    position: 'absolute',
  },

  star: {
    height: 22,
    width: 22,
    marginVertical: 5,
    marginHorizontal: 5,
  },

  number: {
    color: Colors.dark,
    marginTop: 7,
    fontWeight: '800',
  },
});

export default HomeScreen;
