import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import color from '../../contains/color';
const ContentComp = () => {
  const title = 'Live with passion';
  const content1 = 'Model, Trust & Passion';
  const content2 = 'Collection make you love more';
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.slogan}>
        <Text style={styles.content}> {content1} </Text>
        <Text style={styles.content}> {content2} </Text>
      </View>
    </View>
  );
};

export default ContentComp;

const styles = StyleSheet.create({
  title: {
    color: color.textWhite,
    fontSize: 53,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    paddingBottom: 12,
  },
  slogan: {
    paddingBottom: 25,
  },
  content: {
    fontSize: 16,
    textTransform: 'capitalize',
    textAlign: 'center',
    color: color.textGray,
  },
});
