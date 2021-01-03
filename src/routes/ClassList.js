import React from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import { Route, Link } from 'react-router-dom';

import Course from '../components/Course';
import SignIn from '../components/authentication/SignIn';

class ClassList extends React.Component {
  render() {
    return (
      <Container>
        <Link className='login' to='/signIn'>
         로그인 테스트
        </Link>
        {/* <CalendarContainer>
          <Calendar />
        </CalendarContainer> */}
        <CourseList>
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
        </CourseList>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CalendarContainer = styled.div`
  position: fixed;
`;

const CourseList = styled.div`
  // padding: 40% 0 25% 0;
  padding: 0;
  margin: 0;
  overflow: scroll;
  width: 100vw;
`;

export default ClassList;
