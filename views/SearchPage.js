import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OptionTools from '../components/Search/OptionTools';
import SearchComp from '../components/Search/SearchComp';
const SearchPage = props => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
      enabled={false}>
      <View style={styles.container}>
        <View style={{height: '10%'}}>
          <OptionTools />
        </View>
        <View style={{height: '90%'}}>
          <SearchComp data={props.route.params} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   paddingHorizontal: 15,
    //  paddingTop: 15
    height: '100%',
  },
});
