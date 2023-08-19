import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from '../Const/Colors';

const BuyButton = ({Press}) => {
    return (
      <TouchableOpacity 
      activeOpacity={0.8}  
      underlayColor="#DDDDDD" 
      style={styles.BuyBtn}
      onPress={Press}>
          <Text style={styles.BuyNow}> Buy Now </Text>
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({


    BuyBtn:{
        marginLeft: 50,
        alignItems: 'center',
        width:200, 
        height:57, 
        marginRight:7, 
        justifyContent:'center', 
        borderRadius:15,
        backgroundColor:Colors.sienna
    },

    BuyNow:{
        fontSize:20,
        fontWeight:'bold',
        color:Colors.white,
    },


})



export {BuyButton};