import React, { useState } from 'react';
import * as S from '../TeamBox/TeamBoxStyled';
import { Link } from 'react-router-dom';

const TeamBox = ({
    showMoreDetail,
    borderColor,
    showWaitingJoin,
    showSubBox,
    postContent,
    isMyParticipation,
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

    const finishDate = new Date(postContent?.finishDate)
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

    function getDisplayCategory(recruit_part) {
        let displayCategory;

        switch (recruit_part) {
            case 'PLAN':
                displayCategory = '기획';
                break;
            case 'DESIGN':
                displayCategory = '디자인';
                break;
            case 'FE':
                displayCategory = '프론트엔드';
                break;
            case 'BE':
                displayCategory = '백엔드';
                break;
            case 'ETC':
                displayCategory = '기타';
                break;
            default:
                displayCategory = recruit_part;
        }

        return displayCategory;
    }

    return (
        <S.Box borderColor={borderColor} showMoreDetail={showMoreDetail}>
            <S.BoxTopDetail>
                <S.MainBox>
                    <S.Title>{postContent?.title}</S.Title>
                    <S.subTitle>
                        {isMyParticipation === false &&
                            `| ${postContent?.memberName} | ${startDate}~${endDate} |`}
                        {isMyParticipation === true &&
                            `| ${postContent?.leaderName} | ${startDate}~${finishDate} |`}
                        {isMyParticipation === null &&
                            `| ${postContent?.name} | ${startDate}~${finishDate} |`}
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
                    <S.ActivityStatus>
                        {postContent?.postStatus === 'RECRUITING'
                            ? '활동 중'
                            : '활동 종료'}
                    </S.ActivityStatus>
                )}
            </S.BoxTopDetail>
            <S.BoxBottomDetail>
                <S.MainBox>
                    {isMyParticipation ? (
                        <S.RoundForm>
                            {getDisplayCategory(postContent?.recruit_part)}
                        </S.RoundForm>
                    ) : (
                        postContent?.categoryList?.map(
                            (categoryList, index) => {
                                return (
                                    <S.RoundForm key={index}>
                                        {getDisplayCategory(categoryList)}
                                    </S.RoundForm>
                                );
                            },
                        )
                    )}
                </S.MainBox>
                {showWaitingJoin && <S.WaitingJoin>합류 대기중</S.WaitingJoin>}
            </S.BoxBottomDetail>

            {showMoreDetail && (
                <Link to="/teamdetail">
                    <S.MoreDetail />
                </Link>
            )}
        </S.Box>
    );
};

export default TeamBox;
