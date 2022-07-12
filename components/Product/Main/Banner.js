import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import color from '../../../contains/color';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
const windowW = Dimensions.get('window').width;
const Banner = () => {
  const backgroundImage = require('../../../assets/images/banner.png');
  const mainImage = require('../../../assets/images/ImageHone.png');
  const miniText = 'New Release';
  const title = 'Grand Canyon';
  const buttonText = 'See More';
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ImageBackground
          source={backgroundImage}
          style={styles.ImageBackground}
          resizeMode="cover">
          <View style={styles.Productcard}>
            <View style={styles.content}>
              <Text style={styles.miniText}>{miniText}</Text>
              <Text style={styles.title}>{title}</Text>
              <Pressable
                style={({pressed}) => [
                  {
                    backgroundColor: pressed
                      ? color.textGray
                      : color.textWhite,
                  },
                  styles.button
                ]}>
                <Text style={styles.buttonText}>{buttonText}</Text>
              </Pressable>
            </View>
            <View style={styles.contentImage}>
              <Image
                style={styles.image}
                resizeMode="contain"
                source={mainImage}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  ImageBackground: {
    flex: 1,
  },
  Productcard: {
    flex: 1,
    flexDirection: 'row',
    height: 200,
  },
  card: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
  content: {
    width: (windowW * 40) / 100,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  contentImage: {
    width: (windowW * 55) / 100,
    justifyContent: 'center',
    paddingRight: 10,
  },
  image: {
    width: '100%',
  },
  miniText: {
    color: color.textWhite,
    fontSize: 15,
  },
  title: {
    color: color.textWhite,
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 8,
  },
  button: {
    color: color.textBlack,
    borderRadius: 20,
    fontSize: 15,
    paddingVertical: 6,
    width: '80%',
    fontWeight: '700',
  },
  buttonText:{
    color: color.textBlack,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '700',
  }
});

export default Banner;
