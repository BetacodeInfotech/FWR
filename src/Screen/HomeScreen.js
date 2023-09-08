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

const {width, height} = Dimensions.get('screen');
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
        onPress={() => props.navigation.navigate('DetailsScreen', food)}>
        <View style={styles.card}>
          <View style={styles.foodImg}>
            <Image source={food.image} style={styles.img} />
          </View>

          <View style={styles.foodContainer}>
            <View>

            <Text style={styles.foodName}>{food.name}</Text>
            <Text style={styles.foodIngredients}>{food.ingredients}</Text>
            </View>
            <View style={styles.rating}>
            <Image source={food.ratingImage} style={styles.star} />
            <Text style={styles.number}>{food.rating}</Text>
          </View>
          </View>
          <View style={styles.price}>
            <Text style={styles.foodPrice}>{food.price}</Text>
                 <View style={styles.addToCartBtn}>
             <Icon name="add" size={22} color={Colors.white} />
           
          </View>
          </View>
     
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={'#000'} translucent={true} />

      <View style={styles.backGround}>
        {/* <View style={styles.head}> */}
        <View style={styles.locationBtn}>
          <TouchableOpacity>
            <Text style={styles.locationButton}>Location</Text>
            <Text style={styles.address}> Bilzen,Tanjungbalai</Text>
          </TouchableOpacity>
          <Animated.Image
            source={require('../Assets/Images/Flywheel.jpg')}
            onLoad={animate}
            style={[styles.avatar, {transform: [{rotate: RotateData}]}]}
          />
        </View>

        {/* </View> */}

        <View style={[styles.container]}>
          {/* <View style={styles.container}> */}
          <TextInput
            style={styles.input}
            placeholder="Search menu"
            // onChangeText={val => setLocation(val)}
          />

          <TouchableOpacity style={styles.btn}>
            <Image
              source={require('../Assets/Images/settings.png')}
              style={styles.setting}
            />
          </TouchableOpacity>
          {/* </View> */}
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container3}>
        <View style={styles.container2}>
          <TouchableOpacity activeOpacity={0.8}>
            <Image
              source={require('../Assets/Images/New/Thali1.jpg')}
              style={styles.ImgBtn}
            />

            <Image
              source={require('../Assets/Images/Promo.png')}
              style={styles.promo}
            />

            <Text style={styles.ImgText}>Special Veg Thali</Text>
          </TouchableOpacity>
        </View>

        {/* <View> */}
         { ListCategories()}
        {/* </View> */}
        <FlatList
          showsVerticalScrollIndicator={false}
          // numColumns={2}
          data={foods}
          renderItem={({item}) => <Card food={item} />}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    // width: width,
  },

  backGround: {
    backgroundColor: Colors.dark,
    height: 305,
    borderRadius:5
  },

  ab: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: `#808080`,
    // width: width - 200,
    borderRadius: 10,
    
    marginHorizontal: 5,
  },

  container2: {
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  container3: {
    marginTop: -90,
  },

  head: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
  },

  locationBtn: {
    marginVertical: 35,
    marginHorizontal: 10,
    // padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  promo: {
    borderRadius: 7,
    height: 30,
    width: 90,
    // marginBottom:30,
    // marginTop: -10,
    marginLeft: 10,
    padding: 10,
  },

  ImgBtn: {
    height: 220,
    width: width - 10,
    borderRadius: 5,
    marginBottom: -200,
  },

  search: {
    height: 41,
    width: 41,
    borderRadius: 10,
  },

  ImgText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
    // padding:10,
    // marginTop: 5,
    width: 220,
    textDecorationLine: 'underline',
    // backgroundColor: 'black',
  },

  avatar: {
    height: 50,
    width: 50,
    // marginTop: 50,
    // marginLeft: 150,
    // borderRadius: 10,
  },

  locationButton: {
    color: 'white',
    fontSize: 15,
    // paddingLeft: 20,
    // marginTop: 35,
  },

  address: {
    color: 'white',
    fontSize: 17,
    // marginLeft: 15,
  },

  input: {
    backgroundColor: "#808080",
    color:"white",
    width: width - 60,
    borderRadius: 10,
    // marginTop: 5,
    fontSize: 20,
  },

  setting: {
    height: 41,
    width: 41,
    borderRadius: 10,
  },

  categoriesListContainer: {
    paddingVertical: 30,
    marginTop: 80,
    alignItems: 'center',
    paddingHorizontal: 10,
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
    // marginTop:-40,
  },

  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  foodContainer: {
    // marginHorizontal: 10,
    // underlayColor: Colors.white,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItem:"center"

  },

  card: {
    // height: 300,
    // width: cardWidth,
    // marginHorizontal: 10,
    marginBottom: 20,
    padding:10,
    // marginTop: 5,
    borderRadius: 5,
    elevation: 13,
    backgroundColor: 'white',
  },

  foodImg: {
    alignItems: 'center',
  },

  img: {
    width: width-10,
    height: 130,
    borderRadius: 5,
    // marginBottom: 20,
    marginHorizontal: 10,
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
    // marginTop: 7,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },

  foodPrice: {
    // fontSize: 20,
    color: 'black',
    // fontWeight: 'bold',
  },

  addBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },

  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 10,
    // marginVertical: -30,
    // marginHorizontal: 150,
    backgroundColor: Colors.sienna,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rating: {
    flexDirection: 'row',
    // marginTop: -130,
    // marginBottom: 100,
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
