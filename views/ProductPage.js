import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import OptionTool from '../components/Product/Main/OptionTool';
import Banner from '../components/Product/Main/Banner';
import Category from '../components/Product/Main/Category';
import Product from '../components/Product/Main/Product';

const screen = Dimensions.get('window');
const ProductPage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.optionTool}>
        <OptionTool />
      </View>
      <View style={styles.banner}>
        <Banner />
      </View>
      <View style={styles.category}>
        <Category />
      </View>
      <View style={styles.product}>
        <Product />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
  },
  optionTool: {
    height: screen.width*15/100,
    flex: 0.2,
  },
  banner: {
    height: screen.width*50/100,
    flex: 0.5,
  },
  category: {
    height: screen.width*20/100,
    flex: 0.3,
  },
  product: {
    flex: 1,
  },
});
export default ProductPage;
