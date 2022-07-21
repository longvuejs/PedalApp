import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {productSelector} from '../../redux/reducers/selectors';
import {useNavigation} from '@react-navigation/native';
import color from '../../contains/color';
const SearchComp = props => {
  //   props.data.data.map(item => {
  //     console.log(item.id, item.title);
  //   });
//   console.log(props.data.data);
//   console.log(props.data.namePage);
// //   console.log(props);
  const navigation = useNavigation();
  const dataState = useSelector(productSelector);
  const dataListPedal = dataState.ListPedal;
  const ListLove = dataListPedal.filter(item => item.isLove === true);
  const [data, setData] = useState();
  React.useEffect(() => {
    ListLove.map(item => {
      console.log('data List lOVE', item.id, item.title);
    });
    console.log('====================================');
    console.log(props.data.namePage);
    console.log('====================================');
    if (props.data.namePage === 'Favorite') {
      setData(ListLove);
    } else {
      setData(props.data.data);
    }
  }, [dataState]);
  //   data.map(item => {
  //     console.log('DATA Search',item.id, item.title);
  // });

  const renderItem = ({item, index}) => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('Details', {
            ListPedalTmp: props.data.data[index],
          })
        }>
        <View style={styles.cardFavorites}>
          <View>
            <Image style={styles.image} source={{uri: item.image[0].img}} />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>{item.title.toUpperCase()}</Text>
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
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default SearchComp;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
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
