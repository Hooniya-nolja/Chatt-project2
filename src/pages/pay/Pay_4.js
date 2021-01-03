import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PAGENUMIMG_4 from '../../components/icon/pageNumImg_4.png';

class Pay_4 extends React.Component {
    render() {
        return (
            <Container>
                <div>
                    <Link to="/pay/3">
                        <GoBackIcon>{'<'}</GoBackIcon>
                    </Link>                   
                    <Title>예약하기</Title>
                </div>
                <ContainerContent>
                    <ContentContainer>
                        <div>안녕</div>
                    </ContentContainer>
                    <ButtonContainer>
                        <PageNumImg src={PAGENUMIMG_4}/>
                        <Link to="/pay/5">
                            <NextButton>다음</NextButton>
                        </Link>
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
const ContentContainer = styled.div`
    width: calc(100% - (16px * 2));
    margin: 16px 0 0 16px;
    padding: 0;
    border-radius: 10px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    text-align: left;
`;