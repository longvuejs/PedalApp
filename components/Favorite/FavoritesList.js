import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

import color from '../../contains/color';

import Icon from 'react-native-vector-icons/Ionicons';

const FavoritesList = () => {
  const favorites = [
    {
      title: 'Grand Canyon',
      image: require('../../assets/images/product/GrandCanyon.png'),
    },
    {
      title: 'Grand Canyon1',
      image: require('../../assets/images/product/GrandCanyon.png'),
    },
    {
      title: 'Grand Canyon2',
      image: require('../../assets/images/product/GrandCanyon.png'),
    },
    {
      title: 'Grand Canyon3',
      image: require('../../assets/images/product/GrandCanyon.png'),
    },
    {
      title: 'Grand Canyon4',
      image: require('../../assets/images/product/GrandCanyon.png'),
    },
    {
      title: 'Grand Canyon4',
      image: require('../../assets/images/product/GrandCanyon.png'),
    },
    {
      title: 'Grand Canyon4',
      image: require('../../assets/images/product/GrandCanyon.png'),
    },
    {
      title: 'Grand Canyon4',
      image: require('../../assets/images/product/GrandCanyon.png'),
    },
    {
      title: 'Grand Canyon4',
      image: require('../../assets/images/product/GrandCanyon.png'),
    },
    {
      title: 'Grand Canyon4',
      image: require('../../assets/images/product/GrandCanyon.png'),
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View style={styles.cardFavorites}>
        <View>
          <Image style={styles.image} source={item.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.rating}>
            <Icon name="star" size={20} color="#f3d270" />
            <Icon name="star" size={20} color="#f3d270" />
            <Icon name="star" size={20} color="#f3d270" />
            <Icon name="star-half" size={20} color="#f3d270" />
            <Text> 4.7 </Text>
            <Text>(1200)</Text>
          </View>
        </View>
        <View>
          <Icon name="heart-circle" size={40} color="red" />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList showsVerticalScrollIndicator={false} data={favorites} renderItem={renderItem} />
    </View>
  );
};

export default FavoritesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 15,
  },
  cardFavorites: {
    backgroundColor: color.textWhite,
    borderRadius: 25,
    height: 130,
    paddingHorizontal: 20,
    shadowColor: '#000',
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: '100%',
  },
  content: {
    width: 190,
  },
  title: {
    fontSize: 20,
    color: color.textBlack,
    fontWeight: '700',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});
