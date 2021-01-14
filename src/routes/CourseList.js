import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import { differenceInCalendarDays } from 'date-fns';
import { courseListAPI } from '../api';
import WEEK_CALENDAR from '../components/img/Calendar_Temp.png';

import Course from '../components/Course';

function CourseList() {
  const [pickedDayCourses, setPickedDayCourses] = useState(false);

  const doAPI = async () => {
    const response = await courseListAPI();
    setPickedDayCourses(response.data[0]);
  }

  const getCourseList = async () => {
    try {
      await doAPI();
    } catch (error) {
      console.log('#####ERROR : ', error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const setData = async() => {
      await getCourseList();
    }
    setData();
  }, []);

  return (
    <Container>
      <CalendarContainer>
        <Calendar src={WEEK_CALENDAR} alt="" />
      </CalendarContainer>
      <CourseListContainer>        
        {pickedDayCourses && pickedDayCourses.map((course, index) => {
          return (
            <CourseLink to={{
              pathname: "/course/1/profile",
              state: {
                courseData: course,
              }
            }} key={index}>
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
  ${'' /* height: 110px; */}
  padding: 0px 0 0px 0;
  position: fixed;
  background-color: white;
`;

const Calendar = styled.img``;

const CourseListContainer = styled.div`
  padding: 40% 0 25% 0;
  width: 100vw;
`;

const CourseLink = styled(Link)`
  text-decoration: none;
`;

export default CourseList;
