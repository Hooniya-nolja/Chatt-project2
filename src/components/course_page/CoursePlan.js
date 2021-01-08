import React from 'react';
import styled from 'styled-components';

function CoursePlan() {
    return (
        <Container>
            <OneWeek></OneWeek>
            <OneWeek></OneWeek>
            <OneWeek></OneWeek>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding-top: 4%;
    padding-bottom: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const OneWeek = styled.div`
  width: 90%;
  height: 25px;
  margin: 20px 0px 0px 0px;
  padding: 16px 0px 16px 0px;
  ${'' /* object-fit: contain; */}
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
`;

export default CoursePlan;