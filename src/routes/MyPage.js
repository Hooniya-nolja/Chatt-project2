import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import LOGIN_PROFILE from '../components/img/로그인_프로필.svg';
import LOGOUT_PROFILE from '../components/img/로그아웃_프로필.svg';
import NEXTICON from '../components/icon/nextIcon.png';

const dataURL = 'https://www.chatt-training.com/api/user/check-authentication/';
const userURL = 'https://www.chatt-training.com/api/user/information/';

function MyPage({ history }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUserFirstName, setCurrentUserFirstName] = useState("");
  const [currentUserLastName, setCurrentUserLastName] = useState("");
  const [currentUserEmail, setCurrentUserEmail] = useState("");

  async function getUserData() {
    let userCookie = Cookies.get('user');
    if (userCookie) {
      const user = JSON.parse(userCookie);
      setIsLoggedIn(true);
      setCurrentUserFirstName(user.first_name);
      setCurrentUserLastName(user.last_name);
      setCurrentUserEmail(user.email);
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    getUserData();
    console.log(isLoggedIn);
  }, []);

  function handleLogInOutButtonClick(isLogin) {
    if (isLogin) {
      axios.defaults.headers.common['Authorization'] = '';
      Cookies.remove('access-token');
      Cookies.remove('user');
      window.location.reload();
    } else {
      history.push('/signIn');
    }
  }

  function linkToPaymentsDetail() {
    if (!Cookies.get('user')) {
      alert('로그인이 필요합니다.');
      history.push('/signIn');
    } else {
      history.push('/paymentDetails');
    }
  }

  return (
    <Container>
      <ContentContainer>
        {!Cookies.get('access-token') && (
          <ProfileContainer>
            <ProfileImg src={LOGOUT_PROFILE} />
            <ProfileContentContainer>
              <ProfileContent_Black>로그인하고</ProfileContent_Black>
              <ProfileContent_Black>시작해보세요!</ProfileContent_Black>
            </ProfileContentContainer>
            <LogInButton onClick={() => handleLogInOutButtonClick(false)}>
              로그인
            </LogInButton>
          </ProfileContainer>
        )}
        {Cookies.get('access-token') && (
          <ProfileContainer>
            <ProfileImg src={LOGIN_PROFILE} />
            <ProfileContentContainer>
              <ProfileContent_Blue>안녕하세요</ProfileContent_Blue>
              <ProfileContentInnerContainer>
                <ProfileContent_Blue>{currentUserLastName}{currentUserFirstName}</ProfileContent_Blue>
                <ProfileContent_Black>님</ProfileContent_Black>
              </ProfileContentInnerContainer>
              <ProfileEmail>{currentUserEmail}</ProfileEmail>
            </ProfileContentContainer>
            <LogOutButton onClick={() => handleLogInOutButtonClick(true)}>
              로그아웃
            </LogOutButton>
          </ProfileContainer>
        )}
        <LightLine />
        <SettingContainer>
          <SettingTitle>사용자 설정</SettingTitle>
          <SettingContentContainer>
            <SettingContent>내 계정/정보 관리</SettingContent>
            <NextIcon src={NEXTICON} />
          </SettingContentContainer>
          {/* <Link to="/paymentDetails"> */}
            <SettingContentContainer onClick={linkToPaymentsDetail}>
              <SettingContent>신청 내역</SettingContent>
              <NextIcon src={NEXTICON} />
            </SettingContentContainer>
          {/* </Link> */}
          <SettingContentContainer>
            <SettingContent>내 강의 내역</SettingContent>
            <NextIcon src={NEXTICON} />
          </SettingContentContainer>
          <SettingContentContainer>
            <SettingContent>내가 찜한 강의</SettingContent>
            <NextIcon src={NEXTICON} />
          </SettingContentContainer>
          <SettingContentContainer>
            <SettingContent>알림</SettingContent>
            <NextIcon src={NEXTICON} />
          </SettingContentContainer>
        </SettingContainer>
        <BoldLine />
        <SettingContainer>
          <SettingTitle>기타 설정</SettingTitle>
          <SettingContentContainer>
            <SettingContent>공지 사항</SettingContent>
            <NextIcon src={NEXTICON} />
          </SettingContentContainer>
          <SettingContentContainer>
            <SettingContent>이벤트</SettingContent>
            <NextIcon src={NEXTICON} />
          </SettingContentContainer>
          <SettingContentContainer>
            <SettingContent>자주 묻는 질문</SettingContent>
            <NextIcon src={NEXTICON} />
          </SettingContentContainer>
          <SettingContentContainer>
            <SettingContent>1:1 문의</SettingContent>
            <NextIcon src={NEXTICON} />
          </SettingContentContainer>
          <SettingContentContainer>
            <SettingContent>서비스 이용 약관</SettingContent>
            <NextIcon src={NEXTICON} />
          </SettingContentContainer>
        </SettingContainer>
      </ContentContainer>
      <BlankSpace />
    </Container>
  );
}

export default MyPage;

const Container = styled.div`
  margin: 8px;
`;
const ContentContainer = styled.div`
  padding-top: 40px;
  margin: 0;
`;
const BlankSpace = styled.div`
  margin-top: 40px;
  position: relative;
  height: 80px;
  background-color: white;
`;
const Line = styled.div`
  width: 100vw;
  background-color: #eeeeee;
  margin: 32px 0 32px 0;
`;
const LightLine = styled(Line)`
  height: 2px;
  position: absolute;
  left: 0;
`;
const BoldLine = styled(Line)`
  height: 8px;
  position: absolute;
  left: 0;
  top: 400px;
`;
const ProfileContainer = styled.div`
  margin-left: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const ProfileImg = styled.img`
  width: 72px;
  height: 72px;
`;
const ProfileContentContainer = styled.div`
  // width: 120px;
  height: 56px;
  position: absolute;
  left: 88px;
  top: 12px;
  display: flex;
  flex-direction: column;
`;
const ProfileContentInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 120px;
`;
const ProfileContent = styled.div`
  // width: 120px;
  font-family: NotoSansKR;
  font-size: 18px;
  font-weight: bold;
  display: inline;
`;
const ProfileContent_Black = styled(ProfileContent)`
  color: #666666;
`;
const ProfileContent_Blue = styled(ProfileContent)`
  color: #3f4fa5;
`;
const ProfileEmail = styled.div`
  font-family: NotoSansKR;
  font-size: 12px;
  color: #bcbcbc;
`;
const LogInOutButton = styled.button`
  position: absolute;
  right: 8px;
  top: 16px;
  width: 63px;
  height: 40px;
  border-radius: 8px;
  color: #ffffff;
  font-family: NotoSansKR;
  font-size: 12px;
  font-weight: bold;
  border: 0;
  outline: 0;
  &: focus {
    border: none;
    outline: none;
  }
`;
const LogInButton = styled(LogInOutButton)`
  background-color: #3f4fa5;
`;
const LogOutButton = styled(LogInOutButton)`
  background-color: #bdbdbd;
`;
const SettingContainer = styled.div`
  margin-top: 72px;
  margin-left: 8px;
`;
const SettingTitle = styled.div`
  font-family: NotoSansKR;
  font-size: 12px;
  font-weight: bold;
  color: #bcbcbc;
  margin: 20px 0 20px 0;
`;
const SettingContent = styled.div`
  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  display: inline;
`;
const SettingContentContainer = styled.div`
  position: relative;
  margin: 16px 0 16px 0;
`;
const NextIcon = styled.img`
  position: absolute;
  right: 0;
`;
