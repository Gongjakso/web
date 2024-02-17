import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
import { getPostDetail, postScrap } from '../../service/post_service';

const DetailPageContest = () => {
    const navigate = useCustomNavigate();

    // 스크랩하기 버튼
    const [click, setClick] = useState(false);

    // 지원하기 버튼
    const [apply, setApply] = useState(false);

    // 지원완료 버튼
    const [completed, setCompleted] = useState(false);

    // 모달창 구분 목적
    const [title] = useState(['공모전', 'contest']);

    // API 관련 변수
    const [postData, setpostData] = useState([]);
    const [category, setCategory] = useState([]);

    const [scrapNum, setscrapNum] = useState(0);
    const [scrapStatus, setscrapStatus] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        // ID 수정!!!!
        getPostDetail(id).then(res => {
            console.log(res);
            setpostData(res?.data);
            setCategory(res?.data.categories);
            setscrapNum(res?.data.scrapCount);
        });
    }, [id]);

    // 활동기간 수정 함수
    const formatDate = dateString => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };

    // 스크랩 POST
    const ClickScrapBtn = () => {
        // ID 수정!!!!
        postScrap('103').then(res => {
            console.log(res);
        });
    };

    return (
        <>
            {apply === true ? (
                <ApplyModal
                    apply={apply}
                    setApply={setApply}
                    title={title}
                    setCompleted={setCompleted}
                    category={category}
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
                            <p>{postData?.title}</p>
                            <img src={Logo} alt="title-logo" />
                        </S.Title>
                        <S.ScrapNum>
                            <img src={ScrapNum} alt="scrap-num" />
                            스크랩 {scrapNum}회
                        </S.ScrapNum>
                    </S.TitleBox>
                    <S.TitleBottom>팀장 : {postData?.memberName}</S.TitleBottom>
                </S.Background>

                <S.Background s="62.5%">
                    <S.BlueBox bg={({ theme }) => theme.Light1}>
                        <S.TextBox>
                            <S.TextTitle>진행 기간</S.TextTitle>
                            <S.TextDetail>
                                {formatDate(postData?.startDate)} ~{' '}
                                {formatDate(postData?.endDate)}
                            </S.TextDetail>
                        </S.TextBox>
                        <S.TextBox>
                            <S.TextTitle>모집 현황</S.TextTitle>
                            <S.TextDetail>
                                {postData?.currentPerson}/{postData?.maxPerson}{' '}
                                명
                            </S.TextDetail>
                        </S.TextBox>
                        <S.TextBox>
                            <S.TextTitle>모집 분야</S.TextTitle>
                            <S.TextDetail>
                                {category?.map((item, i) => (
                                    <React.Fragment key={i}>
                                        {[...Array(item.size)].map(
                                            (_, index) => (
                                                <S.RoundForm key={index}>
                                                    {item.categoryType ===
                                                        'PLAN' && '기획'}
                                                    {item.categoryType ===
                                                        'DESIGN' && '디자인'}
                                                    {item.categoryType ===
                                                        'FE' && '프론트엔드'}
                                                    {item.categoryType ===
                                                        'BE' && '백엔드'}
                                                    {item.categoryType ===
                                                        'ETC' && '기타'}
                                                    {item.categoryType ===
                                                        'LATER' && '기타2'}
                                                </S.RoundForm>
                                            ),
                                        )}
                                    </React.Fragment>
                                ))}
                            </S.TextDetail>
                        </S.TextBox>
                        <S.TextBox>
                            <S.TextTitle>회의 방식</S.TextTitle>
                            <S.TextDetail>
                                {postData?.meetingMethod === 'OFFLINE' && (
                                    <S.RoundForm>오프라인</S.RoundForm>
                                )}
                                {postData?.meetingMethod === 'ONLINE' && (
                                    <S.RoundForm>온라인</S.RoundForm>
                                )}
                                {postData?.meetingMethod === 'BOTH' && (
                                    <>
                                        <S.RoundForm>온라인</S.RoundForm>
                                        <S.RoundForm>오프라인</S.RoundForm>
                                    </>
                                )}
                            </S.TextDetail>
                        </S.TextBox>
                        <S.TextBox>
                            <S.TextTitle>회의 지역</S.TextTitle>
                            <S.Meeting>
                                <img src={Place} alt="place-icon" />
                                <span>{postData?.meetingArea}</span>
                            </S.Meeting>
                        </S.TextBox>
                        <S.TextBox>
                            <S.TextTitle>공모전 홈페이지</S.TextTitle>
                            <S.TextDetail>{postData?.urlLink}</S.TextDetail>
                        </S.TextBox>
                        <S.TextBox>
                            <S.TextTitle>기타 문의</S.TextTitle>
                            <S.OpenKakao>
                                <img
                                    src={OpenKakao}
                                    alt="kakao-link"
                                    onClick={() => {
                                        window.location.href =
                                            postData?.questionLink;
                                    }}
                                />
                            </S.OpenKakao>
                        </S.TextBox>
                        <S.Line />
                        <S.TextBox>
                            <S.TextTitle>설명글</S.TextTitle>
                        </S.TextBox>
                        <S.MainText h="34%">{postData?.contents}</S.MainText>
                        <S.Globalstyle>
                            <S.ScrapButton
                                bc={({ theme }) => theme.Green}
                                click={click}
                                onClick={() => {
                                    if (click === true) {
                                        ClickScrapBtn();
                                        setscrapNum(scrapNum - 1);
                                        setClick(false);
                                    } else {
                                        ClickScrapBtn();
                                        setscrapNum(scrapNum + 1);
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

export default DetailPageContest;
