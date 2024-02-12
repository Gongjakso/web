import React, { useState } from 'react';
import * as S from './HomePage.Styled';
import useCustomNavigate from '../../hooks/useNavigate';
import calendarImage from '../../assets/images/calendar.png';
import Modal1 from '../../features/modal/LoginModal1';
import Modal2 from '../../features/modal/LoginModal2';
import TopButton from '../../pages/HomePage/TopButton';
import Banner from './Banner';

const HomePage = () => {
    const authenticated = localStorage.getItem('accessToken');

    const [isLoggedIn, setIsLoggedIn] = useState(!!authenticated);
    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const [path, setPath] = useState();
    const goToPage = useCustomNavigate();

    const handleButtonClick = path => {
        if (isLoggedIn) {
            goToPage(path);
        } else {
            if (path === '/contest' || path === '/project') {
                setPath(path);
                showModal2();
            } else {
                showModal1();
            }
        }
    };

    const showModal1 = () => {
        setModal1Open(true);
    };

    const showModal2 = () => {
        setModal2Open(true);
    };

    const closeModal1 = () => {
        setModal1Open(false);
    };

    const closeModal2 = () => {
        setModal2Open(false);
    };

    return (
        <>
            <TopButton />
            <S.HomeContent>
                <S.Title>
                    공모전/프로젝트, 어떻게 시작해야할지 막막하셨나요?
                </S.Title>
                <S.Title>공작소에서 원하는 사람들과 시작해보세요 !</S.Title>

                <Banner />

                <S.BoxContainer>
                    <S.Box>
                        <div>😔 공모전은 처음인데 어떻게 시작해야 하나요</div>
                    </S.Box>
                    <S.Box>
                        <div>😔 학교 밖 사람들과 프로젝트를 해보고 싶어요</div>
                    </S.Box>
                </S.BoxContainer>
                <S.BoxContainer>
                    <S.Box>
                        <div>🙁 친구랑 같이 하기엔 놀기만 할 것 같아요</div>
                    </S.Box>
                    <S.Box>
                        <div> 🤯 사이드 프로젝트를 찾고 싶어요 </div>
                    </S.Box>
                </S.BoxContainer>

                <S.Button>
                    <S.Button1 onClick={() => handleButtonClick('/contest')}>
                        공모전 공고 바로가기
                    </S.Button1>
                    <S.Button2
                        style={{ marginLeft: '30px' }}
                        onClick={() => handleButtonClick('/project')}
                    >
                        프로젝트 공고 바로가기
                    </S.Button2>
                </S.Button>
            </S.HomeContent>

            <S.HomeContent1>
                <S.Title1>📍다양한 유형의 팀빌딩 서비스 지원</S.Title1>

                <S.Wrapper>
                    <S.Detail1>
                        로그인 후 '팀 빌딩' 탭을 들어가면 팀장으로 팀을 꾸릴 수
                        있습니다!{' '}
                    </S.Detail1>
                    <S.Detail1>
                        오프라인 회의를 선호하는 이들을 위해서 시/군/구의 정보를
                        선택하여 해당 지역에서 회의하는 공모전 팀을 모아볼 수
                        있습니다.
                    </S.Detail1>
                    <S.ImageBox>
                        <S.TeamImage>
                            <S.TeamBuildingImg1 />
                            <p>팀장으로 모집하기</p>
                        </S.TeamImage>
                        <S.TeamImage>
                            <S.TeamBuildingImg2 />
                            <p>팀원으로 지원하기</p>
                        </S.TeamImage>
                        <S.TeamImage>
                            <S.TeamBuildingImg3 />
                            <p>지역으로 팀 찾기</p>
                        </S.TeamImage>
                    </S.ImageBox>
                </S.Wrapper>
                <S.Button1 onClick={() => handleButtonClick('/teambuild')}>
                    팀빌딩 바로가기
                </S.Button1>
            </S.HomeContent1>

            <S.HomeContent2>
                <S.Subtitle2>
                    팀빌딩 서비스만 가능한가요? 아닙니다!🙅🏻
                </S.Subtitle2>

                <S.Title2>
                    내가 스크랩한 공모전을 📆캘린더로 모아볼 수 있어요.
                </S.Title2>

                <S.Container>
                    <S.WhiteBox>
                        <S.Image src={calendarImage} alt="캘린더 이미지" />
                    </S.WhiteBox>

                    <div style={{ padding: '10px' }}>
                        <S.Detail2>
                            내가 스크랩한 공모전/프로젝트 정보를 캘린더로 모아볼
                            수 있습니다.
                        </S.Detail2>
                        <S.Detail2>
                            여러 가지 정보가 기재되어 있는 다른 캘린더들과 달리
                        </S.Detail2>
                        <S.Detail2>공모전/프로젝트 정보를 모아두고</S.Detail2>
                        <S.Detail2>
                            관련한 할 일들을 정리할 수 있어요.
                        </S.Detail2>

                        <S.Button2
                            style={{ marginTop: '70px' }}
                            onClick={() => handleButtonClick('/calendar')}
                        >
                            캘린더 바로가기
                        </S.Button2>
                    </div>
                </S.Container>
            </S.HomeContent2>

            <S.HomeContent3>
                <S.Subtitle3>Coming Soon</S.Subtitle3>
                <S.Detail3>
                    공모전/프로젝트의 사후 관리도 공작소에서 만나보세요!😉
                </S.Detail3>

                <S.Title3>
                    마이페이지의 '포트폴리오' 탭에서 다양한 템플릿을
                    제공해드려요.
                </S.Title3>

                <S.Container>
                    <div>
                        <S.Detail3>
                            노션? pdf? 어떤 툴을 써야하는지도,
                        </S.Detail3>
                        <S.Detail3>
                            어떤 내용을 채워야하는지도 감이 안오셨다고요?
                        </S.Detail3>
                        <S.Detail3>
                            공작소에서는 공작가 여러분들이 열심히 쌓아주신
                        </S.Detail3>
                        <S.Detail3>
                            포트폴리오를 정리하는 것을 돕기 위해
                        </S.Detail3>
                        <S.Detail3>
                            다양한 형태의 템플릿을 제공해드립니다.
                        </S.Detail3>

                        <S.Button3
                            style={{ marginTop: '70px' }}
                            onClick={() => handleButtonClick('/mail')}
                        >
                            출시 메일 받으러 가기
                        </S.Button3>
                    </div>
                    <S.PortFolioimg />
                </S.Container>
            </S.HomeContent3>
            {modal1Open && (
                <Modal1
                    closeModal1={closeModal1}
                    setIsLoggedIn={setIsLoggedIn}
                />
            )}
            {modal2Open && <Modal2 goPath={path} closeModal2={closeModal2} />}
        </>
    );
};

export default HomePage;
