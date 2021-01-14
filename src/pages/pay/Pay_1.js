import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PAGENUMIMG_1 from '../../components/icon/pageNumImg_1.png';
import TempCalendar from '../../components/img/Calendar_Temp.png';

import { courseListAPI } from '../../api';
class Pay_1 extends React.Component {
    state = {
        selectedTime: 0,
        startDate: "2020-01-04",
        times: null,
        timeArray: null,
    }
    componentWillMount() {
        const doAPI = async () => {
            const response = await courseListAPI();
            this.setState({times: response.data[0][0].times});
            this.setState({timeArray: this.state.times.split(" ")});
            console.log(this.state.timeArray);
        }
        doAPI();
    }
    render() {
        const handleTime1Click = () => {
            this.setState({selectedTime: this.state.timeArray[0]});
        }
        const handleTime2Click = () => {
            this.setState({selectedTime: this.state.timeArray[1]});
        }
        const handleTime3Click = () => {
            this.setState({selectedTime: this.state.timeArray[2]});
        }
        const handleSelectedTimeClick = () => {
            this.setState({selectedTime:0});
        }
        console.log(this.state.times);
        return (
            <Container>
                <div>
                    <Link to="/introduction"> {/* 후에 url 수정 */}
                        <GoBackIcon>{'<'}</GoBackIcon>
                    </Link>                   
                    <Title>예약하기</Title>
                    <Link to="/"> {/* 후에 수정 */}
                            <CloseIcon>{'X'}</CloseIcon>
                    </Link>
                </div>
                <ContainerContent>
                    <SubTitle>1. 희망 수업 시간을 선택해주세요!</SubTitle>
                    <Calendar src={TempCalendar}/>
                    { this.state.timeArray !== null &&
                        <TimeCandidateContainer>
                        <TimeCandidatesOneRow>
                            { this.state.timeArray.length > 1 &&
                                <div>
                                    {   
                                    this.state.timeArray[0] === this.state.selectedTime 
                                    ? <SelectedTimeCandidate onClick={handleSelectedTimeClick}>{this.state.timeArray[0]}:00</SelectedTimeCandidate>
                                    : <TimeCandidate onClick={handleTime1Click}>{this.state.timeArray[0]}:00</TimeCandidate>
                                    }
                                </div>
                            }
                            <EmptySpace/>
                            { this.state.timeArray.length > 2 &&
                                <div>
                                    {   
                                    this.state.timeArray[1] === this.state.selectedTime 
                                    ? <SelectedTimeCandidate onClick={handleSelectedTimeClick}>{this.state.timeArray[1]}:00</SelectedTimeCandidate>
                                    : <TimeCandidate onClick={handleTime2Click}>{this.state.timeArray[1]}:00</TimeCandidate>
                                    }
                                </div>
                            }
                        </TimeCandidatesOneRow>
                        <TimeCandidatesOneRow>
                            { this.state.timeArray.length > 3 &&
                                <div>
                                    {   
                                    this.state.timeArray[2] === this.state.selectedTime 
                                    ? <SelectedTimeCandidate onClick={handleSelectedTimeClick}>{this.state.timeArray[2]}:00</SelectedTimeCandidate>
                                    : <TimeCandidate onClick={handleTime3Click}>{this.state.timeArray[2]}:00</TimeCandidate>
                                    }
                                </div>
                            }
                        </TimeCandidatesOneRow>
                        </TimeCandidateContainer>
                    }
                    <ButtonContainer>
                        <PageNumImg src={PAGENUMIMG_1}/>
                        <Link 
                            to = {{
                                pathname: "/pay/2",
                                state: {
                                    time: this.state.selectedTime,
                                    start_date: this.state.startDate,
                                },
                            }}>
                            <NextButton>다음</NextButton>
                        </Link>
                    </ButtonContainer>
                </ContainerContent>
            </Container>
        );
    }
}
export default Pay_1;
const Container = styled.div`
    display: flex;
    width: 100%;
    position: absolute;
    top: 0;
    height: 80px;
    left: 0;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
    padding-bottom: 16px;
`;
const TopContent = styled.div`
    font-family: NotoSansKR;
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    text-decoration: none;
    width: 72px;
    height: 24px;
`;
const GoBackIcon = styled(TopContent)`
    text-decoration: none;
    position: absolute;
    top: 56px;
    left: 16px;
`;
const Title = styled(TopContent)`
    position: absolute;
    top: 56px;
    left: calc(100vw / 2 - 36px)
`;
const ContainerContent = styled.div`
    left: 0;
    position: absolute;
    top: 104px;
    width: 100%;
    text-align: center;
    height: calc(100vh - 104px);
`;
const ButtonContainer = styled.div`
    // height: 222px;
    width: 100%;
    position: absolute;
    bottom: 120px;
`;
const NextButton = styled.button`
    height: 56px;
    width: calc(100% - (16px * 2));
    margin-left: 16px;
    border-radius: 100px;
    background-color: #e0e0e0;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #ffffff;
    border: 0;
    outline: 0;
    &:hover{
        background-color: #3c50a5;
    }
    margin: 0;
    padding: 0;
`;
const PageNumImg = styled.img`
    text-align: center;
    padding-top: 0;
    padding-bottom: 23px;
`;
const SubTitle = styled.div`
    margin: 16px 0 0 16px;
    font-family: NotoSansKR;
    font-size: 20px;
    font-weight: 500;
    color: #333333;
    text-align: left;
    height: 45px;
`;
const CloseIcon = styled(TopContent)`
    text-decoration: none;
    position: absolute;
    top: 56px;
    right: 16px;
    width: 24px;
`;
const Calendar = styled.img`
    margin-top: 8px;
`;
const TimeCandidateContainer = styled.div`
    margin: 28px 16px 0 16px;
`;
const TimeCandidatesOneRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
`;
const TimeCandidate = styled.button`
    width: 160px;
    height: 56px;
    border-radius: 10px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    outline: 0;
    border: 0;
    font-family: NotoSansKR;
    font-size: 16px;
`;
const SelectedTimeCandidate = styled(TimeCandidate)`
    box-shadow: 0 0 10px 0 #ff5777;
    background-color: #fff2f2;
`;
const EmptySpace = styled.div`
    width: 24px;
`;