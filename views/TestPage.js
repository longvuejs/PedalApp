import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
const TestPage = () => {
  const image = [
    // 'https://images2.alphacoders.com/100/1003880.png',
    // 'https://c.wallhere.com/photos/24/39/landscape_sky-1917923.jpg!d',
    // 'https://media5.sgp1.digitaloceanspaces.com/wp-content/uploads/2021/10/13143842/1920X1080-Wallpapers-1024x576.jpg',
    require('../assets/images/imageDetail1.png'),
    require('../assets/images/imageDetail2.png'),
    require('../assets/images/imageDetail3.png'),
    require('../assets/images/imageDetail4.png'),
  ];
  const text = ['Hello Swiper', 'Beautiful', 'And simple'];
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

