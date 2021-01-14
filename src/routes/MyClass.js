import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CalendarImg from '../components/img/달력.PNG';
import OneScheduleImg from '../components/img/PT일정_1회차.png';
import GO_BACK from '../components/icon/go_back.png';
import GO_NEXT from '../components/icon/go_next.png';

class MyClass extends React.Component {
    render() {
        return (
            <Container>
                <TitleContainer>                
                    <Title>
                        <ArrowIcon src={GO_BACK} alt='' />
                        <OneChar>1월</OneChar>
                        <ArrowIcon src={GO_NEXT} alt='' />
                    </Title>
                </TitleContainer>
                <ContainerContent>
                    <Calendar src={CalendarImg}/>
                    <ScheduleContainer>
                        <Link to="/myClass/oneSchedule">
                            <OneSchedule src={OneScheduleImg}/>
                        </Link>
                    </ScheduleContainer>
                </ContainerContent>
            </Container>
        );
    }
}
export default MyClass;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    ${'' /* position: absolute; */}
    top: 0;
    height: 80px;
    left: 0;
    padding-bottom: 16px;
`;
const TitleContainer = styled.div`
    ${'' /* position: absolute; */}
    ${'' /* top: 56px; */}
    background-color: rgba(63, 79, 165, 0.05);
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: center;
`;
const Title = styled.div`
    font-family: NotoSansKR;
    font-size: 16px;
    font-weight: bold;
    padding: 16px 0 16px 0;
    display: flex;
`;
const OneChar = styled.div`
    margin: 0 16px 0 16px;
`;
const ContainerContent = styled.div`
    left: 0;
    ${'' /* position: absolute; */}
    ${'' /* top: 104px; */}
    width: 100%;
    text-align: center;
    height: calc(100vh - 104px);
`;
const Calendar = styled.img`
    width: 80%;
    height: auto;
    padding: 22px 0 28px 0;  
`;
const ScheduleContainer = styled.div`
    border-top: 3px solid #eeeeee;
`;
const OneSchedule = styled.img`
    padding: 16px 0 16px 0;
    width: 342px;
`;
const ArrowIcon = styled.img`
  width: 24px;
  height: 24px;
  ${'' /* margin: 0 8px 0 0; */}
  ${'' /* object-fit: contain; */}
  ${'' /* transform: rotate(90deg); */}
`;
