import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {productSelector} from '../../../redux/reducers/selectors';
import AsyncStorage from '@react-native-async-storage/async-storage';

import color from '../../../contains/color';
import {useDispatch} from 'react-redux';
import {updateLove} from '../../../redux/actions/updateActions';
const VoteComp = props => {
  const ListPedalData = useSelector(productSelector);
  const dispatch = useDispatch();
  const ratingNumber = '5.0';
  const ratingReview = '(1120 Reviews)';
  const [love, setLove] = useState(
    ListPedalData.ListPedal.find(item => item.id === props.dataVoteComp.id)
      ?.isLove,
  );

  const handleLove = () => {
    const newLove = !love;
    dispatch(
      updateLove({
        id: props.dataVoteComp.id,
        isLove: newLove,
      }),
    );
    setLove(newLove);

    const newArr = [...ListPedalData.ListPedal];
    const ListLoveStorage = newArr.map(item => {
      return {id: item.id, isLove: item.id===props.dataVoteComp.id ? newLove : item.isLove};
    });
    AsyncStorage.setItem('ListLoveStorage', JSON.stringify(ListLoveStorage));
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
