import React from 'react';
import styled from 'styled-components';
import CLOCK_ICON from './icon/clock_black.svg';
import MAP_PIN_ICON from './icon/map-pin.svg';

function TimeAndPlaceRow({ time, location }) {
  let timeArray = time.substring(0, time.length-1).split(' ');
  // let locationArray = location.substring(0, location.length-1).split(' ');
  // timeArray = ["20", "21", "22"];

  return (
    <Container>
      <TimeAndPlace>
        <TimePlaceIconBox>
          <ClockIcon src={CLOCK_ICON} alt=''/>
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
          <MapIcon src={MAP_PIN_ICON} alt=''/>
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
  margin: 4% 3% 0 7%;
`;

const Location = styled.div`
  width: 100px;
`;

const ClockIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-top: 2px;
  margin-right: 5px;
`;

const MapIcon = styled.img`
  margin-right: 3px;
`;

export default TimeAndPlaceRow;
