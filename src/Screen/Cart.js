import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../Const/Colors';
import {TextInput} from 'react-native-paper';
import Dropdown from '../Components/Dropdown';
import DocumentPicker from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('screen');

const Resturant = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [resturantName, setResturantName] = useState(null);
  const [price, setPrice] = useState('');

  const data = [
    {
      label: 'Resturant 1',
      value: 'Resturant 1',
      image: '../Assets/Images/resturant/rest1',
    },
    {
      label: 'Resturant 2',
      value: 'Resturant 2',
      image: '../Assets/Images/resturant/rest2',
    },
    {
      label: 'Resturant 3',
      value: 'Resturant 3',
      image: '../Assets/Images/resturant/rest3',
    },
  ];

  const [selectedImages, setImages] = useState([]);

  const selectImg = async () => {
    let tempSelectedImages = [...selectedImages];
    try {
      const image = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
        allowMultiSelection: true,
      });

      image.map(val => {
        tempSelectedImages.push({...val});
      });

      setImages(tempSelectedImages);
    } catch (error) {
      if (DocumentPicker.isCancel(error))
        console.log('User cancelled the upload', error);
      else console.log(error);
    }
  };

  const handleImageDelete = index => {
    const newImages = [...selectedImages];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../Assets/Images/resturant/black.jpg')}
        style={styles.wall}>
        <View style={styles.background}>
          <StatusBar
            backgroundColor={'transparent'}
            barStyle="light"
            translucent={true}
          />

          <View style={styles.heading}>
            <Text style={styles.headTxt}>Resturant</Text>
          </View>

          <View style={styles.container1}>
            <Text style={styles.titleTxt}> Enter Title:</Text>
            <TextInput
              center={<TextInput.Icon />}
              mode="outlined"
              style={styles.input}
              value={title}
              onChangeText={setTitle}
            />

            <Text style={styles.titleTxt}>Description:</Text>
            <TextInput
              center={<TextInput.Icon />}
              mode="outlined"
              style={styles.input}
              value={description}
              onChangeText={setDescription}
            />

            <Text style={styles.titleTxt}>Select Resturant:</Text>
            <Dropdown
              data={data}
              containerStye={{
                height: 48,
              }}
              value={resturantName}
              onChange={SelectedValue => {
                setResturantName(SelectedValue);
              }}
            />
            <Text style={styles.titleTxt}>Select Price:</Text>
            <TextInput
              center={<TextInput.Icon />}
              mode="outlined"
              style={styles.input}
              value={price}
              onChangeText={setPrice}
              keyboardType="numeric"
            />

            <TouchableOpacity onPress={selectImg} style={styles.UploadBtn}>
              <Text style={styles.txt}>Upload Images</Text>
            </TouchableOpacity>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.ImgContainer}>
                {selectedImages.map((uri, index) => (
                  <View key={'VIEW' + index}>
                    <Image
                      key={'IMAGE' + index}
                      source={uri}
                      style={styles.image}
                    />

                    <View style={styles.delBtn}>
                      <TouchableOpacity
                        onPress={() => handleImageDelete(index)}>
                        <Icon
                          name="highlight-remove"
                          size={25}
                          key={'ICON' + index}
                          style={styles.cross}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
              <View></View>
            </ScrollView>
            <TouchableOpacity style={styles.SubmitBtn}>
              <Text style={styles.SubmitBtnTxt}> Submit </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Resturant;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    marginTop: 40,
    alignItems: 'center',
  },

  ImgContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
  },

  txt: {
    fontSize: 20,
    color: Colors.white,
  },

  cross: {
    color: Colors.white,
  },

  delBtn: {
    position: 'absolute',
    top: 5,
    right: 5,
  },

  headTxt: {
    fontSize: 28,
    color: Colors.white,
  },

  container1: {
    alignItems: 'center',
  },

  titleTxt: {
    marginTop: 30,
    color: Colors.light,
    fontSize: 20,
  },

  input: {
    width: 350,
    backgroundColor: Colors.bisque,
  },

  wall: {
    height: height,
    width: width,
  },

  Dropinput: {
    width: 250,
    backgroundColor: Colors.bisque,
  },

  UploadBtn: {
    alignItems: 'center',
    width: 335,
    height: 55,
    marginTop: 15,
    marginBottom: 20,
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: Colors.sienna,
  },

  image: {
    width: 90,
    height: 90,
    margin: 5,
  },

  SubmitBtn: {
    alignItems: 'center',
    width: 335,
    height: 55,
    marginTop: 20,
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: Colors.sienna,
  },

  SubmitBtnTxt: {
    fontSize: 20,
    color: Colors.white,
  },
});
