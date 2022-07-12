//react library
import {StyleSheet, View, ImageBackground, Dimensions} from 'react-native';
import React from 'react';

//react navigation

//custom color

//data source
const backgroundImage = require('../assets/images/HomePage.png');

//Components
import ImageComp from '../components/Home/ImageComp';
import ContentComp from '../components/Home/ContentComp';
import ButtonComp from '../components/Home/ButtonComp';

//Dimensions
const windowH = Dimensions.get('window').height;

const HomePage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.ImageBackground}>
        <View style={styles.top}>
          <ImageComp />
        </View>
        <View style={styles.bottom}>
          <ContentComp />
          <ButtonComp />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  top: {
    height: (windowH * 55) / 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    height: (windowH * 45) / 100,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
export default HomePage;
