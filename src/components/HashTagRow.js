import React from 'react';
import styled from 'styled-components';

function HashTagRow(isVisit, hashTagArray) {
  // const visit = '방문';

  return (
    <Container>
      {isVisit ? <IsVisit>방문</IsVisit> : <IsVisit>원격</IsVisit>}
      <HashTag>#필라테스</HashTag>
      <HashTag>#체형교정</HashTag>
      <HashTag>#바른자세</HashTag>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const IsVisit = styled.div`
  display: flex;
  margin-right: 2%;
  align-items: center;
  padding: 0 2% 0 2%;

  height: 24px;
  object-fit: contain;
  border-radius: 4px;
  background-color: rgba(255, 87, 119, 0.1);

  font-family: NotoSansKR;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ff5777;
`;

const HashTag = styled.div`
  display: flex;
  margin-right: 2%;
  align-items: center;
  padding: 0 2% 0 2%;

  ${'' /* width: 68px; */}
  height: 24px;
  object-fit: contain;
  border-radius: 4px;
  background-color: rgba(60, 80, 165, 0.1);

  font-family: NotoSansKR;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #3c50a5;
`;

export default HashTagRow;
