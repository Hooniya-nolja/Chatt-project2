import React from 'react';
import styled from 'styled-components';

function DescriptionRow(description) {
  return (
    <Container>{description}</Container>
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
