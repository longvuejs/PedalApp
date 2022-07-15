import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
const TestPage = () => {
  return (
    <Swiper
      showsButtons={true}
      paginationStyle={{bottom: 500}}
      autoplay
      autoplayTimeout={1}
      buttonWrapperStyle={{
        top: -250,
        position: 'absolute',
      }}>
      {image.map((item, index) => (
        <Image key={index} style={{height:  250,width: '100%'}} source={item}/>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 250,
  },
  slide1: {},
  text: {},
});

export default TestPage;

