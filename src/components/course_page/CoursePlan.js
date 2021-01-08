import React from 'react';
import styled from 'styled-components';
import DOWN_OPEN_BUTTON from '../icon/down_open_button.png';

function CoursePlan() {
  return (
    <Container>
      <OneWeek>
        <ListDot />
        <WeekCount>1주차</WeekCount>
        <OpenButton src={DOWN_OPEN_BUTTON} alt="" />
      </OneWeek>
      <OneWeek>
        <ListDot />
        <WeekCount>2주차</WeekCount>
        <OpenButton src={DOWN_OPEN_BUTTON} alt="" />
      </OneWeek>
      <OneWeek>
        <ListDot />
        <WeekCount>3주차</WeekCount>
        <OpenButton src={DOWN_OPEN_BUTTON} alt="" />
      </OneWeek>
      <OneWeek>
        <ListDot />
        <WeekCount>4주차</WeekCount>
        <OpenButton src={DOWN_OPEN_BUTTON} alt="" />
      </OneWeek>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding-top: 4%;
  padding-bottom: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OneWeek = styled.div`
  display: flex;

  width: 90%;
  height: 25px;
  margin: 20px 0px 0px 0px;
  padding: 16px 0px 16px 0px;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
`;

const ListDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 8px 8px 8px 15px;
  background-color: #ff5777;
`;

const WeekCount = styled.div`
  height: 24px;
  padding-top: 1px;
  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: #333333;
`;

const OpenButton = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 0 0 70%;
  object-fit: contain;
`;

export default CoursePlan;
