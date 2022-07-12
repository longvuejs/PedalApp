import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ImageComp = () => {
  const mainImage = require('../../assets/images/ImageHone.png');
  return <Image style={styles.image} resizeMode="contain" source={mainImage} />;
};

export default ImageComp;

const styles = StyleSheet.create({
  image: {
    width: 350,
    opacity: 0.85,
  },
});
