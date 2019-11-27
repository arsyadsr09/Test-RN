// Import React
import React, {useEffect, useCallback} from 'react';
// Import react-redux
import {useSelector, useDispatch} from 'react-redux';
// Import RNCamera
import {RNCamera} from 'react-native-camera';
// Import Component RN
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';

import Autocomplete from 'react-native-autocomplete-input';

//Import FontAwesomeIcon
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera, faSearch} from '@fortawesome/free-solid-svg-icons';

const PendingView = () => (
  <View style={styles.waiting}>
    <Text>Waiting</Text>
  </View>
);

async function takePicture(camera, onChangeUrl, onChangeVisibility) {
  const options = {quality: 0.5, base64: true};
  const data = await camera.takePictureAsync(options);
  onChangeUrl(data.uri);
  onChangeVisibility(false);
}

export default function Profile({initialProps}) {
  // Declare useDispatch
  const dispatch = useDispatch();

  // Hooks
  const [searchData, initSearchData] = React.useState([]);
  const [searchList, onChangeListStatus] = React.useState(false);
  const [searchValue, onChangeSearch] = React.useState('');
  const [nameValue, onChangeName] = React.useState('');
  const [ageValue, onChangeAge] = React.useState(0);
  const [salaryValue, onChangeSalary] = React.useState('');

  const [cameraUrl, onChangeCameraUrl] = React.useState(null);
  const [cameraVisible, onChangeCameraVisible] = React.useState(false);

  // Filter Data
  function filterSuggestion(query) {
    if (query === '') {
      return [];
    }

    const regex = new RegExp(`${query.trim()}`, 'i');
    return searchData.filter(item => item.name.search(regex) >= 0);
  }

  // Dispatch GET_USERS
  // const getAllUsers = useCallback(() => dispatch({type: 'GET_USERS'}), [
  //   dispatch,
  // ]);
  // Redux State Users
  const users = useSelector(state => state.usersReducers.list.data);

  //Declare Data
  const data = filterSuggestion(searchValue);

  // useEffect
  useEffect(() => {
    // getAllUsers();
    initSearchData([
      {name: 'Gatot', age: 28, salary: 1500000},
      {name: 'Sunka', age: 28, salary: 1500000},
      {name: 'Suika', age: 28, salary: 1500000},
    ]);
  }, []);

  return cameraVisible ? (
    <RNCamera
      style={styles.preview}
      type={RNCamera.Constants.Type.back}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
      androidRecordAudioPermissionOptions={{
        title: 'Permission to use audio recording',
        message: 'We need your permission to use your audio',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}>
      {({camera, status}) => {
        if (status !== 'READY') {
          return <PendingView />;
        } else {
          return (
            <View style={styles.btnCamera}>
              <TouchableOpacity
                style={styles.buttonCamera}
                color="rgba(47, 53, 66,1.0)"
                onPress={() =>
                  takePicture(camera, onChangeCameraUrl, onChangeCameraVisible)
                }>
                <FontAwesomeIcon icon={faCamera} size={40} color={'white'} />
              </TouchableOpacity>
            </View>
          );
        }
      }}
    </RNCamera>
  ) : (
    <ScrollView contentContainerStyle={styles.body}>
      <View style={styles.imageEditor}>
        <Image
          style={styles.image}
          source={
            cameraUrl != null
              ? {uri: `${cameraUrl}`}
              : require('../assets/placeholder.jpg')
          }
        />
        <View style={styles.shellButtonCamera}>
          <TouchableHighlight
            style={styles.buttonCamera}
            color="rgba(47, 53, 66,1.0)"
            onPress={() => onChangeCameraVisible(true)}>
            <FontAwesomeIcon icon={faCamera} color={'white'} />
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.autoCompleteBox}>
        <Text>Search Employees</Text>
        <Autocomplete
          data={data}
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autoCompleteBox}
          inputContainerStyle={{borderRadius: 10, marginTop: 5}}
          defaultValue={searchValue}
          onChangeText={text => onChangeSearch(text)}
          renderItem={({item, i}) => (
            <TouchableOpacity
              key={i}
              style={styles.listSuggestions}
              onPress={
                (() => onChangeSearch(item.name),
                onChangeName(item.name),
                onChangeAge(item.age),
                onChangeSalary(item.salary))
              }>
              <FontAwesomeIcon icon={faSearch} color={'grey'} />
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.group}>
        <View style={styles.inputGroup}>
          <Text>Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => onChangeName(text)}
            value={nameValue}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text>Age</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => onChangeAge(text)}
            keyboardType="number-pad"
            value={ageValue}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text>Salary</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => onChangeSalary(text)}
            keyboardType="number-pad"
            value={salaryValue}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    height: '100%',
    width: '100%',
    paddingTop: 25,
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageEditor: {
    width: 150,
    height: 150,
    borderRadius: 150,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150,
    resizeMode: 'cover',
  },
  shellButtonCamera: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(47, 53, 66,1.0)',
    width: 45,
    height: 45,
    borderRadius: 45,
  },
  buttonCamera: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    borderRadius: 45,
    color: 'blue',
  },
  autoCompleteBox: {
    width: '100%',
    minHeight: 50,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  btnCamera: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  waiting: {
    flex: 1,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listSuggestions: {
    width: '100%',
    minHeight: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  itemText: {
    paddingHorizontal: 10,
  },
  group: {
    marginTop: 100,
    width: '100%',
  },
  inputGroup: {marginTop: 10, width: '100%'},
  textInput: {
    marginTop: 5,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    borderRadius: 10,
  },
});
