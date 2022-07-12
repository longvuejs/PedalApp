//react library
import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';

//react navigation
import {useNavigation} from '@react-navigation/native';

//color
import color from '../../contains/color';

const ButtonComp = () => {
  const navigation = useNavigation();
  const textButton = 'Discoverry';
  return (
    <Pressable
    style={({ pressed }) => [
      {
        backgroundColor: pressed
          ? color.opacityPress
          : color.background
      },
      styles.button
    ]}
      onPress={() => navigation.navigate('Product')}>
      <Text style={styles.textButton}> {textButton} </Text>
    </Pressable>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    width: '65%',
    borderRadius: 5,
  },
  textButton: {
    fontSize: 19,
    color: color.textWhite,
    textAlign: 'center',
  },
});
