import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RECORD1 from '../components/img/record1.png';
import TRAINERICON from '../components/img/trainer_img.png';
import CLIPBOARD from '../components/icon/clipboardIcon.png';
import CLOCK from '../components/icon/clockIcon.png';

class OneSchedule extends React.Component {
    render() {
        return (
            <Container>                
                <div>
                    <Link to="/myClass">
                        <GoBackIcon>{'<'}</GoBackIcon>
                    </Link>                   
                    <Title>1회차</Title>
                </div>
                <ContainerContent>
                    <ClassDescriptionContainer>
                        <TopDescriptionContainer>
                            <DescriptionTitle>바른자세 맑은정신을 위한 운동! 지금 시작해보세요.</DescriptionTitle>
                            <TrainerDescription>
                                <TrainerIcon src={TRAINERICON}/>
                                <TrainerName>제니퍼 트레이너</TrainerName>
                            </TrainerDescription>
                        </TopDescriptionContainer>
                        <BottomDescriptionContainer>
                            <DescriptionOneRow>
                                <DescriptionIcon src={CLIPBOARD}/>
                                <Description>월요일 18:00 - 18:50 (50분)</Description>
                            </DescriptionOneRow>
                            <DescriptionOneRow>
                                <DescriptionIcon src={CLOCK}/>
                                <Description>
                                    <BoldDescription>1</BoldDescription>
                                    /10회차</Description>
                            </DescriptionOneRow>
                        </BottomDescriptionContainer>
                    </ClassDescriptionContainer>
                    <RecordsContainer>
                        <Schedule>
                            {'<'}<BlankChar/>
                            <BoldSchedule>1회차</BoldSchedule>
                            (01월 04일)<BlankChar/>{'>'} 
                        </Schedule>
                        <Record src={RECORD1}/>
                    </RecordsContainer>
                    <BlankSpace/>
                </ContainerContent>
            </Container>
        );
    }
}
export default OneSchedule;
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
    width: 168px;
    left: 164px;
`;
const DescriptionTitle = styled.div`
    font-family: NotoSansKR;
    text-align: left;
    font-size: 15.5px;
    font-weight: bold;
`;
const ContainerContent = styled.div`
    left: 0;
    position: absolute;
    top: 104px;
    width: 100%;
    text-align: center;
    height: calc(100vh - 104px);
`;
const ClassDescriptionContainer = styled.div`
    margin-left: 16px;
`;
const TopDescriptionContainer = styled.div`  
    width: 344px;    
    margin-top: 12px;
    padding-bottom: 16px;
    border-bottom: 1px solid #3f4fa5;
`;
const TrainerDescription = styled.div`
    margin-top: 16px;
    text-align: left;
    display: flex;
`;
const TrainerIcon = styled.img``;
const TrainerName = styled.div`
    font-family: NotoSansKR;
    font-size: 14px;
    color: #333333;
    margin-left: 8px;
    margin-top: 2px;
`;
const BottomDescriptionContainer = styled.div`
    margin-top: 16px;
`;
const DescriptionOneRow = styled.div`
    display: flex;
    margin-bottom: 16px;
`;
const DescriptionIcon = styled.img`
    margin-right: 8px;    
`;
const Description = styled.div`
    font-family: NotoSansKR;
    font-size: 16px;
`;
const BoldDescription = styled.div`
    font-family: NotoSansKR;
    font-size: 16px;
    color: #3f4fa5;
    display: inline;
    font-weight: bold;
`;
const RecordsContainer = styled.div``;
const Schedule = styled.div`
    background-color: rgba(63, 79, 165, 0.05);
    width: calc(100% - 16px);
    text-align: left;
    height: 24px;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    font-family: NotoSansKR;
    font-size: 16px;
    font-weight: bold;
    display: flex;
`;
const BoldSchedule = styled.div`
    display: inline;
    font-family: NotoSansKR;
    font-size: 16px;
    font-weight: bold;
    color: #3f4fa5;
`;
const BlankChar = styled.div`
    width: 12px;
`;
const Record = styled.img``;
const BlankSpace = styled.div`
    height: 84px;
`;