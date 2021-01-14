import React from 'react';
import styled from 'styled-components';
import TEACHER_SAMPLE from './img/trainer_img.png';

function TeacherRow({ teacher }) {
  return (
    <Container>
      <TeacherImgBox>
        <TeacherImage src={teacher.image ? teacher.image : TEACHER_SAMPLE} alt=''/>
      </TeacherImgBox>
      {teacher.name} 트레이너
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

const TeacherImgBox = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 3%;
`;

const TeacherImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export default TeacherRow;
