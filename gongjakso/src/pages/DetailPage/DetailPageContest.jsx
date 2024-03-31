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
import arrow from '../../assets/images/Arrow.svg';
import ApplyModal from '../../features/modal/ApplyModal';
import Completed from '../../features/modal/Completed';
import ClickApply from '../../features/modal/ClickApply';
import { getPostDetail, getScrap, postScrap } from '../../service/post_service';

const DetailPageContest = () => {
    const navigate = useCustomNavigate();
    const { id } = useParams();

    // 임시 구분용 - 처음보는 공고 & 지원한 공고
    const [isApply] = useState(false);

    // 지원서 모달창 띄우는 경우
    const [showApply, setShowApply] = useState(false);
    const [idNum, setidNum] = useState(''); // post_id..?
    const [idName, setidName] = useState(''); // member API에서 따로 받아와야 하나..
    const [part, setPart] = useState([]);
    const [role, setRole] = useState([]);
    const [posts, setPosts] = useState([]);

    // 지원하기 버튼
    const [apply, setApply] = useState(false);

    // 지원체크 버튼
    const [applyCheck, setApplyCheck] = useState(false);

    // 지원완료 버튼
    const [completed, setCompleted] = useState(false);

    // 모달창 구분 목적
    const [title] = useState(['공모전', 'contest']);

    const [clickedFields, setClickedFields] = useState(null); // 지원 분야 배열
    const [clickedSkill, setClickedSkill] = useState(null); // 기술 스택 배열
    const [inputCount, setInputCount] = useState(0); // 글자 수
    const [inputValue, setInputValue] = useState(''); // 지원 이유

    // API 관련 변수
    const [postData, setpostData] = useState([]);
    const [category, setCategory] = useState([]);

    const [scrapNum, setscrapNum] = useState(0);
    const [scrapStatus, setscrapStatus] = useState([]);

    const [postId] = useState(id);

    useEffect(() => {
        getPostDetail(id).then(res => {
            setpostData(res?.data);
            setCategory(res?.data.categories);
            setscrapNum(res?.data.scrapCount);
        });
        getScrap(id).then(res => {
            setscrapStatus(res?.data);
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
        postScrap(id);
        window.location.reload();
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
                    id={postId}
                    setApplyCheck={setApplyCheck}
                />
            ) : null}

            {/* 지원완료 모달 (확인사살 모달 아님!) */}
            {completed === true ? <Completed title={title} case={2} /> : null}
            {showApply && (
                <ClickApply
                    setShowApply={setShowApply}
                    type={false}
                    idNum={idNum}
                    idName={idName}
                    recruitPart={category}
                    id={postId}
                />
            )}

            <S.Layout>
                <S.Background s="60%" mgt="50px">
                    <S.BgButton>
                        <img
                            src={Close}
                            alt="Close-button"
                            onClick={() => navigate(-1)} // 뒤로가기 버튼
                        />
                    </S.BgButton>

                    {isApply ? (
                        <div>
                            <S.Title>
                                <img src={Logo} alt="title-logo" />
                                <p>{postData?.title}</p>
                                <img src={Logo} alt="title-logo" />
                            </S.Title>
                            <S.BtnLayout>
                                <S.Status>합류 대기중</S.Status>
                                <S.ApplyBtn
                                    onClick={() => {
                                        setShowApply(true);
                                        // setidNum();
                                    }}
                                >
                                    지원서 보기
                                    <img src={arrow} />
                                </S.ApplyBtn>
                            </S.BtnLayout>
                        </div>
                    ) : (
                        <S.Title>
                            <img src={Logo} alt="title-logo" />
                            <p>{postData?.title}</p>
                            <img src={Logo} alt="title-logo" />
                        </S.Title>
                    )}

                    <S.TitleBox>
                        <S.TitleBottom>
                            팀장 : {postData?.memberName}
                        </S.TitleBottom>
                        <S.TitleBottom>스크랩 수 : {scrapNum}회</S.TitleBottom>
                        <S.TitleBottom>조회수 : {scrapNum}회</S.TitleBottom>
                    </S.TitleBox>
                </S.Background>

                <S.Background s="60%">
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
                                    <S.RoundForm key={i}>
                                        {item.categoryType === 'PLAN' &&
                                            `기획 ${item.size}`}
                                        {item.categoryType === 'DESIGN' &&
                                            `디자인 ${item.size}`}
                                        {item.categoryType === 'FE' &&
                                            `프론트엔드 ${item.size}`}
                                        {item.categoryType === 'BE' &&
                                            `백엔드 ${item.size}`}
                                        {item.categoryType === 'ETC' &&
                                            `기타 ${item.size}`}
                                        {item.categoryType === 'LATER' &&
                                            `추후조정 ${item.size}`}
                                    </S.RoundForm>
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
                                click={scrapStatus?.ScrapStatus}
                                onClick={ClickScrapBtn}
                            >
                                <img
                                    src={
                                        scrapStatus?.ScrapStatus === false
                                            ? ScrapNum
                                            : DoScrap
                                    }
                                    alt="scrap-button"
                                />
                                <span>스크랩하기</span>
                            </S.ScrapButton>
                            {isApply ? (
                                <S.ApplyButton
                                    bc="none"
                                    bg={({ theme }) => theme.LightGrey}
                                    onClick={() => {
                                        // 여기 수정해야 함!
                                        setApply(true);
                                    }}
                                >
                                    지원 취소
                                </S.ApplyButton>
                            ) : (
                                <S.ApplyButton
                                    bc="none"
                                    bg={({ theme }) => theme.box1}
                                    onClick={() => {
                                        setApply(true);
                                    }}
                                >
                                    지원하기
                                </S.ApplyButton>
                            )}
                        </S.Globalstyle>
                    </S.BlueBox>
                </S.Background>
            </S.Layout>
        </>
    );
};

export default DetailPageContest;
