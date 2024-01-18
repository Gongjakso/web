import React from 'react';
import * as S from './HomePageStyled';
import useCustomNavigate from '../../hooks/useNavigate';
import calendarImage from '../../assets/images/calendar.png';
import teamBuildingImage from '../../assets/images/teambuilding.png';

const HomePage = () => {
  const { goToPage } = useCustomNavigate();
  const handleButtonClick = (path) => {
    goToPage(path);
  };

  return (
    <>
      <S.HomeContent>
        <h2 style ={{letterSpacing:'-2px'}}> 공모전/프로젝트, 어떻게 시작해야할지 막막하셨나요? </h2>
        <h2 style ={{marginTop: '0.5px', letterSpacing:'-2px'}}> 공작소에서 원하는 사람들과 시작해보세요 !</h2>
        
        <div style={{marginTop: '20px', marginBottom: '20px'}}> 공모전 슬라이드 배너 </div>

        <S.BoxContainer>
          <S.Box> <div> 😔 공모전은 처음인데 어떻게 시작해야 하나요 </div> </S.Box>
          <S.Box> <div> 😔 학교 밖 사람들과 프로젝트를 해보고 싶어요 </div> </S.Box>
        
        </S.BoxContainer>
        <S.BoxContainer>
            <S.Box> <div> 🙁 친구랑 같이 하기엔 놀기만 할 것 같아요 </div> </S.Box>
            <S.Box> <div> 🤯 사이드 프로젝트를 찾고 싶어요 </div> </S.Box>
        </S.BoxContainer>

        <S.Button>
          <S.Button1 onClick={() => handleButtonClick('/contest')}> 공모전 공고 바로가기 </S.Button1>
          <S.Button2 style={{marginLeft: '30px'}} onClick={() => handleButtonClick('/project')}> 프로젝트 공고 바로가기 </S.Button2>
        </S.Button>
      </S.HomeContent>
    
      <S.HomeContent1>
        <h2 style={{color: 'white', letterSpacing:'-2px', marginTop: '150px'}}>📍다양한 유형의 팀빌딩 서비스 지원</h2>
        <S.Wrapper>
          <p> 로그인 후 '팀 빌딩' 탭을 들어가면 팀장으로 팀을 꾸릴 수 있습니다! </p>
          <p> 오프라인 회의를 선호하는 이들을 위해서 시/군/구의 정보를 선택하여 해당 지역에서 회의하는 공모전 팀을 모아볼 수 있습니다.</p>
          <S.ImageBox>
            <div>
              <S.Box style={{backgroundColor:'#CCCCCC', width: 120, borderRadius:0, height: 120}}>
                3D 이미지
              </S.Box>
              <p>팀장으로 모집하기</p>
            </div>
            <div>
              <img src={teamBuildingImage} alt='팀원 지원 이미지' style={{width: 100, height:'auto', marginTop: '20px', marginBottom: '20px'}} />
              <p>팀원으로 지원하기</p>
            </div>
            <div>
              <S.Box style={{backgroundColor:'#CCCCCC', width: 120, borderRadius:0, height: 120}}>
                3D 이미지
              </S.Box>
              <p>지역으로 팀 찾기</p>
            </div>
          </S.ImageBox>
        </S.Wrapper>
        <S.Button1 onClick={() => handleButtonClick('/teambuilding')}> 팀빌딩 바로가기 </S.Button1>
      </S.HomeContent1>

      <S.HomeContent2>
        <p style={{color: 'white', letterSpacing:'-1px', marginTop: '180px'}}>팀빌딩 서비스만 가능한가요? 아닙니다!🙅🏻</p>
        <h2 style={{color: 'white', letterSpacing:'-1px', marginTop: '10px'}}>내가 스크랩한 공모전을 📆캘린더로 모아볼 수 있어요.</h2>
        
        <S.Container>
          <S.WhiteBox>
            <S.Image src={calendarImage} alt="캘린더 이미지"/>
          </S.WhiteBox>
          
          <div style={{color:'white', letterSpacing: '-1px', fontWeight: 500, fontSize: 14}}>
            <p>내가 스크랩한 공모전/프로젝트 정보를 캘린더로 모아볼 수 있습니다.</p>
            <p>여러 가지 정보가 기재되어 있는 다른 캘린더들과 달리</p>
            <p> 공모전/프로젝트 정보를 모아두고</p>
            <p>관련한 할 일들을 정리할 수 있어요.</p>

            <S.Button2 style={{marginTop: '80px'}} onClick={() => handleButtonClick('/calendar')}> 캘린더 바로가기 </S.Button2>
          </div>
        </S.Container>        
      </S.HomeContent2>

      <S.HomeContent3>
        <p style={{color: '#0150F1', letterSpacing:'-1px', marginTop: '150px', fontWeight: 'bold', fontSize: 20}}>Coming Soon</p>
        <p style={{color: 'black', letterSpacing:'-1px', marginTop: '10px'}}>공모전/프로젝트의 사후 관리도 공작소에서 만나보세요!😉</p>
        <h2 style={{color: 'black', letterSpacing:'-2px', marginTop: '10px'}}>마이페이지의 '포트폴리오' 탭에서 다양한 템플릿을 제공해드려요.</h2>
        
        <S.Container>
          
          <div style={{color:'black', letterSpacing: '-1px', fontWeight: 500, fontSize: 14}}>
            <p>노션? pdf? 어떤 툴을 써야하는지도,</p>
            <p>어떤 내용을 채워야하는지도 감이 안오셨다고요?</p>
            <p>공작소에서는 공작가 여러분들이 열심히 쌓아주신</p>
            <p>포트폴리오를 정리하는 것을 돕기 위해</p>
            <p>다양한 형태의 템플릿을 제공해드립니다.</p>
            <S.Button3 onClick={() => handleButtonClick('/mail')}> 출시 메일 받으러 가기 </S.Button3>
          </div>
          <S.WhiteBox style={{backgroundColor:'#CCCCCC'}}>
            3D 이미지
          </S.WhiteBox>
        </S.Container>        
      </S.HomeContent3>
    </>
  );
};

export default HomePage;