import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import color from '../../../contains/color';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const CarouselView = () => {
  const navigation = useNavigation();
  const image = [
    require('../../../assets/images/imageDetail1.png'),
    require('../../../assets/images/imageDetail2.png'),
    require('../../../assets/images/imageDetail3.png'),
    require('../../../assets/images/imageDetail4.png'),
  ];
  return (
    <View style={styles.container}>
      <Icon
        onPress={() => navigation.goBack()}
        style={{position: 'absolute', top: 10, right: 10}}
        name="close-outline"
        size={35}
        color="white"
      />
      <View
        style={{
          height: 250,
        }}>
        <Swiper
          dot={
            <View
              style={{
                backgroundColor: color.background1,
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 4,
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
            <Image
              key={index}
              style={{height: 250, width: '100%'}}
              source={item}
            />
          ))}
        </Swiper>
      </View>
    </View>
  );
};

export default CarouselView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
