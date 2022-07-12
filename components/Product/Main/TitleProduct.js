import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

import color from '../../../contains/color'

const TitleProduct = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.newText}>New Pedal</Text>
      <TouchableOpacity>
        <Text style={styles.seeAll}>See all</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TitleProduct;

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  newText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: color.textBlack,
  },
  seeAll: {
    fontSize: 14,
    fontWeight: '400',
    color: color.textBlack1,
  },
});
