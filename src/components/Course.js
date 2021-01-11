import React from 'react';
import styled from 'styled-components';

import HashTagRow from './HashTagRow';
import TimeAndSpaceRow from './TimeAndPlaceRow';
import DescriptionRow from './DescriptionRow';
import TeacherRow from './TeacherRow';

function Course(courseData) {
  const isVisit = courseData.is_visit;
  const hashTagArray = [courseData.tag1, courseData.tag2, courseData.tag3];
  const time = courseData.times;
  const location = courseData.teacher.related_locations.gu;
  const information = courseData.information;
  const teacher = courseData.teacher;

  return (
    <Container>
      <HashTagRow isVisit={isVisit} hashTagArray={hashTagArray}></HashTagRow>
      <TimeAndSpaceRow></TimeAndSpaceRow>
      <DescriptionRow></DescriptionRow>
      <TeacherRow></TeacherRow>
    </Container>
  );
}

const Container = styled.div`
  width: calc(100% - 48px);
  height: 160px;
  margin: 16px;
  // object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  padding: 1% 0 0 4%;
  justify-content: space-evenly;
`;

export default Course;