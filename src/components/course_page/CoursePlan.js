import React, { useState }  from 'react';
import styled from 'styled-components';
import DOWN_OPEN_BUTTON from '../icon/down_open_button.png';

function CoursePlan({ location }) {
  const text1 =
    '1주차에는 수강생의 건강 상태와 몸의 상태를 확인 하는 것에 초점을 둡니다.  짧은 상담 과정을 거친 후에는 앞으로 4주 동안의 수업 계획을 함꼐 수립합니다. 함께 수립한 수업 계획을 토대로 하여 1주차의 수업을 진행합니다. 본격적인 운동에 앞서 유연성을 기르기 한 동작 위주로 스트레칭을 진행합니다. 더불어 자세교정을 위한 기초 자세를 배웁니다.';
  const text2 = 
    '2주차에는 본격적으로 수업에 들어가게 됩니다. 처음에는 어려운 부분이 많을 수 있기에 흥미를 잃지 않도록 쉬운 자세들도 함께 구성되어 있습니다. 함께 수립한 수업 계획을 토대로 하여 1주차의 수업을 진행합니다. 본격적인 운동에 앞서 유연성을 기르기 한 동작 위주로 스트레칭을 진행합니다. 더불어 자세교정을 위한 기초 자세를 배웁니다.';
  const text3 = 
    '3주차에는 새로운 시도들을 해볼겁니다. 먼저 선생님의 자세를 보고 그것을 따라하며 함께 수립한 수업 계획을 토대로 하여 1주차의 수업을 진행합니다. 본격적인 운동에 앞서 유연성을 기르기 한 동작 위주로 스트레칭을 진행합니다. 더불어 자세교정을 위한 기초 자세를 배웁니다.';
  const text4 = 
    '4주차에는 지금까지 해온 것들을 복습하는 시간을 가질 것입니다. 함께 수립한 수업 계획을 토대로 하여 1주차의 수업을 진행합니다. 본격적인 운동에 앞서 유연성을 기르기 한 동작 위주로 스트레칭을 진행합니다. 더불어 자세교정을 위한 기초 자세를 배웁니다.';
  const [firstWeekClicked, setFirstWeekClicked] = useState(false);
  const [secondWeekClicked, setSecondWeekClicked] = useState(false);
  const [thirdWeekClicked, setThirdWeekClicked] = useState(false);
  const [fourthWeekClicked, setFourthWeekClicked] = useState(false);

  function showDescription(weekClicked, setWeekClicked) {
    if (weekClicked) {
        setWeekClicked(false);
    } else {
        setFirstWeekClicked(false);
        setSecondWeekClicked(false);
        setThirdWeekClicked(false);
        setFourthWeekClicked(false);
        setWeekClicked(true);
    }
  }

  return (
    <Container>
      <OneWeek>
        <WeekCount onClick={() => showDescription(firstWeekClicked, setFirstWeekClicked)}>
          <ListDot />
          <WeekCountText>1주차</WeekCountText>
          <OpenButton src={DOWN_OPEN_BUTTON} alt="" />
        </WeekCount>
        {firstWeekClicked && <WeekDescription>{text1}</WeekDescription>}
      </OneWeek>
      <OneWeek>
        <WeekCount onClick={() => showDescription(secondWeekClicked, setSecondWeekClicked)}>
          <ListDot />
          <WeekCountText>2주차</WeekCountText>
          <OpenButton src={DOWN_OPEN_BUTTON} alt="" />
        </WeekCount>
        {secondWeekClicked && <WeekDescription>{text2}</WeekDescription>}
      </OneWeek>
      <OneWeek>
        <WeekCount onClick={() => showDescription(thirdWeekClicked, setThirdWeekClicked)}>
          <ListDot />
          <WeekCountText>3주차</WeekCountText>
          <OpenButton src={DOWN_OPEN_BUTTON} alt="" />
        </WeekCount>
        {thirdWeekClicked && <WeekDescription>{text3}</WeekDescription>}
      </OneWeek>
      <OneWeek>
        <WeekCount onClick={() => showDescription(fourthWeekClicked, setFourthWeekClicked)}>
          <ListDot />
          <WeekCountText>4주차</WeekCountText>
          <OpenButton src={DOWN_OPEN_BUTTON} alt="" />
        </WeekCount>
        {fourthWeekClicked && <WeekDescription>{text4}</WeekDescription>}
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
  width: 90%;
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

const WeekCountText = styled.div`
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

const WeekCount = styled.div`
  display: flex;
`;

const WeekDescription = styled.div`
  padding: 0px 15px 15px 15px;

  margin: 16px 1px 0 0;
  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  line-height: 1.71;
  text-align: left;
  color: #333333;
`;

export default CoursePlan;
