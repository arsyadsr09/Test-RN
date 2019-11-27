import React from 'react';
import {useNavigation} from 'react-navigation-hooks';
import {View, StyleSheet, Text, TouchableHighlight, Image} from 'react-native';

//Import FontAwesomeIcon
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUserPlus, faUsers, faCogs} from '@fortawesome/free-solid-svg-icons';

import {FloatingAction} from 'react-native-floating-action';

export default function Home() {
  //Navigate
  const {navigate} = useNavigation();

  // State Menu
  const [menu] = React.useState([
    {
      title: 'View All Employees',
      navigate: () => navigate('Employees'),
      icon: faUsers,
      color: '#F79520',
    },
    {
      title: 'Settings',
      navigate: () => navigate('Profile'),
      icon: faCogs,
      color: '#F79520',
    },
  ]);

  // State Actions
  const [actions] = React.useState([
    {
      text: 'New Employee',
      icon: <FontAwesomeIcon icon={faUserPlus} color={'white'} />,
      name: 'bt_accessibility',
      textBackground: 'rgba(0, 0, 0, 0)',
      textElevation: 0,
      textColor: 'white',
      color: '#F79520',
    },
  ]);

  return (
    <View style={styles.body}>
      <Image
        style={styles.logo}
        source={require('../assets/toffin_logo.png')}
      />
      <View style={styles.container}>
        {menu.map((item, i) => (
          <TouchableHighlight
            underlayColor={item.color}
            key={i}
            style={styles.touchableCustom}
            onPress={item.navigate}>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                backgroundColor: item.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                minHeight: 150,
                borderRadius: 12,
              }}>
              <View style={styles.column}>
                <FontAwesomeIcon
                  size={50}
                  icon={item.icon}
                  color="rgba(47, 53, 66,1.0)"
                />
                <Text style={styles.titleMenu}>{item.title}</Text>
              </View>
            </View>
          </TouchableHighlight>
        ))}
      </View>
      <FloatingAction
        actions={actions}
        onPressItem={name => {
          console.log(`selected button: ${name}`);
        }}
        color="#F79520"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    height: '100%',
    paddingTop: 25,
  },
  logo: {
    alignSelf: 'center',
    width: 200,
    height: 80,
    resizeMode: 'contain',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  touchableCustom: {
    width: '50%',
    padding: 3,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleMenu: {
    marginTop: 10,
    color: 'rgba(47, 53, 66,1.0)',
  },
});
