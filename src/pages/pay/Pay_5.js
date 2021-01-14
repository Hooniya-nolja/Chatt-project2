import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import qs from 'querystring';
import { useCookies } from 'react-cookie';
import COMPLETED_IMG from '../../components/img/예약완료.png';

class Pay_5 extends React.Component {
    state = {
        time: null,
        start_date: "2020-01-04",
        package_count: null,
        finalPrice: "50,700",
        depositName: "",
        day: 2,
        courseData: null,
    }
    componentDidMount() {
        const { location } = this.props;
        this.setState({
            time: location.state.time,
            package_count: location.state.package_count, 
            finalPrice: location.state.finalPrice, 
            depositName: location.state.depositName, 
            courseData: location.state.courseData,
        });
    }
    render() {
        const handlePayButtonClick = () => {
            axios({
                method: 'post', url: "https://www.chatt-training.com/api/course/4/reserve/",
                data: qs.stringify({
                    day: this.state.day,
                    time: this.state.time,
                    package_count: this.state.package_count,
                    start_date: this.state.start_date,
                }),
            })
            .then ((response) => {
                alert('신청되었습니다!');
            })
            .catch (() => {
                alert('신청을 위해서는 로그인이 필요합니다!');
            })
        }
        async function getIsLoggedIn() {
            const { data } = await axios.get('https://www.chatt-training.com/api/user/check-authentication/');
            console.log(data);
          }
        getIsLoggedIn();
        return (
            <Container>
                <div>
                    <Link 
                        to={{
                            pathname: "/pay/4",
                            state: {
                                time: this.state.time,
                                package_count: this.state.package_count,
                                finalPrice: this.state.finalPrice,
                                courseData: this.state.courseData,
                            },
                        }}
                        >
                        <GoBackIcon>{'<'}</GoBackIcon>
                    </Link> 
                    <Link 
                        to={{
                            pathname: "/course/1/profile",
                            state: {
                                courseData: this.state.courseData,
                            },
                        }}
                        >
                        <CloseIcon>{'X'}</CloseIcon>
                    </Link>                   
                    <Title>신청완료</Title>
                </div>
                <ContainerContent>
                    <ContentContainer>
                        <CompletedImg src={COMPLETED_IMG}/>
                        <DescriptionContainer>
                            <Description>신청해주셔서 감사합니다.</Description>
                            <Description>2021.01.05 까지 미입금시 자동 취소됩니다.</Description>
                        </DescriptionContainer>
                        <Line/>
                        <ContentOneLine>
                            <ContentTitle>결제금액</ContentTitle>
                            <Content>{this.state.finalPrice}</Content>
                        </ContentOneLine>
                        <ContentOneLine>
                            <ContentTitle>계좌번호</ContentTitle>
                            <Content>신한은행 110-123-456789</Content>
                        </ContentOneLine>
                        <ContentOneLine>
                            <ContentTitle>계좌명</ContentTitle>
                            <Content>주식회사 찾트</Content>
                        </ContentOneLine>
                        <ContentOneLine>
                            <ContentTitle>입금자명</ContentTitle>
                            <Content>{this.state.depositName}</Content>
                        </ContentOneLine>
                    
                    </ContentContainer>
                    <ButtonContainer>
                        <Link to="/"> {/* 후에 수정 */}
                            <NextButton onClick={handlePayButtonClick}>완료</NextButton>
                        </Link>
                    </ButtonContainer>
                </ContainerContent>
            </Container>
        );
    }
}
export default Pay_5;
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
const ContentContainer = styled.div`
    width: calc(100% - (16px * 2));
    margin: 16px 0 0 16px;
    padding: 236px 0 16px 0;
    border-radius: 10px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    text-align: left;
`;
const Line = styled.div`
    margin: 16px 16px 16px 16px;
    background-color: rgba(63, 79, 165, 0.4);
    height: 1px;
`;
const ContentTitle = styled.div`
    font-family: NotoSansKR;
    font-size: 16px;
    text-align: left;
    margin-left: 16px;
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
const Description = styled.div`
    font-family: NotoSansKR;
    font-size: 14px;
    color: #828282;
    text-align: center;
`;
const CompletedImg = styled.img`
    width: 180px;
    position: absolute;
    left: calc( (100% - 180px) / 2);
    top: 40px;
    text-align: center;
`;
const DescriptionContainer = styled.div`
    margin-top: 48px;
`;
const GoBackIcon = styled(TopContent)`
    text-decoration: none;
    position: absolute;
    top: 56px;
    left: 16px;
`;