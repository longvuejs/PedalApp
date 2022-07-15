import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';

import OptionTool from '../components/Favorite/OptionTool';
import SearchComp from '../components/Favorite/SearchComp';
import FavoritesList from '../components/Favorite/FavoritesList';

import color from '../contains/color';

const windowH = Dimensions.get('window').height;


const FavoritePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.OptionTool}>
          <OptionTool />
        </View>
        <View style={styles.Search}>
          <SearchComp />
        </View>
        <View style={styles.FavoritesList}>
          <FavoritesList />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FavoritePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2f7',
  },
  OptionTool: {
    height: '10%',
  },
  Search: {
    height: '6%',
    justifyContent: 'center',
  },
  FavoritesList: {
    height: '84%',
  },
});
