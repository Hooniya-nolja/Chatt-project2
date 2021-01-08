import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MYPAGEPROFILE from '../components/icon/myPageProfile.png';
import NEXTICON from '../components/icon/nextIcon.png';

<<<<<<< HEAD
function MyPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(0); //추후 수정
  function handleLogInOutButtonClick(event) {
    event.preventDefault();
    setIsLoggedIn(!isLoggedIn);
  }
  return (
    <Container>
      <ContentContainer>
        {isLoggedIn == 0 && (
          <ProfileContainer>
            <ProfileImg src={MYPAGEPROFILE} />
            <ProfileContentContainer>
              <ProfileContent_Black>로그인하고</ProfileContent_Black>
              <ProfileContent_Black>시작해보세요!</ProfileContent_Black>
            </ProfileContentContainer>
            <LogInButton onClick={handleLogInOutButtonClick}>
              로그인
            </LogInButton>
          </ProfileContainer>
        )}
        {isLoggedIn != 0 && (
          <ProfileContainer>
            <ProfileImg src={MYPAGEPROFILE} />
            <ProfileContentContainer>
              <ProfileContent_Blue>안녕하세요</ProfileContent_Blue>
              <ProfileContentInnerContainer>
                <ProfileContent_Blue>조혜빈</ProfileContent_Blue>
                <ProfileContent_Black>님</ProfileContent_Black>
              </ProfileContentInnerContainer>
              <ProfileEmail>binibini0101@gmail.com</ProfileEmail>
            </ProfileContentContainer>
            <LogOutButton onClick={handleLogInOutButtonClick}>
              로그아웃
            </LogOutButton>
          </ProfileContainer>
        )}
        <LightLine />
        <SettingContainer>
          <SettingTitle>사용자 설정</SettingTitle>
          <SettingContent>내 계정/정보 관리</SettingContent>
          <SettingContent>결제 내역</SettingContent>
          <SettingContent>내 강의 내역</SettingContent>
          <SettingContent>내가 찜한 강의</SettingContent>
          <SettingContent>알림</SettingContent>
        </SettingContainer>
        <BoldLine />
        <SettingContainer>
          <SettingTitle>기타 설정</SettingTitle>
          <SettingContent>공지 사항</SettingContent>
          <SettingContent>이벤트</SettingContent>
          <SettingContent>자주 묻는 질문</SettingContent>
          <SettingContent>1:1 문의</SettingContent>
          <SettingContent>서비스 이용 약관</SettingContent>
        </SettingContainer>
      </ContentContainer>
      <BlankSpace />
    </Container>
  );
=======
function MyPage () {
    const [isLoggedIn, setIsLoggedIn] = useState(0); //추후 수정
    function handleLogInOutButtonClick(event){
        event.preventDefault();
        setIsLoggedIn(!isLoggedIn);
    }
    return (
        <Container>
                <ContentContainer>
                    { isLoggedIn == 0 && <ProfileContainer>
                        <ProfileImg src={MYPAGEPROFILE}/>
                        <ProfileContentContainer>
                            <ProfileContent_Black>로그인하고</ProfileContent_Black>
                            <ProfileContent_Black>시작해보세요!</ProfileContent_Black>
                        </ProfileContentContainer>
                        <LogInButton onClick={handleLogInOutButtonClick} >로그인</LogInButton>
                    </ProfileContainer> }
                    { isLoggedIn != 0 && <ProfileContainer>
                        <ProfileImg src={MYPAGEPROFILE}/>
                        <ProfileContentContainer>
                            <ProfileContent_Blue>안녕하세요</ProfileContent_Blue>
                            <ProfileContentInnerContainer>
                                <ProfileContent_Blue>조혜빈</ProfileContent_Blue>
                                <ProfileContent_Black>님</ProfileContent_Black>
                            </ProfileContentInnerContainer>
                            <ProfileEmail>binibini0101@gmail.com</ProfileEmail>
                        </ProfileContentContainer>
                        <LogOutButton onClick={handleLogInOutButtonClick}>로그아웃</LogOutButton>
                    </ProfileContainer> }
                    <LightLine/>
                    <SettingContainer>
                        <SettingTitle>사용자 설정</SettingTitle>
                        <SettingContentContainer>
                            <SettingContent>내 계정/정보 관리</SettingContent>
                            <NextIcon src={NEXTICON}/>
                        </SettingContentContainer>
                        <SettingContentContainer>
                            <SettingContent>결제 내역</SettingContent>
                            <NextIcon src={NEXTICON}/>
                        </SettingContentContainer>
                        <SettingContentContainer>
                            <SettingContent>내 강의 내역</SettingContent>
                            <NextIcon src={NEXTICON}/>
                        </SettingContentContainer>
                        <SettingContentContainer>
                            <SettingContent>내가 찜한 강의</SettingContent>
                            <NextIcon src={NEXTICON}/>
                        </SettingContentContainer>
                        <SettingContentContainer>
                            <SettingContent>알림</SettingContent>
                            <NextIcon src={NEXTICON}/>
                        </SettingContentContainer>
                    </SettingContainer>
                    <BoldLine/>
                    <SettingContainer>
                        <SettingTitle>기타 설정</SettingTitle>
                        <SettingContentContainer>
                            <SettingContent>공지 사항</SettingContent>
                            <NextIcon src={NEXTICON}/>
                        </SettingContentContainer>
                        <SettingContentContainer>
                            <SettingContent>이벤트</SettingContent>
                            <NextIcon src={NEXTICON}/>
                        </SettingContentContainer>
                        <SettingContentContainer>
                            <SettingContent>자주 묻는 질문</SettingContent>
                            <NextIcon src={NEXTICON}/>
                        </SettingContentContainer>
                        <SettingContentContainer>
                            <SettingContent>1:1 문의</SettingContent>
                            <NextIcon src={NEXTICON}/>
                        </SettingContentContainer>
                        <SettingContentContainer>
                            <SettingContent>서비스 이용 약관</SettingContent>
                            <NextIcon src={NEXTICON}/>
                        </SettingContentContainer>
                    </SettingContainer>
                </ContentContainer>
                <BlankSpace/>
        </Container>
    );
>>>>>>> e536a44f5b150cbbf98ef1fc916ce4aaedc8bc97
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
<<<<<<< HEAD
  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  margin: 20px 0 20px 0;
`;
=======
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
>>>>>>> e536a44f5b150cbbf98ef1fc916ce4aaedc8bc97
