import React, { useState } from 'react';
import styled from 'styled-components';
import COURSE_DETAIL_IMG from '../img/course_detail_img.png';
import { Route, Link, BrowserRouter } from 'react-router-dom';

import Header from '../Header';
import HashTagRow from '../HashTagRow';
import TeacherProfile from './TeacherProfile';
import CourseIntroduction from './CourseIntroduction';
import CourserPlan from './CoursePlan';

function CoursePage({ match, history }) {
  const [profileTabActive, setProfileTabActive] = useState(true);
  const [introductionTabActive, setIntroductionTabActive] = useState(false);
  const [planTabActive, setPlanTabActive] = useState(false);

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
          to="/course/1/profile"
          tab={profileTabActive}
          onClick={() => changeSubPageTab(setProfileTabActive)}
        >
          프로필
        </TabButton>
        <TabButton
          to="/course/1/introduction"
          tab={introductionTabActive}
          onClick={() => changeSubPageTab(setIntroductionTabActive)}
        >
          강의소개
        </TabButton>
        <TabButton
          to="/course/1/plan"
          tab={planTabActive}
          onClick={() => changeSubPageTab(setPlanTabActive)}
        >
          강의계획
        </TabButton>
      </SubPageTab>
      <Route path="/course/1/profile" exact={true} component={TeacherProfile} />
      <Route path="/course/1/introduction" exact={true} component={CourseIntroduction} />
      <Route path="/course/1/plan" exact={true} component={CourserPlan} />
    </Container>
  );
}

const Container = styled(BrowserRouter)`
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

const TabButton = styled(Link)`
  width: 100%;
  flex-grow: 1;
  text-align: center;
  text-decoration: none;

  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  text-align: center;
  color: ${(props) => (props.tab ? '#3c50a5' : '#bdbdbd')};
`;

export default CoursePage;
