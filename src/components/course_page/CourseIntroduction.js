import React from 'react';
import styled from 'styled-components';

function CourseIntroduction() {
  const introductionText =
    '필라테스는 반복된 운동과 연속 동작을 통해 근육을 운동시키며 통증 없이 근육을 강화하는 종합운동입니다. 몸의 파워하우스 강화로 자세 교정과 구체적인 근력 강화로 유연성을 향상시키며 몸의 긴장을 풀어줍니다. 심폐 능력과 순환기 능력을 강화시키는 데 효과가 있는 것으로 알려져 있으며 마음을 차분히 가라앉히는 과정을 통해 스트레스 감소에도 좋습니다.';

  return (
    <Container>
      <Introduction>{introductionText}{introductionText}{introductionText}</Introduction>
    </Container>
  );
}

const Container = styled.div`
  padding-bottom: 180px;
`;

const Introduction = styled.div`
  width: 343px;
  margin: 30px 16px 40px;
  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  line-height: 1.71;
  text-align: left;
  color: #333333;
`;

export default CourseIntroduction;
