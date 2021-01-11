import React from 'react';
import styled from 'styled-components';
import CLOCK_ICON from './icon/clock.png';
import MAP_PIN_ICON from './icon/map-pin.png';

function TimeAndPlaceRow(time, location) {
  const timeArray = time.split(' ');

  return (
    <Container>
      <TimeAndPlace>
        <TimePlaceIconBox>
          <img src={CLOCK_ICON} alt=''/>
        </TimePlaceIconBox>
        {timeArray.map((time, index) => {
          if ((index+1) !== timeArray.length) {
            return (
              <span>{time}시 / </span>
            );
          } else {
            return (
              <span>{time}시</span>
            )
          }
        })}
        {/* {timeArray[0]}시 / {timeArray[0]}시 */}
      </TimeAndPlace>
      <TimeAndPlace>
        <TimePlaceIconBox>
          <img src={MAP_PIN_ICON} alt=''/>
        </TimePlaceIconBox>
        {location[0]}구 {location[1]}동
      </TimeAndPlace>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const TimeAndPlace = styled.div`
  ${'' /* justify-content: center; */}
  align-items: center;
  display: flex;
  margin-right: 3%;
  ${'' /* white-space:nowrap; */}

  width: 144px;
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

export default TimeAndPlaceRow;
