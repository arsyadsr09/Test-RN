import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './screens/Home';
import {Image} from 'react-native';
import React from 'react';

const Router = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: (
          <Image
            style={{width: 100, resizeMode: 'contain'}}
            source={require('./assets/toffin_logo.png')}
          />
        ),
        headerTitleContainerStyle: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(Router);
