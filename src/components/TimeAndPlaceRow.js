import React from 'react';
import styled from 'styled-components';
import CLOCK_ICON from './icon/clock.png';
import MAP_PIN_ICON from './icon/map-pin.png';

function TimeAndPlaceRow() {
  return (
    <Container>
      <TimeAndPlace>
        <TimePlaceIconBox>
          <img src={CLOCK_ICON} alt=''/>
        </TimePlaceIconBox>
        18시 / 20시 / 21시
      </TimeAndPlace>
      <TimeAndPlace>
        <TimePlaceIconBox>
          <img src={MAP_PIN_ICON} alt=''/>
        </TimePlaceIconBox>
        서울시 마포구
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
