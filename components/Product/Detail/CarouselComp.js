import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import color from '../../../contains/color';
import {useNavigation} from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const CarouselComp = props => {
  const navigation = useNavigation();

  return (
    <Swiper
      style={{height: 250}}
      dot={
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
      activeDot={
        <View
          style={{
            backgroundColor: color.textGray,
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
      {props.images.map((item, index) => {
        return (
          <Pressable
            onPress={() =>
              navigation.navigate('CarouselView', {
                img: props.images,
              })
            }
            key={index}>
            <Image
              style={{height: 250, width: '100%'}}
              source={{uri: item.img}}
            />
          </Pressable>
        );
      })}
    </Swiper>
  );
};

const styles = StyleSheet.create({});
export default CarouselComp;
