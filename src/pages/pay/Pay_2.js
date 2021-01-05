import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PAGENUMIMG_2 from '../../components/icon/pageNumImg_2.png';
import STAR_1 from '../../components/icon/별1.png';
import STAR_2 from '../../components/icon/별2.png';
import STAR_3 from '../../components/icon/별3.png';
import SELECTED_STAR_1 from '../../components/icon/별1_R.png';
import SELECTED_STAR_2 from '../../components/icon/별2_R.png';
import SELECTED_STAR_3 from '../../components/icon/별3_R.png';

function Pay_2 (){
    const [starNum, setStarNum] = useState(0);
    function handleStar1Click(){
        setStarNum(1);
    }
    function handleStar2Click(){
        setStarNum(2);
    }
    function handleStar3Click(){
        setStarNum(3);
    }
    function handleSelectedStarClick(){
        setStarNum(0);
    }
    return (
        <Container>
            <div>
                <Link to="/pay/1">
                    <GoBackIcon>{'<'}</GoBackIcon>
                </Link>                   
                <Title>예약하기</Title>
                <Link to="/"> {/* 후에 수정 */}
                        <CloseIcon>{'X'}</CloseIcon>
                </Link>
            </div>
            <ContainerContent>
                <SubTitle>2. 트레이너에게 알려주세요!</SubTitle>
                <BoldLine/>
                <StarContainer>
                    <OneStar>
                        { starNum === 1 
                            ? <StarIcon onClick={handleSelectedStarClick} src={SELECTED_STAR_1}/> 
                            : <StarIcon onClick={handleStar1Click} src={STAR_1}/> }
                        <StarLevel>초보</StarLevel>
                    </OneStar>
                    <OneStar>
                        { starNum === 2
                            ? <StarIcon onClick={handleSelectedStarClick} src={SELECTED_STAR_2}/> 
                            : <StarIcon onClick={handleStar2Click} src={STAR_2}/> }
                        <StarLevel>중수</StarLevel>
                    </OneStar>
                    <OneStar>
                        { starNum === 3 
                            ? <StarIcon onClick={handleSelectedStarClick} src={SELECTED_STAR_3}/> 
                            : <StarIcon onClick={handleStar3Click} src={STAR_3}/> }
                        <StarLevel>고수</StarLevel>
                    </OneStar>
                </StarContainer>
                <InputArea placeholder="예) 이제 운동을 막 시작한 헬린이입니다ㅜㅜ"/>
                <ButtonContainer>
                    <PageNumImg src={PAGENUMIMG_2}/>
                    <Link to="/pay/3">
                        <NextButton>다음</NextButton>
                    </Link>
                 </ButtonContainer>
            </ContainerContent>
        </Container>
    );
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
const BoldLine = styled.div`
    height: 8px;
    margin: 0;
    background-color: rgba(60, 80, 165, 0.1);
`;
const StarContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: calc( (100% - ((2*10%) + (3*64px)) ) /2);
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
    width: calc(100% - 64px);
    padding: 16px 16px 16px 16px;
    height: 120px;
    border: none;
    border-radius: 10px;
    background-color: #f8f8f8;
    font-family: NotoSansKR;
    font-size: 14px;
    color: #333333;
    &:focus{
        outline: none;
    }
    &::placeholder{
        font-family: NotoSansKR;
        font-size: 14px;
        color: #bdbdbd;
    }
`;
const CloseIcon = styled(TopContent)`
    text-decoration: none;
    position: absolute;
    top: 56px;
    right: 16px;
    width: 24px;
`;