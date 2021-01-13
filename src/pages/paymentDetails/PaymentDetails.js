import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HashTagRow from '../../components/HashTagRow';
import DescriptionRow from '../../components/DescriptionRow';
import TeacherRow from '../../components/TeacherRow';
import CLOCK_ICON from '../../components/icon/clock.png';
import MAP_PIN_ICON from '../../components/icon/map-pin.png';

export default function PaymentDetails (){
    return (
        <Container>
            <div>
                <Link to="/"> {/* 후에 수정 */}
                    <GoBackIcon>{'<'}</GoBackIcon>
                </Link>                   
                <Title>결제 내역</Title>
            </div>
            <ContainerContent>
                <Link to="/paymentDetails/detail">
                    <CourseContainer>
                        <PaymentInfoContainer>
                            <Price>202,800원</Price>
                            <ClassCount>4회</ClassCount>
                            <PaymentState>결제 확인 중</PaymentState>
                        </PaymentInfoContainer>
                        <HashTagRow></HashTagRow>
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
                        <DescriptionRow></DescriptionRow>
                        <TeacherRow></TeacherRow>
                    </CourseContainer>
                </Link>
                <ButtonContainer>
                    <Link to="/paymentDetails/all">
                        <ToAllButton>전체 구매 내역</ToAllButton>
                    </Link>
                </ButtonContainer>
            </ContainerContent>
        </Container>
    );
}
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
    width: 100%;
    position: absolute;
    bottom: 168px;
`;
const ToAllButton = styled.div`
    font-family: NotoSansKR;
    font-size: 16px;
    color: #3f4fa5;
    font-weight: 500;
`;
const CourseContainer = styled.div`
  width: calc(100% - 48px);
  height: 192px;
  margin: 16px;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  padding: 1% 0 0 4%;
  justify-content: space-evenly;
`;
const PaymentInfoContainer = styled.div`
    display: flex;
    position: relative;
`;
const Price = styled.div`
    font-family: NotoSansKR;
    font-size: 18px;
    font-weight: bold;
    height: 24px;
    color: #666666;
    padding-right: 16px;
    border-right: 1px solid #bdbdbd;
`;
const ClassCount = styled.div`
    font-family: NotoSansKR;
    font-size: 18px;
    font-weight: bold;
    color: #666666;
    padding-left: 16px;
`;
const PaymentState = styled.div`
    position: absolute;
    right: 16px;
    font-family: NotoSansKR;
    font-size: 14px;
    font-weight: bold;
    color: #3c50a5;
    margin-top: 2px;
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