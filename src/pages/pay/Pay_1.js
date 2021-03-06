import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PAGENUMIMG_1 from '../../components/icon/pageNumImg_1.png';
import WEEK_CALENDAR from '../../components/img/calendar_week.svg';
import GO_BACK from '../../components/icon/go_back.png';
import CLOSE_ICON from '../../components/icon/close.png';

class Pay_1 extends React.Component {
  state = {
    selectedTime: null,
    startDate: '2020-01-04',
    timeArray: null,
    courseData: null,
  };
  componentWillMount() {
    const { location } = this.props;
    this.setState({
      courseData: location.state.courseData,
      timeArray: location.state.courseData.times.split(' '),
    });
  }
  render() {
    const handleTime1Click = () => {
      this.setState({ selectedTime: this.state.timeArray[0] });
    };
    const handleTime2Click = () => {
      this.setState({ selectedTime: this.state.timeArray[1] });
    };
    const handleTime3Click = () => {
      this.setState({ selectedTime: this.state.timeArray[2] });
    };
    const handleSelectedTimeClick = () => {
      this.setState({ selectedTime: null });
    };
    return (
      <Container>
        <div style={{width: '100%'}}>
          <Link
            to={{
              pathname: '/course/1/profile',
              state: {
                courseData: this.state.courseData,
              },
            }}
          >
            <GoBackIcon src={GO_BACK} />
          </Link>
          <Title>신청하기</Title>
          <Link
            to={{
              pathname: '/course/1/profile',
              state: {
                courseData: this.state.courseData,
              },
            }}
          >
            <CloseIcon src={CLOSE_ICON} />
          </Link>
        </div>
        <ContainerContent>
          <SubTitle>1. 희망 수업 시간을 선택해주세요!</SubTitle>
          <Calendar src={WEEK_CALENDAR} />
          {this.state.timeArray !== null && (
            <TimeCandidateContainer>
              <TimeCandidatesOneRow>
                {this.state.timeArray.length > 1 && (
                  <div>
                    {this.state.timeArray[0] === this.state.selectedTime ? (
                      <SelectedTimeCandidate onClick={handleSelectedTimeClick}>
                        {this.state.timeArray[0]}:00
                      </SelectedTimeCandidate>
                    ) : (
                      <TimeCandidate onClick={handleTime1Click}>
                        {this.state.timeArray[0]}:00
                      </TimeCandidate>
                    )}
                  </div>
                )}
                <EmptySpace />
                {this.state.timeArray.length > 2 && (
                  <div>
                    {this.state.timeArray[1] === this.state.selectedTime ? (
                      <SelectedTimeCandidate onClick={handleSelectedTimeClick}>
                        {this.state.timeArray[1]}:00
                      </SelectedTimeCandidate>
                    ) : (
                      <TimeCandidate onClick={handleTime2Click}>
                        {this.state.timeArray[1]}:00
                      </TimeCandidate>
                    )}
                  </div>
                )}
              </TimeCandidatesOneRow>
              <TimeCandidatesOneRow>
                {this.state.timeArray.length > 3 && (
                  <div>
                    {this.state.timeArray[2] === this.state.selectedTime ? (
                      <SelectedTimeCandidate onClick={handleSelectedTimeClick}>
                        {this.state.timeArray[2]}:00
                      </SelectedTimeCandidate>
                    ) : (
                      <TimeCandidate onClick={handleTime3Click}>
                        {this.state.timeArray[2]}:00
                      </TimeCandidate>
                    )}
                  </div>
                )}
              </TimeCandidatesOneRow>
            </TimeCandidateContainer>
          )}
          <ButtonContainer>
            <PageNumImg src={PAGENUMIMG_1} />
            {this.state.selectedTime === null ? (
              <Link to="/" onClick={(e) => e.preventDefault()}>
                <NextButtonDisable>다음</NextButtonDisable>
              </Link>
            ) : (
              <Link
                to={{
                  pathname: '/pay/2',
                  state: {
                    time: this.state.selectedTime,
                    start_date: this.state.startDate,
                    courseData: this.state.courseData,
                  },
                }}
              >
                <NextButtonAble>다음</NextButtonAble>
              </Link>
            )}
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
// const GoBackIcon = styled(TopContent)`
//   text-decoration: none;
//   position: absolute;
//   top: 56px;
//   left: 16px;
// `;
const GoBackIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 56px;
  left: 16px;
`;
const Title = styled(TopContent)`
  position: absolute;
  top: 56px;
  left: calc(100vw / 2 - 36px);
`;
const ContainerContent = styled.div`
  left: 0;
  position: absolute;
  top: 104px;
  width: 100%;
  text-align: center;
  height: calc(100vh - 104px);
`;
// const ButtonContainer = styled.div`
//   // height: 222px;
//   width: 100%;
//   position: absolute;
//   bottom: 120px;
// `;
const ButtonContainer = styled.div`
  // height: 222px;
  width: 100%;
  ${'' /* position: absolute; */}
  bottom: 120px;
  padding-bottom: 150px;
`;
const NextButton = styled.button`
  height: 56px;
  width: calc(100% - (16px * 2));
  margin-left: 16px;
  border-radius: 100px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  border: 0;
  outline: 0;
  margin: 0;
  padding: 0;
`;
const NextButtonDisable = styled(NextButton)`
  background-color: #e0e0e0;
`;
const NextButtonAble = styled(NextButton)`
  background-color: #3c50a5;
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
const CloseIcon = styled.img`
  ${'' /* text-decoration: none; */}
  position: absolute;
  top: 56px;
  right: 16px;
  width: 24px;
  height: 24px;
`;
const Calendar = styled.img`
  margin-top: 8px;
  width: 100%;
`;
const TimeCandidateContainer = styled.div`
  margin: 28px 16px 150px 16px;
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
