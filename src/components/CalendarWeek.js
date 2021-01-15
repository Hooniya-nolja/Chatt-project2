import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LEFT_ARROW from '../components/icon/go_back.png';
import RIGHT_ARROW from '../components/icon/go_next.png';

function CalendarWeek({ setPickedDayCourses }) {
  const dayTextArray = ['일', '월', '화', '수', '목', '금', '토'];
  const dayNumArray = [17, 18, 19, 20, 21, 22, 23];
  const [clickedDayNum, setClickedDayNum] = useState(1);
  console.log('clickedDayNum : ', clickedDayNum);
  //   useEffect(() => {
  //   }, clickedDayNum);

  return (
    <Container>
      <SelectWeek>
        <ArrowIcon src={LEFT_ARROW} alt="" />
        <ShowWeek>1월 2주차</ShowWeek>
        <ArrowIcon src={RIGHT_ARROW} alt="" />
      </SelectWeek>
      <ShowDayText>
        {dayTextArray.map((day, index) => {
          return <DayText key={index}>{day}</DayText>;
        })}
      </ShowDayText>
      <ShowDayNum>
        {dayNumArray.map((day, index) => {
          return (
            <DayNum
              onClick={() => {
                setClickedDayNum(index);
                setPickedDayCourses(index);
                console.log('clickedDayNum : ', clickedDayNum);
              }}
              clickedDayNum={clickedDayNum}
              index={index}
            >
              {day}
            </DayNum>
          );
        })}
      </ShowDayNum>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 145px;
  margin: 0px 0 0px 0;
  object-fit: contain;
  background-color: #F5F6FB;
`;

const SelectWeek = styled.div`
  display: flex;
  padding: 15px 0 20px 15px;
  align-items: center;
`;

const ShowWeek = styled.div`
  width: 72px;
  height: 24px;
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: normal;
  text-align: center;
  color: #333333;

  padding: 2px 6px 0 6px;
`;

const ArrowIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const ShowDayText = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 8px;
`;

const DayText = styled.div`
  width: 40px;
  height: 24px;
  object-fit: contain;
  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: center;
  color: #333333;
`;

const ShowDayNum = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const DayNum = styled.div`
  object-fit: contain;
  font-family: NotoSansKR;
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  line-height: normal;
  color: ${(props) =>
    props.clickedDayNum === props.index ? 'white' : '#333333'};

  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.clickedDayNum === props.index ? '#ff5777' : '#F5F6FB'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CalendarWeek;
