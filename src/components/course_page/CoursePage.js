import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import COURSE_DETAIL_IMG from '../img/course_detail_img.png';
import { Route, Link, BrowserRouter } from 'react-router-dom';

import Header from '../Header';
import HashTagRow from '../HashTagRow';
import TeacherProfile from './TeacherProfile';
import CourseIntroduction from './CourseIntroduction';
import CourserPlan from './CoursePlan';
import ImageSlider from './ImageSlider';

function CoursePage({ history }) {
  const [profileTabActive, setProfileTabActive] = useState(true);
  const [introductionTabActive, setIntroductionTabActive] = useState(false);
  const [planTabActive, setPlanTabActive] = useState(false);
  const hashTagArray = ['필라테스', '체형교정', '바른자세'];

  function changeSubPageTab(setTabActive) {
    setProfileTabActive(false);
    setIntroductionTabActive(false);
    setPlanTabActive(false);
    setTabActive(true);
  }

  useEffect(() => {
    history.push('/course/1/profile');  // if refresh page then initialize Tabs.
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <ImageSlider image={COURSE_DETAIL_IMG} />
      <Header
        beforeUrl={'/courseList'}
        goBackButton={true}
        closeButton={false}
        forceLink={() => history.push('/courseList')}
      />
      <HashTagRowContainer>
        <HashTagRow isVisit={true} hashTagArray={hashTagArray}/>
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
      <ReservationButton onClick={() => history.push('/pay/1')}>예약하기</ReservationButton>
      <Route path="/course/1/profile" exact={true} component={TeacherProfile} />
      <Route
        path="/course/1/introduction"
        exact={true}
        component={CourseIntroduction}
      />
      <Route path="/course/1/plan" exact={true} component={CourserPlan} />
    </Container>
  );
}

const Container = styled(BrowserRouter)`
  height: 100%;
  width: 100%;
`;

const HashTagRowContainer = styled.div`
  margin: 9% 0 0 4%;
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
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${(props) => (props.tab ? 'solid #3c50a5' : '#bdbdbd')};
  width: 100%;
  height: 100%;
  flex-grow: 1;
  text-decoration: none;

  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  text-align: center;
  color: ${(props) => (props.tab ? '#3c50a5' : '#bdbdbd')};
`;

const ReservationButton = styled.button`
  margin-left: calc((100% - 343px) / 2);
  position: fixed;
  bottom: 12%;
  width: 343px;
  height: 56px;
  object-fit: contain;
  border-radius: 100px;
  background-color: #3c50a5;

  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  text-align: center;
  color: #ffffff;
`;

export default CoursePage;
