import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './screens/Home';
import Employees from './screens/Employees';
import Profile from './screens/Profile';

const Router = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    Employees: {
      screen: Employees,
      navigationOptions: {
        headerTitle: 'Employees',
        headerTintColor: '#F79520',
        headerTitleStyle: {
          color: 'white',
        },
        headerTitleContainerStyle: {
          backgroundColor: 'rgba(47, 53, 66,1.0)',
          alignSelf: 'center',
        },
        headerLeftContainerStyle: {
          backgroundColor: 'rgba(47, 53, 66,1.0)',
          color: 'white',
        },
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        headerTitle: 'Profile',
        headerTintColor: '#F79520',
        headerTitleStyle: {
          color: 'white',
        },
        headerTitleContainerStyle: {
          backgroundColor: 'rgba(47, 53, 66,1.0)',
          alignSelf: 'center',
        },
        headerLeftContainerStyle: {
          backgroundColor: 'rgba(47, 53, 66,1.0)',
          color: 'white',
        },
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(Router);
