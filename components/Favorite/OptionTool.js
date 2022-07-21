import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';

import color from '../../contains/color';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {productSelector} from '../../redux/reducers/selectors';
import Icon from 'react-native-vector-icons/Ionicons';

const OptionTool = () => {
  const navigation = useNavigation();
  const dataState = useSelector(productSelector);
  const dataListPedal = dataState.ListPedal;
  const ListLove = dataListPedal.filter(item => item.isLove === true);
  return (
    <View style={styles.container}>
      <View style={styles.OptionTool}>
        <Icon
          name={'menu'}
          size={30}
          color={'black'}
          onPress={() => navigation.openDrawer()}
        />
        <Text style={styles.title}>Favorites</Text>
        <Image
          style={styles.accountImg}
          source={require('../../assets/images/avatarAccount.png')}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.miniText}> Find your </Text>
        <Text style={styles.Text}> Favorite Pedal </Text>
      </View>
      <Pressable onPress={() => navigation.navigate('SearchPage',{
        namePage: 'Favorite',
        data: ListLove
      })}>
        <View style={styles.search}>
          <Icon
            style={styles.icon}
            name="search"
            size={23}
            color={color.textBlack1}
          />
          <View style={styles.input}>
            <Text style={{color: color.textBlack}}>What are you looking for?</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default OptionTool;

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    backgroundColor: color.textWhite,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 1,
  },
  OptionTool: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    color: color.textBlack,
    fontWeight: '700',
    letterSpacing: 2,
  },
  content: {
    marginVertical: 5,
  },
  miniText: {
    fontSize: 20,
    color: color.textBlack1,
    fontWeight: '700',
  },
  Text: {
    fontSize: 24,
    color: color.textBlack,
    fontWeight: '700',
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  input: {
    backgroundColor: color.textWhite1,
    borderWidth: 1,
    borderColor: color.textWhite1,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    height: 55,
    width: '83%',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  icon: {
    backgroundColor: color.textWhite1,
    padding: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  accountImg: {
    height: 45,
    width: 45,
  },
});
