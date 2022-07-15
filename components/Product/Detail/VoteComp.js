import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import color from '../../../contains/color';

const VoteComp = props => {
  const ratingNumber = '5.0';
  const ratingReview = '(1120 Reviews)';
  const [love, setLove] = useState(false);
  const handleLove = () => {
    const arrGetLove = {...props};
    arrGetLove.isLove = love;
    console.log(arrGetLove.isLove);
    setLove(!love);
  };
 
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View>
        <Text style={styles.title}>{props.dataVoteComp.name}</Text>
        <View style={styles.rating}>
          <Icon color={color.textYellow} name="star" size={25} />
          <Text style={styles.ratingNumber}>{ratingNumber}</Text>
          <Text style={styles.ratingReview}>{ratingReview}</Text>
        </View>
      </View>
      <View>
        <Icon
          onPress={handleLove}
          name={love ? 'heart' : 'heart-outline'}
          color={color.textRed}
          size={40}></Icon>
      </View>
    </View>
  );
};

export default VoteComp;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
  },
  rating: {
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 160,
  },
  ratingNumber: {
    fontWeight: '600',
    color: color.textBlack,
  },
  ratingReview: {
    color: color.textBlack1,
  },
});
