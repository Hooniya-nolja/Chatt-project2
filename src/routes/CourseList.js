import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import { differenceInCalendarDays } from 'date-fns';
import { courseListAPI } from '../api';
import WEEK_CALENDAR from '../components/img/calendar_week.svg';

import Course from '../components/Course';
import CalendarWeek from '../components/CalendarWeek';

function CourseList() {
  const [pickedDayCourses, setPickedDayCourses] = useState(false);
  const [selectedDayNum, setSelectedDayNum] = useState(1);

  const doAPI = async () => {
    const response = await courseListAPI();
    setPickedDayCourses(response.data[selectedDayNum]);
    console.log('selectedDayNum : ', selectedDayNum);
    console.log('pickedDayCourses : ', pickedDayCourses);
  };

  const getCourseList = async () => {
    try {
      await doAPI();
    } catch (error) {
      console.log('#####ERROR : ', error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const setData = async () => {
      await getCourseList();
    };
    setData();
  }, [selectedDayNum]);

  return (
    <Container>
      <CalendarContainer>
        <CalendarWeek setPickedDayCourses={setSelectedDayNum}/>
        {/* <Calendar src={WEEK_CALENDAR} alt="" /> */}
      </CalendarContainer>
      <CourseListContainer>
        {pickedDayCourses &&
          pickedDayCourses.map((course, index) => {
            return (
              <CourseLink
                to={{
                  pathname: '/course/1/profile',
                  state: {
                    courseData: course,
                  },
                }}
                key={index}
              >
                <Course courseData={course} />
              </CourseLink>
            );
          })}
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
  width: 100%;
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
