//react library
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Button,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {updateList} from '../redux/actions/updateActions';
import { productSelector } from "../redux/reducers/selectors";
//react navigation

//custom color

//data source
const backgroundImage = require('../assets/images/HomePage.png');

//Components
import ImageComp from '../components/Home/ImageComp';
import ContentComp from '../components/Home/ContentComp';
import ButtonComp from '../components/Home/ButtonComp';

//Dimensions
const windowH = Dimensions.get('window').height;

const HomePage = () => {
  const data2 = useSelector(productSelector)
  data2.ListPedal.map(item => {
    console.log(item.isLove+" "+item.id);
  })
  const dispatch = useDispatch()
  React.useEffect(() => {
    const getData = AsyncStorage.getItem('ListLoveStorage').then(arr => {
      const data = JSON.parse(arr)
      console.log('Homepage',data);
      dispatch(updateList(data))
    })
  }, [])

  return (
    <View style={styles.container}>

      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.ImageBackground}>
        <View style={styles.top}>
          <ImageComp />
        </View>
        <View style={styles.bottom}>
          <ContentComp />
          <ButtonComp />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  top: {
    height: (windowH * 55) / 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    height: (windowH * 45) / 100,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
export default HomePage;
