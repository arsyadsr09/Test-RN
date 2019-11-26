import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
// import {MdAdd} from '@material-ui/icons';

class Home extends React.Component {
  state = {
    isOpen: false,
  };

  _onPressButtonView() {
    console.log('jajaj');
  }

  render() {
    // const {dummyReducer = {}} = this.props;
    // const {text = ''} = dummyReducer;
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButtonView}>
          <View style={styles.column}>
            <View style={styles.customButton}>
              <Text>Tes</Text>
            </View>
            <Text>View All Employees</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressButtonView}>
          <View style={styles.column}>
            <View style={styles.customButton}>
              {/* <MdAdd /> */}
              <Text>wkwkwk</Text>
            </View>
            <Text>Setting</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  column: {
    display: 'flex',
    // flex: 1,
    flexDirection: 'column',
    // flexWrap: 'wrap',
    alignItems: 'center',
  },
  customButton: {
    backgroundColor: '#ff6348',
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    minHeight: 100,
    marginBottom: 15,
  },
});

// eslint-disable-next-line prettier/prettier
export default connect(({dummyReducer}) => ({dummyReducer}))(Home);
