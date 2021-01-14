import React, { useEffect } from 'react';
import styled from 'styled-components';
import { signInAPI, signInCheckAPI, enrollmentAPI } from '../../api';
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import axios from 'axios';
import NAVER_ICON from '../icon/naver_icon.png';
import FACEBOOK_ICON from '../icon/facebook_icon.png';
import KAKAO_ICON from '../icon/kakao_icon.png';

import Header from '../Header';

const userURL = 'https://www.chatt-training.com/api/user/information/';

function SignIn({ history }) {
  const { handleSubmit, register, errors } = useForm();

  const submitAPI = async ({ email, password }) => {
    console.log('PARAM : ', email, ',    ', password);
    const inResponse = await signInAPI({ email, password });
    console.log('signInAPI Response : ', inResponse);
    Cookies.set('access-token', inResponse);
    const { data } = await axios.get(userURL);
    Cookies.set('user', data);
    if (inResponse) {
      history.push('/');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <HeaderContainer />
      <Header beforeUrl={'/myPage'} pageTitle={'로그인'} goBackButton />
      <LoginForm onSubmit={handleSubmit(submitAPI)}>
        <Column className="column">
          <label htmlFor="email"></label>
          <UsernameInput
            type="text"
            id="email"
            name="email"
            ref={register({
              required: '필수 입력사항 입니다.',
            })}
            placeholder="아이디"
          />
        </Column>
        <ErrorNotice className="notice">
          {errors.email && '아이디를 입력하십시오.'}
        </ErrorNotice>
        <Column className="column">
          <label htmlFor="password"></label>
          <PasswordInput
            type="password"
            id="password"
            name="password"
            ref={register({
              required: '필수 입력사항 입니다.',
            })}
            placeholder="비밀번호"
          />
        </Column>
        <ErrorNotice className="notice">
          {errors.password && '비밀번호를 입력하십시오.'}
        </ErrorNotice>
        <LoginButton type="submit" className="submit-btn">
          로그인
        </LoginButton>
      </LoginForm>
      <SimpleLoginText>
        <TwoLine />
        간편 로그인
        <TwoLine />
      </SimpleLoginText>
      <SNSIconContainer>
        <SNSIcon src={NAVER_ICON} />
        <SNSIcon src={FACEBOOK_ICON} />
        <SNSIcon src={KAKAO_ICON} />
      </SNSIconContainer>
      <OneLine />
      <Footer>
        아이디 찾기
        <VerticalLine />
        비밀번호 찾기
        <VerticalLine />
        회원가입
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  ${'' /* padding-bottom: 80px; */}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  width: 100%;
  ${'' /* height: 54px; */}
  ${'' /* height: 40%; */}
  padding: 0 0 65px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
`;

const UsernameInput = styled.input`
  font-size: 20px;
  :: placeholder {
    font-size: 17px;
  }
  padding-left: 15px;
  width: calc(100% - 50px);
  height: 56px;
  margin: 60px 0px 4px;
  border-radius: 8px;
  border: none;
  background-color: rgba(60, 80, 165, 0.1);
`;

const PasswordInput = styled.input`
  font-size: 20px;
  :: placeholder {
    font-size: 17px;
  }
  width: calc(100% - 50px);
  padding-left: 15px;
  height: 56px;
  margin: 10px 16px 3px;
  border-radius: 8px;
  border: none;
  background-color: rgba(60, 80, 165, 0.1);
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const LoginForm = styled.form`
  width: 100%;
  height: 350px;
`;

const LoginButton = styled.button`
  width: 91%;
  height: 56px;
  margin: 28px 16px 64px;
  border-radius: 100px;
  background-color: #3c50a5;
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  text-align: center;
  color: #ffffff;
`;

const SimpleLoginText = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  ${'' /* height: 24px; */}
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: #828282;
`;

const TwoLine = styled.hr`
  width: 32%;
  height: 4px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid gray;
`;

const SNSIconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SNSIcon = styled.img`
  width: 56px;
  height: 56px;
  margin: 32px 22px 95px 18px;
  object-fit: contain;
`;

const OneLine = styled.hr`
  width: 92%;
  height: 4px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid gray;
  margin-bottom: 35px;
`;

const Footer = styled.div`
  display: flex;
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: #828282;
  padding-bottom: 40%;
`;

const VerticalLine = styled.div`
  border-left: 1.3px solid gray;
  height: 25px;
  margin: 0 15px 0 15px;
`;

const ErrorNotice = styled.p`
  margin: 0 0 0 25px;
  color: red;
`;

export default SignIn;
