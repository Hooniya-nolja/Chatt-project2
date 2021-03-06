import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PAGENUMIMG_3 from '../../components/icon/pageNumImg_3.png';
import PLUSBUTTON from '../../components/icon/plus.png';
import MINUSBUTTON from '../../components/icon/minus.png';
import Course from '../../components/Course';
import GO_BACK from '../../components/icon/go_back.png';
import CLOSE_ICON from '../../components/icon/close.png';

class Pay_3 extends React.Component {
  state = {
    time: null,
    start_date: null,
    package_count: 1,
    finalPrice: '50,700',
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
    const handlePlusButtonClick = () => {
      this.setState({ package_count: 10, finalPrice: '507,000' });
    };
    const handleMinusButtonClick = () => {
      this.setState({ package_count: 1, finalPrice: '50,700' });
    };
    return (
      <Container>
        <div>
          <Link
            to={{
              pathname: '/pay/2',
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
          <SubTitle>3. 결제하실 수업료입니다!</SubTitle>
          <BoldLine />
          {this.state.courseData !== null ? (
            <Course courseData={this.state.courseData} />
          ) : (
            <EmptyCourse />
          )}
          <DescriptionContainer>
            <EachDescriptionContainer>
              <DescriptionTitle>1회 가격</DescriptionTitle>
              <Price>84,500원</Price>
            </EachDescriptionContainer>
            <EachDescriptionContainer>
              <DescriptionTitle>수업 횟수</DescriptionTitle>
              <ClassCountContainer>
                <CountButton src={PLUSBUTTON} onClick={handlePlusButtonClick} />
                <ClassCount>{this.state.package_count}</ClassCount>
                <CountButton
                  src={MINUSBUTTON}
                  onClick={handleMinusButtonClick}
                />
              </ClassCountContainer>
            </EachDescriptionContainer>
            <EachDescriptionContainer>
              <DescriptionTitle>프로모션 할인 : 새해 40% 특가</DescriptionTitle>
              {this.state.package_count == 1 ? (
                <Discount>-33,800원</Discount>
              ) : (
                <Discount>-338,000원</Discount>
              )}
              <Discount>-33,800원</Discount>
            </EachDescriptionContainer>
          </DescriptionContainer>
          <FinalPriceContainer>
            <FinalPriceTitle>결제 금액</FinalPriceTitle>
            {this.state.package_count == 1 ? (
              <FinalPrice>50,700원</FinalPrice>
            ) : (
              <FinalPrice>507,000원</FinalPrice>
            )}
          </FinalPriceContainer>
          <ButtonContainer>
            <PageNumImg src={PAGENUMIMG_3} />
            <Link
              to={{
                pathname: '/pay/4',
                state: {
                  time: this.state.time,
                  start_date: this.state.start_date,
                  package_count: this.state.package_count,
                  finalPrice: this.state.finalPrice,
                  courseData: this.state.courseData,
                },
              }}
            >
              <NextButton>다음</NextButton>
            </Link>
          </ButtonContainer>
        </ContainerContent>
      </Container>
    );
  }
}
export default Pay_3;
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
  background-color: #3c50a5;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  border: 0;
  outline: 0;
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
const BoldLine = styled.div`
  height: 8px;
  margin: 0;
  background-color: rgba(60, 80, 165, 0.1);
`;
const DescriptionContainer = styled.div`
  width: calc(100% - 48px);
  height: 160px;
  margin: 16px 16px 32px 16px;
  display: flex;
  flex-direction: column;
  padding: 1% 0 0 4%;
  text-align: left;
  height: auto;
`;
const DescriptionTitle = styled.div`
  font-family: NotoSansKR;
  font-size: 14px;
  margin-top: 3px;
`;
const EachDescriptionContainer = styled.div`
  display: flex;
  margin-top: 16px;
`;
const Price = styled.div`
  font-family: NotoSansKR;
  font-size: 16px;
  position: absolute;
  right: 32px;
`;
const ClassCountContainer = styled.div`
  position: absolute;
  right: 32px;
  display: flex;
`;
const ClassCount = styled.div`
  font-family: NotoSansKR;
  font-size: 16px;
  margin: 0 8px 0 8px;
`;
const CountButton = styled.img``;
const Discount = styled.div`
  font-family: NotoSansKR;
  font-size: 16px;
  color: #ff5777;
  position: absolute;
  right: 32px;
`;
const FinalPriceContainer = styled.div`
  display: flex;
  height: 40px;
  background-color: rgba(60, 80, 165, 0.05);
  padding-top: 16px;
  margin-bottom: 150px;
`;
const FinalPriceTitle = styled.div`
  font-family: NotoSansKR;
  font-size: 16px;
  position: absolute;
  left: 16px;
  font-weight: bold;
`;
const FinalPrice = styled.div`
  font-weight: bold;
  font-family: NotoSansKR;
  font-size: 20px;
  color: #3c50a5;
  position: absolute;
  right: 16px;
`;
const CloseIcon = styled.img`
  ${'' /* text-decoration: none; */}
  position: absolute;
  top: 56px;
  right: 16px;
  width: 24px;
  height: 24px;
`;

const EmptyCourse = styled.div`
  height: 160px;
  background-color: white;
  padding: 1% 0 0 4%;
  margin: 16px;
`;
