import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import COURSE_DETAIL_IMG from '../img/course_detail_img.png';
import { Route, Link, BrowserRouter, withRouter } from 'react-router-dom';

import Header from '../Header';
import HashTagRow from '../HashTagRow';
import TeacherProfile from './TeacherProfile';
import CourseIntroduction from './CourseIntroduction';
import CourserPlan from './CoursePlan';
import ImageSlider from './ImageSlider';

function CoursePage({ location, history }) {
  const [profileTabActive, setProfileTabActive] = useState(1);
  const [introductionTabActive, setIntroductionTabActive] = useState(0);
  const [planTabActive, setPlanTabActive] = useState(0);
  const courseData = location.state.courseData;
  const hashTagArray = [courseData.tag1, courseData.tag2, courseData.tag3];
  const courseImageArray = [courseData.image1, courseData.image2, courseData.image3];

  function changeSubPageTab(setTabActive) {
    setProfileTabActive(0);
    setIntroductionTabActive(0);
    setPlanTabActive(0);
    setTabActive(1);
  }

  useEffect(() => {
    history.push({    // if refresh page then initialize Tabs.
      pathname: '/course/1/profile',
      state: {
        courseData: location.state.courseData
      }
    });  
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <ImageSlider courseImageArray={courseImageArray} />
      <Header
        beforeUrl={'/courseList'}
        goBackButton={true}
        closeButton={false}
        forceLink={() => history.push('/courseList')}
      />
      <HashTagRowContainer>
        <HashTagRow isVisit={true} hashTagArray={hashTagArray}/>
      </HashTagRowContainer>
      {/* <SimpleDescription>
        바른자세 맑은정신을 위한 운동! 지금 시작해보세요!
      </SimpleDescription> */}
      <SimpleDescription>
        {courseData.name}
      </SimpleDescription>
      <SubPageTab>
        <TabButton
          to={{
            pathname: "/course/1/profile",
            state: {
              courseData: location.state.courseData,
            }
          }}
          tab={profileTabActive}
          onClick={() => changeSubPageTab(setProfileTabActive)}
        >
          프로필
        </TabButton>
        <TabButton
          to={{
            pathname: "/course/1/introduction",
            state: {
              courseData: location.state.courseData,
            }
          }}
          tab={introductionTabActive}
          onClick={() => changeSubPageTab(setIntroductionTabActive)}
        >
          강의소개
        </TabButton>
        <TabButton
          to={{
            pathname: "/course/1/plan",
            state: {
              courseData: location.state.courseData,
            }
          }}
          tab={planTabActive}
          onClick={() => changeSubPageTab(setPlanTabActive)}
        >
          강의계획
        </TabButton>
      </SubPageTab>
      <ReservationButton onClick={() => history.push({
        pathname: '/pay/1',
        state: {
          courseData: location.state.courseData
        }
      })}>신청하기</ReservationButton>
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

export default withRouter(CoursePage);
