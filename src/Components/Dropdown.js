import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import Colors from '../Const/Colors';

const Dropdownn = ({data, placeholder, value, onFocus, onBlur, onChange ,containerStye}) => {
  return (
    <View
      style={{...containerStye,...styles.shadow,backgroundColor:Colors.bisque, width: 350,}}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        itemContainerStyle={{marginVertical: -10}}
        containerStyle={{paddingVertical: 5}}
        // iconStyle={styles.iconStyle}
        data={data}
        imageField="image"
        //search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        searchPlaceholder="Search..."
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        // renderLeftIcon={() => (
        //   <AntDesign
        //     style={styles.icon}
        //     color={isFocus ? 'blue' : 'black'}
        //     name="Safety"
        //     size={20}
        //   />
        // )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  labelText: {fontSize: 17, fontWeight: 'bold'},
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 5,
  },

  //dropdown style

  container: {
    height: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 29,

  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  // icon: {
  //   marginRight: 5,
  // },
  label: {
    position: 'absolute',
    backgroundColor:'white',
    // left: 22,
    top: 10,
    // zIndex: 999,
    // paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    paddingHorizontal: 5,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 5,
  },
  // iconStyle: {
  //   width: 20,
  //   height: 20,
  // },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default Dropdownn;
