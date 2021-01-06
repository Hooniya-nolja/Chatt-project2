import React from 'react';
import styled from 'styled-components';

import COURSE_DETAIL_IMG from '../img/course_detail_img.png';

import Header from '../Header';

function CoursePage() {
  return (
    <Container>
      <CourseDetailImg src={COURSE_DETAIL_IMG} alt='' />
      <Header beforeUrl={'/classList'} goBackButton={true} closeButton={false}/>
    </Container>
  );
}

const Container = styled.div``;

const CourseDetailImg = styled.img`
  width: 100%;
  height: 240px;
`; 

export default CoursePage;