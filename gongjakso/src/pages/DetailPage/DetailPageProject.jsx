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
import { typeData2, stackData, meeting } from './DetailPageData';

const DetailPageProject = () => {
    const navigate = useCustomNavigate();

    // 스크랩하기 버튼
    const [scrap, setScrap] = useState(0);
    const [click, setClick] = useState(false);

    // 지원하기 버튼
    const [apply, setApply] = useState(false);

    // 지원완료 버튼
    const [completed, setCompleted] = useState(false);

    // 모달창 구분 목적
    const [title] = useState(['프로젝트', '프로젝트공고']);

    const [meeting] = useState([
        ['온라인', '오프라인'],
        ['온라인'],
        ['오프라인'],
    ]);

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

            <S.Layout>
                <S.Background s="60%" mgt="50px">
                    <S.BgButton>
                        <img
                            src={Close}
                            alt="Close-button"
                            onClick={() => navigate(-1)} // 뒤로가기 버튼
                        />
                    </S.BgButton>

                    <S.TitleBox>
                        <S.Title>
                            <img src={Logo} alt="title-logo" />
                            <p>리액트 활용 프젝이요~</p>
                            <img src={Logo} alt="title-logo" />
                        </S.Title>
                        <S.ScrapNum>
                            <img src={ScrapNum} alt="scrap-num" />
                            <p>{scrap}</p>
                        </S.ScrapNum>
                    </S.TitleBox>
                    <S.TitleBottom>
                        <span>팀장 : </span>
                        <span>김지은</span>
                    </S.TitleBottom>
                </S.Background>

                <S.Background s="62.5%">
                    <S.BlueBox bg={({ theme }) => theme.Pink}>
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
                                {typeData2.map((item, i) => (
                                    <S.RoundForm>{item}</S.RoundForm>
                                ))}
                            </S.TextDetail>
                        </S.TextBox>
                        <S.TextBox>
                            <S.TextTitle>기술 스택</S.TextTitle>
                            <S.TextDetail>
                                {stackData.map((item, i) => (
                                    <S.RoundForm>{item}</S.RoundForm>
                                ))}
                            </S.TextDetail>
                        </S.TextBox>
                        <S.TextBox>
                            <S.TextTitle>회의 방식</S.TextTitle>
                            <S.TextDetail>
                                {meeting[0].map((item, i) => (
                                    <S.RoundForm key={i}>{item}</S.RoundForm>
                                ))}
                            </S.TextDetail>
                        </S.TextBox>
                        <S.TextBox>
                            <S.TextTitle>회의 지역</S.TextTitle>
                            <S.Meeting>
                                <img src={Place} alt="place-icon" />
                                <span>서울특별시 강남구 역삼동</span>
                            </S.Meeting>
                        </S.TextBox>
                        <S.TextBox>
                            <S.TextTitle>공모전 홈페이지</S.TextTitle>
                            <S.TextDetail>www.naver11.com</S.TextDetail>
                        </S.TextBox>
                        <S.TextBox>
                            <S.TextTitle>기타 문의</S.TextTitle>
                            <S.OpenKakao>
                                <img
                                    src={OpenKakao}
                                    alt="kakao-link"
                                    onClick={() => navigate('/생성링크')}
                                />
                            </S.OpenKakao>
                        </S.TextBox>
                        <S.Line />
                        <S.TextBox>
                            <S.TextTitle>설명글</S.TextTitle>
                        </S.TextBox>
                        <S.MainText h="27%">
                            제 3회 공공데이터 공모전에 함께 나갈 팀원을
                            모집합니다. 약 한 달동안 기획부터 PPT 디자인까지
                            끝내는 일정을 생각하고 있습니다. 경험이 많지
                            않더라도 열심히 임할 수 있으신 분과 함께 하고
                            싶습니다.
                        </S.MainText>
                        <S.Globalstyle>
                            <S.ScrapButton
                                bc={({ theme }) => theme.Green}
                                click={click}
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
                            </S.ScrapButton>
                            <S.ApplyButton
                                bc={({ theme }) => theme.box1}
                                onClick={() => {
                                    setApply(true);
                                }}
                            >
                                지원하기
                            </S.ApplyButton>
                        </S.Globalstyle>
                    </S.BlueBox>
                </S.Background>
            </S.Layout>
        </>
    );
};

export default DetailPageProject;
