import React, { useState } from 'react';
import * as S from '../TeamBox/TeamBoxStyled';
import { Link } from 'react-router-dom';
import { patchCompletedPost } from '../../service/post_service';
import { useDispatch } from 'react-redux';
import { openConfirmModal } from '../../features/modal/modalSlice/confirmModalSlice';
import { openAlertModal } from '../../features/modal/modalSlice/alertModalSlice';
import ConfirmModal from '../../components/common/ConfirmModal/ConfirmModal';
import AlertModal from '../../components/common/AlertModal/AlertModal';

const TeamBox = ({
    showMoreDetail,
    borderColor,
    showWaitingJoin,
    showSubBox,
    postContent,
    isMyParticipation,
    postId,
    overlayType,
    isLeader,
    completedStatus,
}) => {
    const [isOverlayVisible, setIsOverlayVisible] = useState(true);
    const dispatch = useDispatch();

    const hideOverlay = () => {
        setIsOverlayVisible(false); // 오버레이를 숨기는 함수
    };

    const handleOpenModal = () => {
        dispatch(openConfirmModal());
    };

    const handleClick = () => {
        patchCompletedPost(completedStatus).then(response => {
            if (response?.code === 1000) {
                dispatch(openConfirmModal());
            } else {
                dispatch(
                    openAlertModal({
                        titleContent: '활동 종료 권한이 없습니다.',
                        modalContent: '활동 종료는 팀장만 할 수 있습니다!',
                    }),
                );
            }
            console.log(response);
        });
        console.log('클릭되었습니다!'); //리더일때만 클릭되게 만드는 버튼
    };

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
        <>
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
                                `| ${postContent?.name} | ${startDate}~${endDate} |`}
                        </S.subTitle>
                    </S.MainBox>
                    {showSubBox ? (
                        <S.SubBox>
                            <S.DeadLine>
                                <S.FireImage />
                                {postContent?.daysRemaining < 0
                                    ? '마감된 공고'
                                    : `마감 D-${postContent?.daysRemaining}`}
                            </S.DeadLine>
                            <S.ScrapNum>
                                <S.UnScrapImage />
                                {postContent?.scrapCount}회
                            </S.ScrapNum>
                        </S.SubBox>
                    ) : (
                        <S.ActivityStatus
                            poststatus={postContent?.postStatus}
                            isleader={isLeader}
                            onClick={isLeader ? handleOpenModal : null}
                        >
                            {postContent?.postStatus === 'ACTIVE'
                                ? '활동 중'
                                : '활동 종료'}
                        </S.ActivityStatus>
                    )}
                </S.BoxTopDetail>
                <S.BoxBottomDetail>
                    <S.MainBox>
                        {isMyParticipation ? (
                            <div></div>
                        ) : // <S.RoundForm>
                        //     {getDisplayCategory(postContent?.recruit_part)}
                        // </S.RoundForm>
                        isMyParticipation === null ? (
                            postContent?.categories?.map((category, index) => {
                                return (
                                    <S.RoundForm key={index}>
                                        {getDisplayCategory(
                                            category.categoryType,
                                        )}
                                    </S.RoundForm>
                                );
                            })
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
                    {isOverlayVisible && <S.CloseImage onClick={hideOverlay} />}
                    {showWaitingJoin && (
                        <S.WaitingJoin applyType={postContent?.applyType}>
                            {postContent?.applyType === 'PASS'
                                ? '합류 완료'
                                : postContent?.applyType === 'NOT_PASS'
                                  ? '미선발'
                                  : '합류 대기중'}
                            {postContent?.status === 'EXTENSION' && (
                                <S.DeadlineOverlay status={postContent.status}>
                                    모집이 연장되었습니다.
                                </S.DeadlineOverlay>
                            )}
                            {postContent?.status === 'CLOSE' && (
                                <S.DeadlineOverlay status={postContent.status}>
                                    모집이 마감되었습니다.
                                </S.DeadlineOverlay>
                            )}
                            {postContent?.status === 'CANCEL' && (
                                <S.DeadlineOverlay status={postContent.status}>
                                    모집이 취소되었습니다.
                                </S.DeadlineOverlay>
                            )}
                        </S.WaitingJoin>
                    )}
                </S.BoxBottomDetail>
                {showMoreDetail && (
                    <Link to={`/teamdetail/${postId}`}>
                        <S.MoreDetail />
                    </Link>
                )}
            </S.Box>
            <AlertModal />
            <ConfirmModal
                question="정말 활동을 종료 하시겠습니까?"
                confirmClick={handleClick}
            />
        </>
    );
};

export default TeamBox;
