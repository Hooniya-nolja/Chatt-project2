import React, { useState } from 'react';
import styled from 'styled-components';
import COURSE_DETAIL_IMG from '../img/course_detail_img.png';
import TRAINER_IMG from '../img/trainer_large_img.png';
import INSTAGRAM_IMG from '../icon/instagram.png';
// import LIST_DOT_IMG from '../icon/list_dot.png';

import Header from '../Header';
import HashTagRow from '../HashTagRow';

function CoursePage() {
  const [profileTabActive, setProfileTabActive] = useState(true);
  const [introductionTabActive, setIntroductionTabActive] = useState(false);
  const [planTabActive, setPlanTabActive] = useState(false);
  const teacherIntroductionText1 =
    '안녕하세요. 필라테스 강사 제니퍼입니다!'
  const teacherIntroductionText2 = 
    '저는 한국체육대학교 출신으로 10년째 전문 필라테스 강사로 활동하고 있습니다. 현대에 많은 사람은 좋지 못한 자세를 가지고 있기에 여러가지 몸에 불편을 겪고 있기도 합니다. 하지만 필라테스를 통해 마음도 건강하게 만들어 드리겠습니다.';
  const teacherIntroductionText3 =
    '믿고 맡겨주시는 만큼 최선을 다해서 회원님을 지도해 드리겠습니다. 감사합니다!';

  function changeSubPageTab(setTabActive) {
    setProfileTabActive(false);
    setIntroductionTabActive(false);
    setPlanTabActive(false);
    setTabActive(true);
  }

  return (
    <Container>
      <CourseDetailImg src={COURSE_DETAIL_IMG} alt="" />
      <Header
        beforeUrl={'/classList'}
        goBackButton={true}
        closeButton={false}
      />
      <HashTagRowContainer>
        <HashTagRow />
      </HashTagRowContainer>
      <SimpleDescription>
        바른자세 맑은정신을 위한 운동! 지금 시작해보세요!
      </SimpleDescription>
      <SubPageTab>
        <TabButton
          tab={profileTabActive}
          onClick={() => changeSubPageTab(setProfileTabActive)}
        >
          프로필
        </TabButton>
        <TabButton
          tab={introductionTabActive}
          onClick={() => changeSubPageTab(setIntroductionTabActive)}
        >
          강의소개
        </TabButton>
        <TabButton
          tab={planTabActive}
          onClick={() => changeSubPageTab(setPlanTabActive)}
        >
          강의계획
        </TabButton>
      </SubPageTab>
      <TeacherProfile>
        <TeacherPicture src={TRAINER_IMG} alt="" />
        <TeacherInformation>
          <TeacherName>제니퍼 트레이너</TeacherName>
          <TeacherInstagram>
            <InstagramImage src={INSTAGRAM_IMG} alt="" />
            <InstagramID>jennifer_pilates</InstagramID>
          </TeacherInstagram>
        </TeacherInformation>
      </TeacherProfile>
      <BoldLine />
      <TeacherIntroduction>
        <IntroductionHead>강사 소개</IntroductionHead>
        <IntroductionContent>
          {teacherIntroductionText1}<br/><br/>
          {teacherIntroductionText2}<br/><br/>
          {teacherIntroductionText3}
        </IntroductionContent>
      </TeacherIntroduction>
      <BoldLine />
      <TeacherCareer>
        <TeacherCareerHead>경력 사항</TeacherCareerHead>
        <TeacherCareerList>
          <CareerListDot />
          <CareerListText>한국체육대학 보디빌딩전공 졸업</CareerListText>
        </TeacherCareerList>
        <TeacherCareerList>
          <CareerListDot />
          <CareerListText>한국체육대학 보디빌딩전공 졸업</CareerListText>
        </TeacherCareerList>
        <TeacherCareerList>
          <CareerListDot />
          <CareerListText>한국체육대학 보디빌딩전공 졸업</CareerListText>
        </TeacherCareerList>
      </TeacherCareer>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const CourseDetailImg = styled.img`
  width: 100vw;
  height: 240px;
`;

const HashTagRowContainer = styled.div`
  margin: 6% 0 0 4%;
`;

const SimpleDescription = styled.div`
  width: 340px;
  height: 24px;
  margin: 16px 19px 32px 4%;
  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  text-align: left;
  color: #333333;
`;

const SubPageTab = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 56px;
  background-color: rgba(60, 80, 165, 0.05);
`;

const TabButton = styled.div`
  width: 100%;
  flex-grow: 1;
  text-align: center;

  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  text-align: center;
  color: ${(props) => (props.tab ? '#3c50a5' : '#bdbdbd')};
`;

const TeacherProfile = styled.div`
  display: flex;
  height: 15%;
`;

const TeacherPicture = styled.img`
  width: 56px;
  height: 56px;
  margin: 31px 10px 39px 14px;
  object-fit: contain;
  border-radius: 40px;
  border: solid 0 #828282;
`;

const TeacherInformation = styled.div`
  height: 100%;
`;

const TeacherName = styled.div`
  width: 107px;
  height: 24px;
  margin: 30px 20px 8px 9px;
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  text-align: left;
  color: #333333;
`;

const TeacherInstagram = styled.div`
  display: flex;
  height: 40%;
`;

const InstagramImage = styled.img`
  width: 16px;
  height: 16px;
  margin: 2px 8px 48px 9px;
`;

const InstagramID = styled.div`
  font-family: NotoSansKR;
  font-weight: normal;
  font-size: 12px;
  font-style: normal;
  text-align: left;
  color: #333333;
`;

const BoldLine = styled.div`
  height: 8px;
  margin: 0;
  background-color: rgba(60, 80, 165, 0.1);
`;

const TeacherIntroduction = styled.div`
`;

const IntroductionHead = styled.div`
  width: 63px;
  height: 24px;
  margin: 30px 9px 16px 16px;
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  text-align: left;
  color: #000000;
`;

const IntroductionContent = styled.div`
  width: 343px;
  height: 240px;
  margin: 16px 16px 40px;
  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.71;
  font-style: normal;
  text-align: left;
  color: #333333;
`;

const TeacherCareer = styled.div`
  padding-bottom: 50%;
`;

const TeacherCareerHead = styled.div`
  width: 100%;
  height: 24px;
  margin: 30px 13px 12px 16px;
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  text-align: left;
  color: #000000;
`;

const TeacherCareerList = styled.div`
  display: flex;
`;

const CareerListDot = styled.div`
  width: 8px;
  height: 8px;
  margin: 12px 16px 12px 32px;
  background-color: #3f4fa5;
  border-radius: 50%;
`;

const CareerListText = styled.div`
  width: 80%;
  height: 24px;
  margin: 4px 0px 10px 1px;
  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: #333333;
`;

export default CoursePage;
