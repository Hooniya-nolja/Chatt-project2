import React from 'react';
import styled from 'styled-components';

function DescriptionRow() {
  return (
    <Container>바른자세 맑은정신을 위한 운동! 지금 시작해보세요</Container>
  );
}

const Container = styled.div`
  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  color: #333333;
`;

export default DescriptionRow;
