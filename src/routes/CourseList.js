import React, { useEffect } from 'react';
import styled from 'styled-components';
// import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import { differenceInCalendarDays } from 'date-fns';
import courseListAPI from '../api';
import WEEK_CALENDAR from '../components/img/Calendar_Temp.png';

import Course from '../components/Course';

function CourseList() {
  let pickedDayCourses = [];
  
  const getCourseList = async () => {
    const response = await courseListAPI();
    pickedDayCourses = response[0];
    // let courseCount = pickedDayCourses.length;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getCourseList();
  }, []);

  return (
    <Container>
      <CalendarContainer>
        <Calendar src={WEEK_CALENDAR} alt="" />
      </CalendarContainer>
      <CourseListContainer>
        {/* <CourseLink to='/course/1/profile' courseData={pickedDayCourses[0]}><Course /></CourseLink> */}
        
        {pickedDayCourses.map((course) => {
          return (
            <CourseLink to="/course/1/profile">
              <Course courseData={course} />
            </CourseLink>
          );
        })}
        
        {/* <CourseLink to="/course/1/profile">
          <Course courseData={pickedDayCourses[0]} />
        </CourseLink> */}
      </CourseListContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CalendarContainer = styled.div`
  margin: 45px 0 30px 0;
  position: fixed;
  background-color: white;
`;

const Calendar = styled.img``;

const CourseListContainer = styled.div`
  padding: 55% 0 25% 0;
  ${'' /* padding: 0; */}
  ${'' /* margin: 0; */}
  ${'' /* overflow: scroll; */}
  width: 100vw;
`;

const CourseLink = styled(Link)`
  text-decoration: none;
`;

export default CourseList;
