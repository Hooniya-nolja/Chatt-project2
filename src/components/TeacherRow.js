import React from 'react';
import styled from 'styled-components';
import TRAINER_IMG from './img/trainer_img.png';

function TeacherRow() {
  return (
    <Container>
      <TrainerImgBox>
        <img src={TRAINER_IMG} alt=''/>
      </TrainerImgBox>
      제니퍼 트레이너
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;

  font-family: NotoSansKR;
  font-size: 14px;
  text-align: left;
  color: #333333;
`;

const TrainerImgBox = styled.div`
  margin-right: 3%;
`;

export default TeacherRow;
