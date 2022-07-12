//react library
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

//icon
import Icon from 'react-native-vector-icons/Ionicons';

//react nativigation
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1}}>
        <ImageBackground
          source={require('../../assets/images/logoPedal.png')}
          style={{height: 200, width: '100%'}}
        />
        <DrawerItemList {...props} />
        <View style={styles.centerLink}>
          <TouchableOpacity style={styles.customLink}>
            <Text style={styles.TextLink}>1Pedal.com</Text>
            <Icon style={styles.TextLink} name="create-outline" size={18} />
          </TouchableOpacity>
          <Text style={styles.TextLink}> | </Text>
          <TouchableOpacity style={styles.customLink}>
            <Text
              style={styles.TextLink}
              onPress={() => Linking.openURL('https://www.ehx.com/')}>
              electro-harmonix
            </Text>
            <Icon style={styles.TextLink} name="create-outline" size={18} />
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  centerLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,
    flex: 1,
    alignItems: 'flex-end',
    marginBottom: 15,
  },
  customLink: {
    flexDirection: 'row',
  },
  TextLink: {
    color: '#0048e0',
    paddingHorizontal: 2,
  },
});
