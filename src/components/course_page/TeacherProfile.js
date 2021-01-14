import React from 'react';
import styled from 'styled-components';
import TRAINER_IMG from '../img/trainer_large_img.png';
import INSTAGRAM_IMG from '../icon/instagram.png';
// import LIST_DOT_IMG from '../icon/list_dot.png';

function TeacherProfile({ location }) {
  const { teacher } = location.state.courseData;
  const teacherIntroductionText = teacher.information.split('\r\n');
  const careerArray = [teacher.career1, teacher.career2, teacher.career3];
  // const teacherIntroductionText1 = '안녕하세요. 필라테스 강사 제니퍼입니다!';
  // const teacherIntroductionText2 =
  //   '저는 한국체육대학교 출신으로 10년째 전문 필라테스 강사로 활동하고 있습니다. 현대에 많은 사람은 좋지 못한 자세를 가지고 있기에 여러가지 몸에 불편을 겪고 있기도 합니다. 하지만 필라테스를 통해 마음도 건강하게 만들어 드리겠습니다.';
  // const teacherIntroductionText3 =
  //   '믿고 맡겨주시는 만큼 최선을 다해서 회원님을 지도해 드리겠습니다. 감사합니다!';

  return (
    <Container>
      <TeacherProfileContainer>
        <TeacherPicture src={teacher.image} alt="" />
        <TeacherInformation>
          <TeacherName>{teacher.name} 트레이너</TeacherName>
          <TeacherInstagram>
            <InstagramImage src={INSTAGRAM_IMG} alt="" />
            <InstagramID>{teacher.instagram}</InstagramID>
          </TeacherInstagram>
        </TeacherInformation>
      </TeacherProfileContainer>
      <BoldLine />
      <TeacherIntroduction>
        <IntroductionHead>강사 소개</IntroductionHead>
        <IntroductionContent>
          {teacherIntroductionText.map((paragraph, index) => {
            return (
              <>{paragraph}<br /></>
            );
          })}
          {/* {teacherIntroductionText} */}
        </IntroductionContent>
      </TeacherIntroduction>
      <BoldLine />
      <TeacherCareer>
        <TeacherCareerHead>경력 사항</TeacherCareerHead>
        {careerArray.map((career, index) => {
          return (
            <TeacherCareerList key={index}>
              <CareerListDot />
              <CareerListText>{career}</CareerListText>
            </TeacherCareerList>
          );
        })}
      </TeacherCareer>
    </Container>
  );
}

const Container = styled.div``;

const TeacherProfileContainer = styled.div`
  display: flex;
  height: 15%;
`;

const TeacherPicture = styled.img`
  width: 56px;
  height: 56px;
  margin: 31px 10px 39px 14px;
  object-fit: contain;
  border-radius: 40px;
  border: solid 0 #828282;
`;

const TeacherInformation = styled.div`
  height: 100%;
`;

const TeacherName = styled.div`
  width: 107px;
  height: 24px;
  margin: 30px 20px 8px 9px;
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  text-align: left;
  color: #333333;
`;

const TeacherInstagram = styled.div`
  display: flex;
  height: 40%;
`;

const InstagramImage = styled.img`
  width: 16px;
  height: 16px;
  margin: 2px 8px 48px 9px;
`;

const InstagramID = styled.div`
  font-family: NotoSansKR;
  font-weight: normal;
  font-size: 12px;
  font-style: normal;
  text-align: left;
  color: #333333;
`;

const BoldLine = styled.div`
  height: 8px;
  margin: 0;
  background-color: rgba(60, 80, 165, 0.1);
`;

const TeacherIntroduction = styled.div``;

const IntroductionHead = styled.div`
  width: 63px;
  height: 24px;
  margin: 30px 9px 16px 16px;
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  text-align: left;
  color: #000000;
`;

const IntroductionContent = styled.div`
  width: 343px;
  ${'' /* height: 240px; */}
  margin: 16px 16px 40px;
  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.71;
  font-style: normal;
  text-align: left;
  color: #333333;
`;

const TeacherCareer = styled.div`
  padding-bottom: 50%;
`;

const TeacherCareerHead = styled.div`
  width: 90%;
  height: 24px;
  margin: 30px 0px 12px 16px;
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  text-align: left;
  color: #000000;
`;

const TeacherCareerList = styled.div`
  display: flex;
`;

const CareerListDot = styled.div`
  width: 8px;
  height: 8px;
  margin: 12px 16px 12px 32px;
  background-color: #3f4fa5;
  border-radius: 50%;
`;

const CareerListText = styled.div`
  width: 80%;
  height: 24px;
  margin: 4px 0px 10px 1px;
  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: #333333;
`;

export default TeacherProfile;