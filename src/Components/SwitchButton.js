import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../Const/Colors';
import React, {useState} from 'react';

const SwitchButton = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.switch}>
      <View style={styles.switchBtn}>
        <TouchableOpacity
          onPress={() => setSelectedTab(0)}
          style={{
            backgroundColor: selectedTab == 0 ? Colors.sienna : Colors.light,
            ...styles.touch1,
          }}>
          <Text
            style={{
              color: selectedTab == 0 ? Colors.white : Colors.black,
              ...styles.deliver,
            }}>
            Deliver
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedTab(1)}
          style={{
            backgroundColor: selectedTab == 1 ? Colors.sienna : Colors.light,
            ...styles.touch2,
          }}>
          <Text
            style={{
              color: selectedTab == 1 ? Colors.white : Colors.black,
              ...styles.pickup,
            }}>
            Pick Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SwitchButton;

const styles = StyleSheet.create({
  switch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },

  switchBtn: {
    width: '85%',
    height: 50,
    borderRadius: 15,
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: Colors.light,
  },

  touch1: {
    width: '50%',
    height: 45,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  touch2: {
    width: '50%',
    height: 45,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  deliver: {
    fontSize: 20,
    fontWeight: '500',
  },

  pickup: {
    fontSize: 20,
    fontWeight: '500',
  },
});
