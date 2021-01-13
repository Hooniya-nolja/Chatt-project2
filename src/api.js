import axios from 'axios';
import qs from 'qs';

export const signInAPI = async ({ email, password }) => {
  const signInUrl = 'https://www.chatt-training.com/api/user/login/';
  const params = qs.stringify({
    username: email,
    password: password,
  });
  try {
    const token = await axios.post(signInUrl, params);
    const accessToken = 'Bearer ' + token.data.access;
    axios.defaults.headers.common['Authorization'] = accessToken;
    return accessToken;
  } catch (error) {
    console.log('*##***##**signInAPI Error : ', error);
  }
};

export const signInCheckAPI = async () => {
  const signInCheckUrl = 'https://www.chatt-training.com/api/user/check-authentication/';
  try {
    const response = await axios.get(signInCheckUrl);
    return response;
  } catch (error) {
    console.log('*##***##**signInCheckAPI Error : ', error);
  }
};

export const enrollmentAPI = async () => {
  const enrollmentUrl = 'https://www.chatt-training.com/api/enrollment/history/';
  try {
    const response = await axios.get(enrollmentUrl);
    return response;
  } catch (error) {
    console.log('*##***##**enrollmentAPI Error : ', error);
  }
};

export const courseListAPI = async () => {
  const courseListUrl = 'https://www.chatt-training.com/api/course/weekly/';
  try {
    const response = await axios.get(courseListUrl);
    console.log('API complete !!!!! and response : ', response);
    return response;
  } catch (error) {
    console.log('*##***##**courseListAPI Error : ', error);
  }
}