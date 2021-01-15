import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HashTagRow from '../../components/HashTagRow';
import DescriptionRow from '../../components/DescriptionRow';
import TeacherRow from '../../components/TeacherRow';
import CLOCK_ICON from '../../components/icon/clock.png';
import MAP_PIN_ICON from '../../components/icon/map-pin.png';
import { courseListAPI } from '../../api';

class PaymentDetailsAllDetail extends React.Component {
    state = { courseData: null }
    componentWillMount() {
        const doAPI = async () => {
            const response = await courseListAPI();
            this.setState({courseData: response.data[0][1]});
        }
        doAPI();
    }
    render() {
        return (
            this.state.courseData !== null &&
                <Container>
                    <div>
                        <Link to="/paymentDetails/all"> {/* 후에 수정 */}
                            <GoBackIcon>{'<'}</GoBackIcon>
                        </Link>                   
                        <Title>전체 신청내역</Title>
                        <Link to="/paymentDetails/all"> {/* 후에 수정 */}
                                <CloseIcon>{'X'}</CloseIcon>
                        </Link>
                    </div>
                    <ContainerContent>
                        <CourseContainer>
                            <HashTagRow 
                                isVisit={this.state.courseData.isVisit}
                                hashTagArray={[this.state.courseData.tag1, this.state.courseData.tag2, this.state.courseData.tag3]}
                            />
                            <TimeAndPlaceContainer>
                            <Time>
                                <TimePlaceIconBox>
                                    <img src={CLOCK_ICON} alt=''/>
                                </TimePlaceIconBox>
                                18시
                            </Time>
                            <Place>
                                <TimePlaceIconBox>
                                    <img src={MAP_PIN_ICON} alt=''/>
                                </TimePlaceIconBox>
                                서울시 마포구
                            </Place>
                            </TimeAndPlaceContainer>
                            <DescriptionRow description={this.state.courseData.name}/>
                            <TeacherRow teacher={this.state.courseData.teacher}/>
                        </CourseContainer>
                        <PriceDetailContainer>
                            <PriceDetailRow>
                                <PriceDetailTitle>1회 가격</PriceDetailTitle>
                                <PriceDetailDescription>84,500원</PriceDetailDescription>
                            </PriceDetailRow>
                            <PriceDetailRow>
                                <PriceDetailTitle>수업횟수</PriceDetailTitle>
                                <PriceDetailDescription>1</PriceDetailDescription>
                            </PriceDetailRow>
                            <PriceDetailRow>
                                <PriceDetailTitle>프로모션 할인 : 첫 등록 40% 특가</PriceDetailTitle>
                                <PromotionDiscount>-33,800원</PromotionDiscount>
                            </PriceDetailRow>
                        </PriceDetailContainer>
                        <FinalPriceContainer>
                            <FinalPriceTitle>결제금액</FinalPriceTitle>
                            <FinalPrice>50,700원</FinalPrice>
                        </FinalPriceContainer>
                    </ContainerContent>
                </Container>
        );
    }
}
export default PaymentDetailsAllDetail;
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
const CloseIcon = styled(TopContent)`
    text-decoration: none;
    position: absolute;
    top: 56px;
    right: 16px;
    width: 24px;
`;
const Title = styled(TopContent)`
    position: absolute;
    top: 56px;
    left: calc((100% - 168px)/2);
    width: 168px;
    text-align: center;
`;
const ContainerContent = styled.div`
    left: 0;
    position: absolute;
    top: 104px;
    width: 100%;
    text-align: center;
    height: calc(100vh - 104px);
`;
const CourseContainer = styled.div`
  width: calc(100% - 48px);
  height: 160px;
  margin: 16px;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  padding: 1% 0 0 4%;
  justify-content: space-evenly;
`;
const TimeAndPlaceContainer = styled.div`
    display: flex;
`;
const TimeAndPlace = styled.div`
    align-items: center;
    display: flex;
    margin-right: 3%;
    height: 32px;
    border-radius: 4px;
    background-color: #f8f8f8;
    object-fit: contain;
    font-family: NotoSansKR;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: left;
    color: #333333;
`;
const Time = styled(TimeAndPlace)`
    width: 64px;
`;
const Place = styled(TimeAndPlace)`
    width: 112px;
`;
const TimePlaceIconBox = styled.div`
    margin: 2% 7% 0 7%;
`;
const PriceDetailContainer = styled.div`
    padding: 16px 32px; 32px 32px;
`;
const FinalPriceContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 56px;
    background-color: rgba(60, 80, 165, 0.05);
`;
const FinalPriceTitle = styled.div`
    font-family: NotoSansKR;
    font-size: 16px;
    font-weight: bold;
    color: #333333;
    padding-top: 16px;
    padding-left: 32px;
`;
const FinalPrice = styled.div`
    font-family: NotoSansKR;
    font-size: 20px;
    font-weight: bold;
    color: #3c50a5;
    position: absolute;
    right: 0;
    padding-top: 12px;
    padding-right: 32px;
`;
const PriceDetailRow = styled.div`
    display: flex;
    position: relative;
    padding-bottom: 16px;
`;
const PriceDetailTitle = styled.div`
    font-family: NotoSansKR;
    font-size: 14px;
    color: #333333;
`;
const PriceDetailDescription = styled.div`
    font-family: NotoSansKR;
    font-size: 16px;
    color: #333333;
    position: absolute;
    right: 0;
    font-weight: 500;
`;
const PromotionDiscount = styled(PriceDetailDescription)`
    color: #ff5777;
`;