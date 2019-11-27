// Imports Constant
import {
  GET_USERS,
  CREATE_USER,
  DELETE_USER,
  DETAIL_USER,
} from '../constant/types';

// Imports Providers
import {listUsers} from '../providers/users';

// Get Users
export const getUsers = () => {
  let data = [];
  let total = 0;
  listUsers()
    .then(res => {
      data = Array.from(res);
      total = res.length;
    })
    .catch(err => {
      console.log(`Error GetUsers (Exception => ${err})`);
    });
  console.log(data);
  return {
    type: GET_USERS,
    payload: {
      data: data,
      total: total,
    },
  };
};

// // Get Users
// export const getUsers = data => {
//   return {
//     types: GET_USERS,
//     payload: {
//       data,
//     },
//   };
// };
