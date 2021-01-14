import React from 'react';
import styled from 'styled-components';

function CourseIntroduction({ location }) {
  // const introductionText =
  //   '필라테스는 반복된 운동과 연속 동작을 통해 근육을 운동시키며 통증 없이 근육을 강화하는 종합운동입니다. 몸의 파워하우스 강화로 자세 교정과 구체적인 근력 강화로 유연성을 향상시키며 몸의 긴장을 풀어줍니다. 심폐 능력과 순환기 능력을 강화시키는 데 효과가 있는 것으로 알려져 있으며 마음을 차분히 가라앉히는 과정을 통해 스트레스 감소에도 좋습니다.';
  // const introductionText2 =
  //   '우선, 회원님의 체형과 자세가 어떠한지 살펴보고 상담을 통해 회원님의 운동 목표 등을 파악합니다. 이를 바탕으로 회원님을 위한 프로그램을 설계합니다. 구체적인 운동 내용은 회원님의 체형과 상태에 따라 다르게 구성됩니다. 원하시는 경우 식단 프로그램 또한 병행하는 관리까지도 가능합니다. '
  const { courseData } = location.state;
  console.log('강의 소개 : ', courseData.information);
  const introductionText = courseData.information.split('\r\n');
  
    return (
    <Container>
      <Introduction>{introductionText[0]}</Introduction>
      <BoldLine />
      <Introduction>
        {introductionText.map((paragraph, index) => {
          return (
            index > 1 && <>{paragraph}<br/></>
          );
        })}
      </Introduction>
      {/* <Introduction>{courseData.information}</Introduction> */}
    </Container>
  );
}

const Container = styled.div`
  padding-bottom: 180px;
  width: 100%;
  ${'' /* height: 100%; */}
`;

const Introduction = styled.div`
  width: 90%;
  padding: 30px 16px 40px;
  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  line-height: 1.71;
  text-align: left;
  color: #333333;
`;

const BoldLine = styled.div`
  height: 8px;
  width: 100%;
  margin: 0;
  background-color: rgba(60, 80, 165, 0.1);
`;

export default CourseIntroduction;
