import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

import color from '../../contains/color';

import Icon from 'react-native-vector-icons/Ionicons';

const screen = Dimensions.get('window');
const AnimatedView = Animated.createAnimatedComponent(View);

const SearchComp = props => {
  const translateY = useSharedValue(0);

  const height_ = useSharedValue(0);

  const onFocus = () => {
    translateY.value = withTiming(-60, {duration: 1000}, () => {
      height_.value = withTiming(screen.height * 0.9, {duration: 500});
    });
  };

  const onBlur = () => {
    height_.value = withTiming(
      0,
      {
        duration: 500,
      },
      () => {
        translateY.value = withTiming(0, {duration: 1000});
      },
    );
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  const showViewAnimation = useAnimatedStyle(() => {
    return {
      height: height_.value,
    };
  });

  const [number, onChangeNumber] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Icon
          style={styles.icon}
          name="search"
          size={23}
          color={color.textBlack1}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Search"
        />
      </View>
      <AnimatedView
        style={[
          {
            backgroundColor: color.textGray,
            transform: [{translateY: -60}],
            width: screen.width,
          },
          showViewAnimation,
        ]}
      />
    </View>
  );
};

export default SearchComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: color.textGray,
    borderWidth: 1,
    borderColor: color.textGray,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    height: 55,
    width: '80%',
    padding: 10,
  },
  icon: {
    backgroundColor: color.textGray,
    padding: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
});
