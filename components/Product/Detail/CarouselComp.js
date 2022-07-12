import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import color from '../../../contains/color';
import {useNavigation} from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const image = [
  require('../../../assets/images/imageDetail1.png'),
  require('../../../assets/images/imageDetail2.png'),
  require('../../../assets/images/imageDetail3.png'),
  require('../../../assets/images/imageDetail4.png'),
];
const CarouselComp = () => {
  const navigation = useNavigation();
  return (


    <Swiper
      style={{height: 250}}
      dot={
        <View
          style={{
            backgroundColor: color.background1,
            width: 8,
            height: 8,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
          }}
        />
      }
      activeDot={
        <View
          style={{
            backgroundColor: color.textBlack1,
            width: 8,
            height: 8,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
          }}
        />
      }
      autoplay
      autoplayTimeout={3}>
      {image.map((item, index) => (
        <Pressable onPress={() => navigation.navigate('CarouselView')} key={index}>
          <Image
            
            style={{height: 250, width: '100%'}}
            source={item}
          />
        </Pressable>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({});
export default CarouselComp;
