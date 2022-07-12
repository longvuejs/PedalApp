import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons'
const OptionTool = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Icon
        name={"menu"}
        size={30}
        color={"black"}
        onPress={() => navigation.openDrawer()}
      />
      <Icon
        name={"search"}
        size={30}
        color={"black"}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 15,
    },

  });

export default OptionTool;
