import {StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import color from '../../../contains/color'

const LinkComp = () => {
  const nameApp = '1Pedal.com';
  const devideSign = '|';
  const nameLink = 'electro-harmonix';
  const linkAddress = 'https://www.ehx.com/';
  return (
    <View style={styles.centerLink}>
      <TouchableOpacity style={styles.customLink}>
        <Text style={styles.TextLink}>{nameApp}</Text>
        <Icon style={styles.TextLink} name="create-outline" size={18} />
      </TouchableOpacity>
      <Text style={styles.TextLink}> {devideSign} </Text>
      <TouchableOpacity style={styles.customLink}>
        <Text
          style={styles.TextLink}
          onPress={() => Linking.openURL(linkAddress)}>
          {nameLink}
        </Text>
        <Icon style={styles.TextLink} name="create-outline" size={18} />
      </TouchableOpacity>
    </View>
  );
};

export default LinkComp;

const styles = StyleSheet.create({
  centerLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,
  },
  customLink: {
    flexDirection: 'row',
  },
  TextLink: {
    color: color.textBlue,
    paddingHorizontal: 2,
  },
});
