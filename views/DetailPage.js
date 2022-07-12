import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';

import CarouselComp from '../components/Product/Detail/CarouselComp';
import VoteComp from '../components/Product/Detail/VoteComp';
import DescriptionComp from '../components/Product/Detail/DescriptionComp';
import SpecificationComp from '../components/Product/Detail/SpecificationComp';
import LinkComp from '../components/Product/Detail/LinkComp';

const DetailPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <CarouselComp />
        </View>
        <View style={styles.detailProduct}>
          <VoteComp />
          <DescriptionComp />
          <SpecificationComp />
          <LinkComp />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  detailProduct: {
    flex: 1.5,
    backgroundColor: '#f8f8f8',
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
