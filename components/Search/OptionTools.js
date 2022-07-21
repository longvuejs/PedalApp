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

import {useNavigation} from '@react-navigation/native';
import color from '../../contains/color';
import Icon from 'react-native-vector-icons/Ionicons';

const OptionTools = props => {
  const navigation = useNavigation();
  const [number, onChangeNumber] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.OptionTool}>
        <Icon
          name={'arrow-back-outline'}
          size={30}
          color={'black'}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          autoFocus={true}
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="What are you looking for?"
          placeholderTextColor={color.textBlack}
        />
      </View>
    </View>
  );
};

export default OptionTools;

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    backgroundColor: color.textWhite,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  OptionTool: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    color: color.textBlack,
    fontWeight: '700',
    letterSpacing: 2,
  },
  input: {
    backgroundColor: color.textWhite,
    borderWidth: 1,
    borderColor: color.textWhite,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    height: 55,
    width: '100%',
    padding: 10,
  },
  icon: {
    backgroundColor: color.textWhite1,
    padding: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  
});
