import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {productSelector} from '../../redux/reducers/selectors';
import {useNavigation} from '@react-navigation/native';
import color from '../../contains/color';

import Icon from 'react-native-vector-icons/Ionicons';
import {updateLove} from '../../redux/actions/updateActions';

const FavoritesList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const dataState = useSelector(productSelector);
  const dataListPedal = dataState.ListPedal;
  const ListLove = dataListPedal.filter(item => item.isLove === true);
  const handleLove = (id, isLove) => () => {
    Alert.alert(
      'Remove from favorite',
      'The selected favorite info will be deleted from list. Are you sure you want to delete ?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            dispatch(
              updateLove({
                id: id,
                isLove: !isLove,
              }),
            );
            const newArr = [...dataListPedal];
            const t = newArr.map(item => {
              return {
                id: item.id,
                isLove: id === item.id ? !item.isLove : item.isLove,
              };
            });
            AsyncStorage.setItem('ListLoveStorage', JSON.stringify(t));
          },
        },
      ],
    );
  };
  const renderItem = ({item, index}) => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('Details', {
            ListPedalTmp: ListLove[index],
          })
        }>
        <View style={styles.cardFavorites}>
          <View>
            <Image style={styles.image} source={{uri: item.image[0].img}} />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.rating}>
              <Icon name="star" size={20} color="#f3d270" />
              <Icon name="star" size={20} color="#f3d270" />
              <Icon name="star" size={20} color="#f3d270" />
              <Icon name="star" size={20} color="#f3d270" />
              <Icon name="star-half" size={20} color="#f3d270" />
              <Text> 4.7 </Text>
              <Text>(1200)</Text>
            </View>
          </View>
          <View>
            <Icon
              onPress={handleLove(item.id, item.isLove)}
              name="heart-circle"
              size={40}
              color="red"
            />
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={ListLove}
        renderItem={renderItem}
      />
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
