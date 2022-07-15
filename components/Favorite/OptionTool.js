import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import color from '../../contains/color';

import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

const OptionTool = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Icon
        name={'menu'}
        size={30}
        color={'black'}
        onPress={() => navigation.openDrawer()}
      />
      <Text style={styles.title}>Favorites</Text>
      <Image
        style={styles.accountImg}
        source={require('../../assets/images/avatarAccount.png')}></Image>
    </View>
  );
};

export default OptionTool;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  accountImg: {
    height: 45,
    width: 45,
  },
  title: {
    fontSize: 26,
    color: color.textBlack,
    fontWeight: '700',
    letterSpacing: 2,
  },
});
