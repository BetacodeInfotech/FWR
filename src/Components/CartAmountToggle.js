import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React ,{useState}from 'react'

const CartAmountToggle = () => {
    const [amount, setAmount] = useState(1);

    return (
        <View style={styles.incDec}>
            <TouchableOpacity onPress={() => amount > 1 ? setAmount (amount -1 ) : setAmount(1)}>
                <Image source={require('../Assets/Images/order/D.png')} style={styles.ImgD} />
            </TouchableOpacity>
            <Text style={styles.amount}>{amount}</Text>
            <TouchableOpacity onPress={() => amount < 10 ? setAmount (amount +1 ) : setAmount(10)}>
                <Image source={require('../Assets/Images/order/C.png')} style={styles.ImgC} />
            </TouchableOpacity>
        </View>
    )
}

export default CartAmountToggle

const styles = StyleSheet.create({

    incDec: {
        flexDirection: 'row',
        marginLeft: 50,
        marginTop:8,
    },

    ImgC: {
        height: 32,
        width: 32,
        marginLeft:8,
    },

    ImgD: {
        height: 32,
        width: 32,
        marginRight:5,
    },

    amount:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        fontSize:20,
    }
})