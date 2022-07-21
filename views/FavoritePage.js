import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';
import React from 'react';

import OptionTool from '../components/Favorite/OptionTool';
import FavoritesList from '../components/Favorite/FavoritesList';

import color from '../contains/color';

const windowH = Dimensions.get('window').height;

const FavoritePage = () => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{flex: 1}}
    enabled={false}
  >
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.top}>
          <OptionTool />
        </View>
        <View style={styles.FavoritesList}>
          <FavoritesList />
        </View>
      </View>
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default FavoritePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2f7',
  },
  top: {
    height: '28%'
  },
  FavoritesList: {
    height: '70%',
  },
});
