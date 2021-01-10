import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CalendarImg from '../components/img/달력.PNG';
import OneScheduleImg from '../components/img/PT일정_1회차.png';

class MyClass extends React.Component {
    render() {
        return (
            <Container>
                <TitleContainer>                
                    <Title>
                        <OneChar>{'<'}</OneChar>
                        <OneChar>1월</OneChar>
                        <OneChar>{'>'}</OneChar>
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
    width: 100%;
    position: absolute;
    top: 0;
    height: 80px;
    left: 0;
    padding-bottom: 16px;
`;
const TitleContainer = styled.div`
    position: absolute;
    top: 56px;
    background-color: rgba(63, 79, 165, 0.05);
    width: 100vw;
    height: 56px;
`;
const Title = styled.div`
    font-family: NotoSansKR;
    font-size: 16px;
    font-weight: bold;
    padding: 16px 0 16px 118px;
    display: flex;
`;
const OneChar = styled.div`
    margin: 0 16px 0 16px;
`;
const ContainerContent = styled.div`
    left: 0;
    position: absolute;
    top: 104px;
    width: 100%;
    text-align: center;
    height: calc(100vh - 104px);
`;
const Calendar = styled.img`
    width: 312px;
    height: auto;
    padding: 32px 0 28px 0;  
`;
const ScheduleContainer = styled.div`
    border-top: 3px solid #eeeeee;
`;
const OneSchedule = styled.img`
    padding: 16px;
    width: 342px;
`;
