import {HOST} from '../config';
import axios from 'axios';

export const createItem = ({name, age, salary}) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${HOST}/create`, {
        name,
        age,
        salary,
      })
      .then(res => resolve(res.data))
      .catch(err => reject(err.response));
  });

export const listUsers = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${HOST}/employees`)
      .then(res => resolve(res.data))
      .catch(err => reject(err.response));
  });

export const getUserById = id =>
  new Promise((resolve, reject) => {
    axios
      .get(`${HOST}/employees/${id}`)
      .then(res => resolve(res.data))
      .catch(err => reject(err.response));
  });

export const deleteUser = id =>
  new Promise((resolve, reject) => {
    axios
      .delete(`${HOST}/employees/${id}`)
      .then(res => resolve(res.data))
      .catch(err => reject(err.response));
  });
export const updateUser = (id, name, age, salary) =>
  new Promise((resolve, reject) => {
    axios
      .put(`${HOST}/update/${id}`, {
        name,
        age,
        salary,
      })
      .then(res => resolve(res.data))
      .catch(err => reject(err.response));
  });
