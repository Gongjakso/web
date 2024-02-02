import React from 'react';
import * as S from '../TeamBox/TeamBoxStyled';

const TeamBox = ({
    showMoreDetail,
    borderColor,
    showWaitingJoin,
    showSubBox,
}) => {
    const partNames = ['기획', '디자인', '프론트엔드', '백엔드', '기타'];
    return (
        <S.Box borderColor={borderColor}>
            <S.BoxTopDetail>
                <S.MainBox>
                    <S.Title>리액트 활용 프젝이요~</S.Title>
                    <S.subTitle>| 팀장명 | 활동 기간 | 날짜</S.subTitle>
                </S.MainBox>
                {showSubBox ? (
                    <S.SubBox>
                        <S.DeadLine>
                            <S.FireImage />
                            마감 일수
                        </S.DeadLine>
                        <S.ScrapNum>
                            <S.UnScrapImage />
                            스크랩 횟수
                        </S.ScrapNum>
                    </S.SubBox>
                ) : (
                    <S.ActivityStatus>활동 중</S.ActivityStatus>
                )}
            </S.BoxTopDetail>
            <S.BoxBottomDetail>
                <S.MainBox>
                    {partNames.map((partName, index) => (
                        <S.RoundForm key={index}>{partName}</S.RoundForm>
                    ))}
                </S.MainBox>
                {showWaitingJoin && <S.WaitingJoin>합류 대기중</S.WaitingJoin>}
            </S.BoxBottomDetail>
            {showMoreDetail && <S.MoreDetail>자세히 보기</S.MoreDetail>}
        </S.Box>
    );
};

export default TeamBox;
