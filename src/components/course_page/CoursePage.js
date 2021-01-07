import React from 'react';
import styled from 'styled-components';
import '../../styles/css/CoursePage.css';
import COURSE_DETAIL_IMG from '../img/course_detail_img.png';

import Header from '../Header';
import HashTagRow from '../HashTagRow';

function CoursePage() {
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
        <TabButton>프로필</TabButton>
        <TabButton>강의소개</TabButton>
        <TabButton>강의계획</TabButton>
      </SubPageTab>
    </Container>
  );
}

const Container = styled.div``;

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
  object-fit: contain;
  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #333333;
`;

const SubPageTab = styled.div`
  display: flex;
`;

const TabButton = styled.div``;

export default CoursePage;
