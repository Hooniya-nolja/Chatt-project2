import React from 'react';
import styled from 'styled-components';
import CLOCK_ICON from './icon/clock.png';
import MAP_PIN_ICON from './icon/map-pin.png';

function TimeAndPlaceRow({ time, location }) {
  let timeArray = time.substring(0, time.length-1).split(' ');
  console.log('timeArray : ', timeArray);
  // timeArray = ["20", "21", "22"];

  return (
    <Container>
      <TimeAndPlace>
        <TimePlaceIconBox>
          <img src={CLOCK_ICON} alt=''/>
        </TimePlaceIconBox>
        {timeArray.map((time, index) => {
          if ((index+1) !== timeArray.length) {
            return (
              <span style={{width: "42px"}} key={index}>{time}시 /</span>
            );
          } else {
            return (
              <span style={{width: "42px"}} key={index}>{time}시</span>
            )
          }
        })}
      </TimeAndPlace>
      <TimeAndPlace>
        <TimePlaceIconBox>
          <img src={MAP_PIN_ICON} alt=''/>
        </TimePlaceIconBox>
        <Location>
          {location[0]}구 {location[1]}동
        </Location>
      </TimeAndPlace>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const TimeAndPlace = styled.div`
  align-items: center;
  display: flex;
  margin-right: 3%;

  height: 32px;
  border-radius: 4px;
  background-color: #f8f8f8;

  object-fit: contain;
  font-family: NotoSansKR;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: left;
  color: #333333;
`;

const TimePlaceIconBox = styled.div`
  margin: 2% 7% 0 7%;
`;

const Location = styled.div`
  width: 100px;
`;

export default TimeAndPlaceRow;
