import {StyleSheet, Text, View, Image, TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import color from '../../../contains/color';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
const CarouselView = props => {
  const images = props.route.params.img;

  const navigation = useNavigation();

  return (
      <Pressable onPress={() => navigation.goBack()} style={styles.container}>
        <Icon
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', top: 10, right: 10}}
          name="close-outline"
          size={35}
          color="white"
        />
                <TouchableWithoutFeedback
          style={{
            height: 250,
          }}>
            <View style={{height: 250}}>
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
            {images.map((item, index) => (
              <Image
                key={index}
                style={{height: 250, width: '100%'}}
                source={{uri: item.img}}
              />
            ))}
          </Swiper>
               </View>

        </TouchableWithoutFeedback>
      </Pressable>
  );
};

export default CarouselView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
