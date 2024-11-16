import axios from 'axios';
import Constants from '../constants';
import StorageService from '../utils/storage';

export const login = async ({username, password}: any) => {
  try {
    console.log('calling api', {username, password});

    const response = await axios.post(
      Constants.BASE_URL + '/users/login',
      {},
      {
        auth: {
          username: username,
          password: password,
        },
      },
    );

    await StorageService.storeData('auth_token', response?.data?.data?.token);

    return response?.data?.data;
  } catch (err) {
    throw err;
  }
};

export const logout = async () => {
  try {
    const authToken = await StorageService.getData('auth_token', null);

    if(!authToken) {
      return false;
    }

    console.log(authToken);

    const response = await axios.post(
      Constants.BASE_URL + '/users/logout',
      {},
      {
        headers: {
          Authorization: 'Bearer ' + authToken,
          'Content-Type': 'application/json',
        },
      },
    );

    console.log(response);

    return response;
  } catch (err) {
    throw err;
  }
};
