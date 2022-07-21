//react library
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';

//react navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

//components
import CustomDrawer from './components/Drawer/CustomDrawer';
import HomePage from './views/HomePage';
import ProductPage from './views/ProductPage';
import DetailPage from './views/DetailPage';
import FavoritePage from './views/FavoritePage';
import SearchPage from './views/SearchPage';
import TestPage from './views/TestPage';
import CarouselView from './components/Product/Detail/CarouselView';
import {enableFreeze} from 'react-native-screens';

enableFreeze(true);

//Icon
import Icon from 'react-native-vector-icons/Ionicons';
const Drawer = createDrawerNavigator();

const DrawerContainer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
      }}
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen
          name="Home"
          component={HomePage}
          options={{
            drawerIcon: ({color}) => (
              <Icon name="home-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Product"
          component={ProductPage}
          options={{
            drawerIcon: ({color}) => (
              <Icon name="cart-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Favorite"
          component={FavoritePage}
          options={{
            drawerIcon: ({color}) => (
              <Icon name="heart-outline" size={22} color={color} />
            ),
          }}
        />
      </Drawer.Group>
    </Drawer.Navigator>
  );
};

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="drawer"
              component={DrawerContainer}
            />
            <Stack.Screen name="Details" component={DetailPage} />
            <Stack.Screen name="Test" component={TestPage} />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="CarouselView"
              component={CarouselView}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="SearchPage"
              component={SearchPage}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
