import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PAGENUMIMG_4 from '../../components/icon/pageNumImg_4.png';
import ALERTICON from '../../components/icon/alert.png';

class Pay_4 extends React.Component {
  state = {
    time: null,
    start_date: '2020-01-04',
    package_count: null,
    finalPrice: '50,700',
    depositName: '',
    courseData: null,
  };
  componentDidMount() {
    const { location } = this.props;
    this.setState({
      time: location.state.time,
      package_count: location.state.package_count,
      finalPrice: location.state.finalPrice,
      courseData: location.state.courseData,
    });
  }
  render() {
    const { location } = this.props;
    const handleNameInputChange = (e) => {
      this.setState({
        depositName: e.target.value,
      });
    };
    return (
      <Container>
        <div>
          <Link
            to={{
              pathname: '/pay/3',
              state: {
                time: this.state.time,
                package_count: this.state.package_count,
                courseData: this.state.courseData,
              },
            }}
          >
            <GoBackIcon>{'<'}</GoBackIcon>
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
            <CloseIcon>{'X'}</CloseIcon>
          </Link>
        </div>
        <ContainerContent>
          <ContentContainer>
            <TotalPriceTitle>총 결제금액</TotalPriceTitle>
            <TotalPriceContent>
              <TotalPrice>{this.state.finalPrice}</TotalPrice>
              <TotalPriceUnit>원</TotalPriceUnit>
            </TotalPriceContent>
            <Line />
            <ContentOneLine>
              <ContentTitle>계좌번호</ContentTitle>
              <Content>신한은행 110-123-456789</Content>
            </ContentOneLine>
            <ContentOneLine>
              <ContentTitle>계좌명</ContentTitle>
              <Content>주식회사 찾트</Content>
            </ContentOneLine>
            <Line />
            <ContentOneLine>
              <ContentTitle>입금자명</ContentTitle>
              <NameInputBox
                onChange={handleNameInputChange}
                type="text"
                placeholder="이름"
              />
            </ContentOneLine>
          </ContentContainer>
          <AlertIcon src={ALERTICON} />
          <AlertText>2020.01.05 까지 미입금시 자동 취소됩니다.</AlertText>
          <ButtonContainer>
            <PageNumImg src={PAGENUMIMG_4} />
            {this.state.depositName === '' ? (
              <Link to="/" onClick={(e) => e.preventDefault()}>
                <NextButtonDisable>확인</NextButtonDisable>
              </Link>
            ) : (
              <Link
                to={{
                  pathname: '/pay/5',
                  state: {
                    time: this.state.time,
                    finalPrice: this.state.finalPrice,
                    depositName: this.state.depositName,
                    package_count: this.state.package_count,
                    courseData: this.state.courseData,
                  },
                }}
              >
                <NextButtonAble>확인</NextButtonAble>
              </Link>
            )}
          </ButtonContainer>
        </ContainerContent>
      </Container>
    );
  }
}
export default Pay_4;
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
  position: absolute;
  bottom: 120px;
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
const ContentContainer = styled.div`
  width: calc(100% - (32px * 2));
  margin: 16px 0 0 16px;
  padding: 32px 16px 48px 16px;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  text-align: left;
`;
const Line = styled.div`
  margin: 32px 0 32px 0;
  background-color: rgba(63, 79, 165, 0.4);
  height: 1px;
`;
const TotalPriceTitle = styled.div`
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: bold;
  height: 24px;
`;
const TotalPriceContent = styled.div`
  display: flex;
  height: 48px;
  font-family: NotoSansKR;
  font-weight: bold;
  margin-top: 8px;
`;
const TotalPrice = styled.div`
  font-size: 40px;
  color: #3f4fa5;
`;
const TotalPriceUnit = styled.div`
  font-size: 32px;
  margin-top: 6px;
  margin-left: 4px;
`;
const ContentTitle = styled.div`
  font-family: NotoSansKR;
  font-size: 16px;
  text-align: left;
  color: #828282;
`;
const Content = styled.div`
    font-family: NotoSansKR;
    font-size: 16px;
    text-align: right;
    position: absolute;
    right: 32px;
    color: #333333;8
`;
const ContentOneLine = styled.div`
  display: flex;
  width: calc(100% - px);
  margin-bottom: 8px;
`;
const NameInputBox = styled.input`
  text-align: right;
  position: absolute;
  right: 32px;
  width: 112px;
  height: 24px;
  border-radius: 8px;
  border: solid 1px #3f4fa5;
  padding: 8px 16px 8px 16px;
  font-family: NotoSansKR;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    text-align: right;
    font-family: NotoSansKR;
    font-size: 16px;
    color: #828282;
  }
`;
const AlertIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 16px;
  margin-top: 24px;
`;
const AlertText = styled.div`
  font-family: NotoSansKR;
  font-size: 14px;
  color: #ff5777;
  height: 22px;
  position: absolute;
  left: 48px;
  text-align: left;
  margin-top: 26px;
`;
const CloseIcon = styled(TopContent)`
  text-decoration: none;
  position: absolute;
  top: 56px;
  right: 16px;
  width: 24px;
`;
