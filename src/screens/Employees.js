import React, {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, StyleSheet, Text, ScrollView, RefreshControl} from 'react-native';

import {getUsers} from '../actions/users';

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function Employees() {
  // Declare useDispatch
  const dispatch = useDispatch();
  // Hooks refreshing
  const [refreshing, setRefreshing] = React.useState(false);
  //onRefresh
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshing]);
  // Dispatch GET_USERS
  const getAllUsers = useCallback(() => dispatch(getUsers()), [dispatch]);
  // Redux State Users
  const users = useSelector(state => state.usersReducers.list.data);

  // useEffect
  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  return (
    <ScrollView
      contentContainerStyle={styles.body}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {users.map((item, i) => (
        <View style={styles.listCustom}>
          <Text style={styles.title}>{item['name']}</Text>
          <View style={styles.subtitle}>
            <Text>Age: {item['age']}</Text>
            <Text style={styles.textSalary}>Salary: Rp. {item['salary']}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    height: '100%',
    width: '100%',
    paddingTop: 15,
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(47, 53, 66,1.0)',
  },
  subtitle: {
    paddingTop: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSalary: {
    paddingLeft: 20,
  },
  listCustom: {
    borderRadius: 15,
    width: '100%',
    minHeight: 40,
    backgroundColor: 'rgba(241, 242, 246,1.0)',
    // justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 5,
  },
});
