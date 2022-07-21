import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import color from '../../../contains/color';

const listCategory = [
  {
    title: 'Type Effect',
    image: require('../../../assets/images/category1.png'),
  },
  {title: 'Circuit', image: require('../../../assets/images/category2.png')},
  {title: 'Bypass', image: require('../../../assets/images/category3.png')},
  {title: 'Audio', image: require('../../../assets/images/category4.png')},
];
const Category = () => {
  const [selectCategoryIndex, setSelectCategoryIndex] = useState(0);
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {listCategory.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectCategoryIndex(index)}
            style={{
              backgroundColor:
                selectCategoryIndex == index
                  ? color.background
                  : color.background1,
              ...styles.list,
            }}>
            <View style={styles.tinyLogo}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={item.image}
              />
            </View>
            <Text
              style={{
                color:
                  selectCategoryIndex == index
                    ? color.textWhite
                    : color.textBlack1,
                ...styles.nameCategory,
              }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    alignItems: 'center',
    marginTop: 20,
  },
  list: {
    paddingVertical: 12,
    borderRadius: 30,
    marginLeft: 15,
    height: 60,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  tinyLogo: {
    height: '100%',
    justifyContent: 'center',
  },
  image: {
    height: 50,
    width: 50,
  },
  nameCategory: {
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
    paddingLeft: 15,
    paddingRight: 10,
  },
});
export default Category;
