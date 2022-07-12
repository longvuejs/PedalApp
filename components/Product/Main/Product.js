import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import TitleProduct from './TitleProduct';

import color from '../../../contains/color'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const windowW = Dimensions.get('window').width;

const Product = () => {
  const navigation = useNavigation();
  const ListPedal = [
    {
      id: 1,
      title: 'Small Stone',
      hashTag: 'New Pedal',
      image: require('../../../assets/images/ImageProduct.png'),
      buttonText: 'Specification',
    },
    {
      id: 2,
      title: 'MEMORY BOY',
      hashTag: 'New Pedal',
      image: require('../../../assets/images/ImageProduct2.png'),
      buttonText: 'Specification',
    },
    {
      id: 3,
      title: 'LESTER G',
      hashTag: 'New Pedal',
      image: require('../../../assets/images/ImageProduct3.png'),
      buttonText: 'Specification',
    },
    {
      id: 4,
      title: '95000',
      hashTag: 'New Pedal',
      image: require('../../../assets/images/ImageProduct4.png'),
      buttonText: 'Specification',
    },
    {
      id: 5,
      title: 'OCEANS 12',
      hashTag: 'New Pedal',
      image: require('../../../assets/images/ImageProduct5.png'),
      buttonText: 'Specification',
    },
    {
      id: 6,
      title: 'MEMORY MAN',
      hashTag: 'New Pedal',
      image: require('../../../assets/images/ImageProduct6.png'),
      buttonText: 'Specification',
    },
  ];

  return (
    <View style={styles.container}>
      <TitleProduct />
      <View style={styles.divideColumns}>
        {ListPedal.map((item, index) => (
          <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? color.opacityPress
                : 'transparent'
            },
            styles.product
          ]}
            
            onPress={() => navigation.navigate('Details')} key={item.id}>
            <View style={[styles.cardProduct, styles.shawdow]}>
              <View style={styles.top}>
                <Image
                  style={styles.image}
                  resizeMode="center"
                  source={item.image}
                />
              </View>
              <View style={styles.bottom}>
                <View style={styles.info}>
                  <Text style={styles.hashTag}>{item.hashTag}</Text>
                  <Text style={styles.nameProduct}>{item.title}</Text>
                </View>
                <TouchableOpacity
                  style={{flex: 1, alignItems: 'center'}}
                  onPress={() => navigation.navigate('Details')}>
                  <View style={styles.button}>
                    <Text style={styles.textButton}>{item.buttonText}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  divideColumns: {
    width: windowW,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  product: {
    width: windowW / 2,
    paddingHorizontal: 15,
  },

  cardProduct: {
    backgroundColor: color.textWhite,
    width: 180,
    height: 230,
    borderRadius: 25,
    overflow: 'hidden',
    shadowColor: '#000',
    elevation: 10,
    marginVertical: 10,
  },
  top: {
    flex: 1.2,
  },
  bottom: {
    flex: 1,
  },
  image: {
    width: '100%',
    flex: 1,
  },
  info: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.background,
    width: '70%',
    marginBottom: 10,
    borderRadius: 30,
  },
  textButton: {
    color: color.textWhite,
    fontWeight: '500',
    fontSize: 12,
  },
  hashTag: {
    color: color.textRed,
    fontWeight: '400',
    fontSize: 15,
    paddingBottom: 3,
  },
  nameProduct: {
    fontSize: 20,
    fontWeight: '500',
    color: color.textBlack,
    textTransform: 'capitalize',
  },
});
export default Product;
