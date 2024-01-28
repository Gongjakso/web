import React, { useState } from 'react';
import * as S from './DetailPageStyled';
import useCustomNavigate from '../../hooks/useNavigate';
import Close from '../../assets/images/Close.svg';
import Logo from '../../assets/images/BlackLogo.svg';
import ScrapNum from '../../assets/images/UnScrap.svg';
import Place from '../../assets/images/Place.svg';
import OpenKakao from '../../assets/images/OpenKakaoLink.svg';
import DoScrap from '../../assets/images/Scrap.svg';
import ApplyModal from '../../features/modal/ApplyModal';
import Completed from '../../features/modal/Completed';

const DetailPageContest = () => {
    const navigate = useCustomNavigate();

    // 스크랩하기 버튼
    const [scrap, setScrap] = useState(0);
    const [click, setClick] = useState(false);

    // 지원하기 버튼
    const [apply, setApply] = useState(false);

    // 지원완료 버튼
    const [completed, setCompleted] = useState(false);

    // 모달창 구분 목적
    const [title] = useState(['공모전', '공모전공고']);

    return (
        <>
            {apply === true ? (
                <ApplyModal
                    apply={apply}
                    setApply={setApply}
                    title={title}
                    setCompleted={setCompleted}
                />
            ) : null}
            {completed === true ? <Completed title={title} /> : null}

            <S.Background s="60%" p="30px">
                <S.BgButton>
                    <img
                        src={Close}
                        alt="Close-button"
                        onClick={() => navigate(-1)} // 뒤로가기 버튼
                    />
                </S.BgButton>

                <S.TitleBox>
                    <img src={Logo} alt="title-logo" />
                    <p>공공데이터 공모전</p>
                    <img
                        src={Logo}
                        alt="title-logo"
                        style={{ marginRight: '100px' }}
                    />
                    <S.ScrapNum>
                        <img src={ScrapNum} alt="scrap-num" />
                        <span>{scrap}</span>
                    </S.ScrapNum>
                </S.TitleBox>
                <div style={{ fontSize: '17px', marginLeft: '18px' }}>
                    <span>팀장 : </span>
                    <span>김지은</span>
                </div>
            </S.Background>

            <S.Background s="62.5%" p="0">
                <S.BlueBox>
                    <S.TextBox>
                        <S.TextTitle>진행 기간</S.TextTitle>
                        <S.TextDetail>
                            <span>2024.1.15</span>
                            <span> ~ </span>
                            <span>2024.2.28</span>
                        </S.TextDetail>
                    </S.TextBox>
                    <S.TextBox>
                        <S.TextTitle>모집 현황</S.TextTitle>
                        <S.TextDetail>
                            <span>1</span>
                            <span> / </span>
                            <span>4</span>
                            <span>명</span>
                        </S.TextDetail>
                    </S.TextBox>
                    <S.TextBox>
                        <S.TextTitle>모집 분야</S.TextTitle>
                        <S.TextDetail>
                            <S.RoundForm>기획</S.RoundForm>
                            <S.RoundForm>디자인</S.RoundForm>
                        </S.TextDetail>
                    </S.TextBox>
                    <S.TextBox>
                        <S.TextTitle>회의 방식</S.TextTitle>
                        <S.TextDetail>
                            <S.RoundForm>오프라인</S.RoundForm>
                            <S.RoundForm>온라인</S.RoundForm>
                        </S.TextDetail>
                    </S.TextBox>
                    <S.TextBox>
                        <S.TextTitle>회의 지역</S.TextTitle>
                        <S.TextDetail>
                            <img
                                src={Place}
                                alt="place-icon"
                                style={{
                                    width: '25px',
                                    margin: '-10px 8px 0px -2px',
                                }}
                            />
                            <span
                                style={{
                                    marginTop: '5px',
                                }}
                            >
                                서울특별시 강남구 역삼동
                            </span>
                        </S.TextDetail>
                    </S.TextBox>
                    <S.TextBox>
                        <S.TextTitle>공모전 홈페이지</S.TextTitle>
                        <S.TextDetail>www.naver11.com</S.TextDetail>
                    </S.TextBox>
                    <S.TextBox>
                        <S.TextTitle>기타 문의</S.TextTitle>
                        <S.TextDetail>
                            <img
                                src={OpenKakao}
                                alt="kakao-link"
                                style={{
                                    width: '120px',
                                    marginTop: '-18px',
                                    cursor: 'pointer',
                                }}
                                onClick={() => navigate('/kakao')}
                            />
                        </S.TextDetail>
                    </S.TextBox>
                    <S.Line />
                    <S.TextBox>
                        <S.TextTitle>설명글</S.TextTitle>
                    </S.TextBox>
                    <S.MainText>
                        제 3회 공공데이터 공모전에 함께 나갈 팀원을 모집합니다.
                        약 한 달동안 기획부터 PPT 디자인까지 끝내는 일정을
                        생각하고 있습니다. 경험이 많지 않더라도 열심히 임할 수
                        있으신 분과 함께 하고 싶습니다.
                    </S.MainText>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <S.MainButton
                            bg="none"
                            style={{
                                border: '2.3px solid #00efaf',
                                background:
                                    click === false ? 'none' : '#00EFAF',
                                color: click === false ? 'black' : 'white',
                            }}
                            onClick={() => {
                                if (click === true) {
                                    setScrap(scrap - 1);
                                    setClick(false);
                                } else {
                                    setScrap(scrap + 1);
                                    setClick(true);
                                }
                            }}
                        >
                            <img
                                src={click === false ? ScrapNum : DoScrap}
                                alt="scrap-button"
                            />
                            <span>스크랩하기</span>
                        </S.MainButton>
                        <S.MainButton
                            style={{ background: '#0054FF', color: 'white' }}
                            onClick={() => {
                                setApply(true);
                            }}
                        >
                            지원하기
                        </S.MainButton>
                    </div>
                </S.BlueBox>
            </S.Background>
        </>
    );
};

export default DetailPageContest;
