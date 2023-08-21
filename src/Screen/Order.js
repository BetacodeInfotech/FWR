import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Colors from '../Const/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SwitchButton from '../Components/SwitchButton';
import CartAmountToggle from '../Components/CartAmountToggle';

const {width, height} = Dimensions.get('window');

const Order = ({navigation, route}) => {
  const item = route.params;

  return (
    <SafeAreaView>
      <View style={styles.background}>
        <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
        <View style={styles.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.order}> Order </Text>
        </View>
        <SwitchButton />
        <View style={styles.Container1}>
          <Text style={styles.head}>Delivery Address</Text>
          <Text style={styles.body}>Jl. Kpg Sutoyo</Text>
          <Text style={styles.foot}>
            Kpg Sutoyo No 620, Bilzen, Tanjungbalai.
          </Text>
          <View style={styles.editAdd} underlayColor="#DDDDDD">
            <TouchableOpacity style={styles.addEditBtn}>
              <Image
                source={require('../Assets/Images/order/G.png')}
                style={styles.ImgG}
              />
              <Text style={styles.editAddText}>Edit Address</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addNoteBtn}>
              <Image
                source={require('../Assets/Images/order/A.png')}
                style={styles.ImgA}
              />
              <Text style={styles.addNoteText}>Add Note</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.hairlineWidth}>
            <Text>_______________________________________________________</Text>
          </View>
          <View style={styles.pdtDetail}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.detail}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.ingredients}>{item.ingredients}</Text>
            </View>
            <CartAmountToggle />
          </View>
        </View>
        <View style={styles.hairlineWidth}>
          <Text>
            _________________________________________________________________
          </Text>
        </View>
        <View style={styles.Container2}>
          <TouchableOpacity style={styles.discountBtn}>
            <Image
              source={require('../Assets/Images/order/E.png')}
              style={styles.ImgE}
            />
            <Text style={styles.discountText}>1 Discount is Applied</Text>
            <Image
              source={require('../Assets/Images/order/H.png')}
              style={styles.ImgH}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.paymentContainer}>
          <Text style={styles.head}> Payment Summary</Text>
          <View style={styles.price}>
            <Text style={styles.priceTxt}> Price </Text>
            <Text style={styles.priceAmt}>{item.price}</Text>
          </View>
          <View style={styles.delivery}>
            <Text style={styles.priceTxt}> Delivery Fee</Text>
            <Text style={styles.deliveryAmtchange}>$2.0</Text>
            <Text style={styles.deliveryAmt}>{item.delivery}</Text>
          </View>
          <View style={styles.hairlineWidth}>
            <Text>_______________________________________________________</Text>
          </View>
          <View style={styles.total}>
            <Text style={styles.priceTxt}>Total Payment</Text>
            <Text></Text>
          </View>
        </View>
        <View style={styles.hairlineWidthBottom}>
          <Text>
            _________________________________________________________________
          </Text>
        </View>
        <View style={styles.orderContainer}>
          <TouchableOpacity>
            <Image
              source={require('../Assets/Images/order/B.png')}
              style={styles.orderImg}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cashBtn}>
            <Text style={styles.cashTxt}>Cash</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBtn}>
            <Image
              source={require('../Assets/Images/order/F.png')}
              style={styles.option}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.orderBtn}>
          <Text style={styles.orderBtnTxt}>Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.light,
    height: height,
    width: width,
  },

  editAddText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.dark,
  },

  addNoteText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.dark,
  },

  discountBtn: {
    alignItems: 'center',
    width: 345,
    height: 60,
    marginRight: 7,
    justifyContent: 'flex-start',
    borderRadius: 15,
    borderWidth: 0.5,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    marginBottom: 10,
  },

  discountText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.dark,
  },

  addEditBtn: {
    alignItems: 'center',
    width: 140,
    height: 30,
    marginRight: 7,
    justifyContent: 'flex-start',
    borderRadius: 15,
    borderWidth: 0.5,
    flexDirection: 'row',
    backgroundColor: Colors.white,
  },

  ImgG: {
    height: 20,
    width: 20,
    marginRight: 7,
    marginLeft: 10,
  },

  ImgH: {
    height: 30,
    width: 30,

    marginLeft: 60,
  },

  ImgE: {
    height: 40,
    width: 40,
    marginRight: 15,
    marginLeft: 20,
  },

  ImgA: {
    height: 20,
    width: 20,
    marginRight: 2,
  },

  addNoteBtn: {
    alignItems: 'center',
    width: 100,
    height: 30,
    marginRight: 7,
    justifyContent: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    borderWidth: 0.5,
    backgroundColor: Colors.white,
  },

  editAdd: {
    flexDirection: 'row',
    marginTop: 5,
  },

  header: {
    // flex:1,
    marginTop: 40,
    marginBottom: 35,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
  },

  order: {
    flexDirection: 'row',
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginHorizontal: 110,
  },

  Container1: {
    marginTop: 30,
    marginHorizontal: 30,
  },

  Container2: {
    marginHorizontal: 30,
  },

  head: {
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 10,
    color: Colors.dark,
  },

  body: {
    fontSize: 16,
    fontWeight: '900',
    paddingBottom: 10,
    color: Colors.dark,
  },

  foot: {
    fontSize: 14,
    paddingBottom: 7,
  },

  price: {
    flexDirection: 'row',
  },

  total: {
    flexDirection: 'row',
    marginLeft: 5,
  },

  delivery: {
    flexDirection: 'row',
  },

  priceTxt: {
    fontSize: 17,
    fontWeight: '500',
    paddingBottom: 7,
    color: Colors.dark,
  },

  priceAmt: {
    fontSize: 17,
    color: Colors.dark,
    fontWeight: '700',
    paddingLeft: 230,
    textAlign: 'right',
  },

  deliveryAmtchange: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    // textDecorationColor:Colors.dark,
    textDecorationThickness: 4,
    fontSize: 17,
    fontWeight: '700',
    marginLeft: 160,
  },

  deliveryAmt: {
    fontSize: 17,
    color: Colors.dark,
    fontWeight: '700',
    marginLeft: 5,
    textAlign: 'right',
  },

  hairlineWidth: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 15,
  },

  hairlineWidthBottom: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 5,
    color: Colors.light,
  },

  pdtDetail: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10,
  },

  image: {
    height: 52,
    width: 52,
    borderRadius: 12,
  },

  name: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.dark,
  },

  detail: {
    marginLeft: 30,
  },

  paymentContainer: {
    marginTop: 20,
    marginHorizontal: 30,
  },

  orderContainer: {
    flexDirection: 'row',
    marginLeft: 35,
    marginBottom: 10,
    marginTop: 5,
  },

  orderImg: {
    height: 32,
    width: 32,
    marginRight: 25,
  },

  cashBtn: {
    alignItems: 'center',
    width: 70,
    height: 30,
    backgroundColor: Colors.sienna,
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 4,
    borderWidth: 0.5,
  },

  cashTxt: {
    fontSize: 16,
    color: Colors.white,
  },

  optionBtn: {
    justifyContent: 'center',
  },

  option: {
    height: 32,
    width: 32,
    marginLeft: 180,
  },

  orderBtn: {
    alignItems: 'center',
    width: 335,
    height: 55,
    backgroundColor: Colors.sienna,
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 4,
    borderWidth: 0.5,
    marginLeft: 35,
    marginBottom: 10,
  },

  orderBtnTxt: {
    fontSize: 25,
    color: Colors.white,
  },
});

export default Order;
