import React from 'react';
import styled from 'styled-components';
import { signInAPI, logOutAPI, signInCheckAPI, enrollmentAPI } from '../../api';
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import axios from 'axios';

function SignIn() {
  const { handleSubmit, register, errors } = useForm();

  const submitAPI = async ({ email, password }) => {
    console.log('PARAM : ', email, ',    ', password);
    const inResponse = await signInAPI({ email, password });
    console.log('signInAPI Response : ', inResponse);
    Cookies.set('access-token', inResponse);
  };

  const doLogOut = async () => {
    axios.defaults.headers.common['Authorization'] = '';
    console.log('User Logout completed');
  };

  const doSignInCheck = async () => {
    const checkResponse = await signInCheckAPI();
    console.log('signInCheckAPI response : ', checkResponse);
  };

  const doEnrollment = async () => {
    const enrollResponse = await enrollmentAPI();
    console.log('enrollmentAPI response : ', enrollResponse);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(submitAPI)}>
        <fieldset>
          <legend>로그인</legend>
          <div className="column">
            <label htmlFor="email">이메일</label>
            <input
              type="text"
              id="email"
              name="email"
              ref={register({
                required: '필수 입력사항 입니다.',
              })}
              placeholder="이메일을 입력해주세요"
            />
            <p className="notice">
              {errors.email && '오류: 필수 입력사항입니다.'}
            </p>
          </div>
          <div className="column">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              ref={register({
                required: '필수 입력사항 입니다.',
              })}
              placeholder="비밀번호를 입력해주세요"
            />
          </div>
        </fieldset>
        <button type="submit" className="submit-btn">
          확인
        </button>
      </form>
      <button onClick={doLogOut}>로그아웃</button>
      <button onClick={doSignInCheck}>로그인 확인하기</button>
      <button onClick={doEnrollment}>Enrollment</button>
    </Container>
  );
}

const Container = styled.div``;

export default SignIn;
