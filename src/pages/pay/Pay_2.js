import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PAGENUMIMG_2 from '../../components/icon/pageNumImg_2.png';
import STAR_1 from '../../components/icon/별1.svg';
import STAR_2 from '../../components/icon/별2.svg';
import STAR_3 from '../../components/icon/별3.svg';
import SELECTED_STAR_1 from '../../components/icon/별1-1.svg';
import SELECTED_STAR_2 from '../../components/icon/별2-1.svg';
import SELECTED_STAR_3 from '../../components/icon/별3-1.svg';
import GO_BACK from '../../components/icon/go_back.png';
import CLOSE_ICON from '../../components/icon/close.png';

class Pay_2 extends React.Component {
  state = {
    time: 0,
    start_date: '2020-01-04',
    starNum: 0,
    userState: '',
    courseData: null,
  };
  componentDidMount() {
    const { location } = this.props;
    this.setState({
      start_date: location.state.start_date,
      time: location.state.time,
      courseData: location.state.courseData,
    });
  }
  render() {
    const { location } = this.props;
    const handleStar1Click = () => {
      this.setState({ starNum: 1 });
    };
    const handleStar2Click = () => {
      this.setState({ starNum: 2 });
    };
    const handleStar3Click = () => {
      this.setState({ starNum: 3 });
    };
    const handleSelectedStarClick = () => {
      this.setState({ starNum: 0 });
    };
    const handleInputChange = (e) => {
      this.setState({ userState: e.target.value });
    };
    return (
      <Container>
        <div>
          <Link
            to={{
              pathname: '/pay/1',
              state: {
                start_date: this.state.start_date,
                time: this.state.time,
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
          <SubTitle>2. 트레이너에게 알려주세요!</SubTitle>
          <BoldLine />
          <StarContainer>
            <OneStar>
              {this.state.starNum === 1 ? (
                <StarIcon
                  onClick={handleSelectedStarClick}
                  src={SELECTED_STAR_1}
                />
              ) : (
                <StarIcon onClick={handleStar1Click} src={STAR_1} />
              )}
              <StarLevel>초보</StarLevel>
            </OneStar>
            <OneStar>
              {this.state.starNum === 2 ? (
                <StarIcon
                  onClick={handleSelectedStarClick}
                  src={SELECTED_STAR_2}
                />
              ) : (
                <StarIcon onClick={handleStar2Click} src={STAR_2} />
              )}
              <StarLevel>중수</StarLevel>
            </OneStar>
            <OneStar>
              {this.state.starNum === 3 ? (
                <StarIcon
                  onClick={handleSelectedStarClick}
                  src={SELECTED_STAR_3}
                />
              ) : (
                <StarIcon onClick={handleStar3Click} src={STAR_3} />
              )}
              <StarLevel>고수</StarLevel>
            </OneStar>
          </StarContainer>
          <InputArea
            value={this.state.userState}
            onChange={handleInputChange}
            placeholder="예) 이제 운동을 막 시작한 헬린이입니다ㅜㅜ"
          />
          <ButtonContainer>
            <PageNumImg src={PAGENUMIMG_2} />
            {this.state.starNum === 0 || this.state.userState === '' ? (
              <Link to="/" onClick={(e) => e.preventDefault()}>
                <NextButtonDisable>다음</NextButtonDisable>
              </Link>
            ) : (
              <Link
                to={{
                  pathname: '/pay/3',
                  state: {
                    start_date: this.state.startDate,
                    time: this.state.time,
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
export default Pay_2;
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
const BoldLine = styled.div`
  height: 8px;
  margin: 0;
  background-color: rgba(60, 80, 165, 0.1);
`;
const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: calc((100% - ((2 * 10%) + (3 * 64px))) / 2);
  padding-top: 32px;
`;
const StarIcon = styled.img`
  width: 64px;
  height: 64px;
  padding: 0;
  margin: 0;
`;
const StarLevel = styled.div`
  margin-top: 16px;
  font-family: NotoSansKR;
  font-size: 14px;
`;
const OneStar = styled.div`
  display: flex;
  flex-direction: column;
  width: 64px;
  padding-right: 10%;
`;
const InputArea = styled.textarea`
  margin-top: 32px;
  margin-bottom: 100px;
  width: calc(100% - 64px);
  padding: 16px 16px 16px 16px;
  height: 120px;
  border: none;
  border-radius: 10px;
  background-color: #f8f8f8;
  font-family: NotoSansKR;
  font-size: 14px;
  color: #333333;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: NotoSansKR;
    font-size: 14px;
    color: #bdbdbd;
  }
`;
const CloseIcon = styled.img`
  ${'' /* text-decoration: none; */}
  position: absolute;
  top: 56px;
  right: 16px;
  width: 24px;
  height: 24px;
`;
