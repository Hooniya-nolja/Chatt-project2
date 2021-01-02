import axios from 'axios';
import qs from 'qs';

export const signInAPI = async ({ email, password }) => {
  const signInUrl = 'http://chatt.ngrok.io/api/user/login/';
  const params = qs.stringify({
    username: email,
    password: password,
  });
  console.log('PARAM stringified : ', params);
  try {
    const response = await axios.post(signInUrl, params);
    return response;
  } catch (error) {
    console.log('*##***##**signInAPI Error : ', error);
  }
};

export const signInCheckAPI = async () => {
  const signInCheckUrl = 'http://chatt.ngrok.io/api/user/check-authentication/';
  try {
    const response = await axios.get(signInCheckUrl);
    return response;
  } catch (error) {
    console.log('*##***##**signInCheckAPI Error : ', error);
  }
};

export const enrollmentAPI = async () => {
  const enrollmentUrl = 'http://chatt.ngrok.io/api/user/enrollments/';
  try {
    const response = await axios.get(enrollmentUrl);
    return response;
  } catch (error) {
    console.log('*##***##**enrollmentAPI Error : ', error);
  }
};

export const logOutAPI = async () => {
  const logOutUrl = 'http://chatt.ngrok.io/api/user/logout/';
  try {
    const response = await axios.get(logOutUrl);
    return response;
  } catch (error) {
    console.log('*##***##**logOutAPI Error : ', error);
  }
};
