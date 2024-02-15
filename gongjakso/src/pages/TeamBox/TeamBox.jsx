import React, { useState } from 'react';
import * as S from '../TeamBox/TeamBoxStyled';
import { Link } from 'react-router-dom';

const TeamBox = ({
    showMoreDetail,
    borderColor,
    showWaitingJoin,
    showSubBox,
    postContent,
}) => {
    const [isOverlayVisible, setIsOverlayVisible] = useState(true);

    //활동기간 형식 바꾸기
    const startDate = new Date(postContent?.startDate)
        .toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        })
        .split('. ')
        .join('.');

    const endDate = new Date(postContent?.endDate)
        .toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        })
        .split('. ')
        .join('.');

    console.log(postContent);

    return (
        <S.Box borderColor={borderColor} showMoreDetail={showMoreDetail}>
            <S.BoxTopDetail>
                <S.MainBox>
                    <S.Title>{postContent?.title}</S.Title>
                    <S.subTitle>
                        | {postContent?.memberName} | {startDate}~{endDate} |
                    </S.subTitle>
                </S.MainBox>
                {showSubBox ? (
                    <S.SubBox>
                        <S.DeadLine>
                            <S.FireImage />
                            마감 D-{postContent?.daysRemaining}
                        </S.DeadLine>
                        <S.ScrapNum>
                            <S.UnScrapImage />
                            스크랩 {postContent?.scrapCount}회
                        </S.ScrapNum>
                    </S.SubBox>
                ) : (
                    <S.ActivityStatus>활동 중</S.ActivityStatus>
                )}
            </S.BoxTopDetail>
            <S.BoxBottomDetail>
                <S.MainBox>
                    {postContent?.categoryList.map((categoryList, index) => (
                        <S.RoundForm key={index}>{categoryList}</S.RoundForm>
                    ))}
                </S.MainBox>
                {showWaitingJoin && <S.WaitingJoin>합류 대기중</S.WaitingJoin>}
            </S.BoxBottomDetail>
            {showMoreDetail && (
                <Link to="/teamdetail">
                    <S.MoreDetail />
                </Link>
            )}
            {showWaitingJoin &&
                postContent?.daysRemaining === 0 &&
                isOverlayVisible && (
                    <S.DeadlineOverlay>
                        모집이 연장되었습니다.
                        <S.CloseImage
                            onClick={() => setIsOverlayVisible(false)}
                        ></S.CloseImage>
                    </S.DeadlineOverlay>
                )}
        </S.Box>
    );
};

export default TeamBox;
