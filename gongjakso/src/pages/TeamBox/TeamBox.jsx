import React, { useState } from 'react'; // useState 추가
import * as S from '../TeamBox/TeamBoxStyled';
import { Link } from 'react-router-dom';

const TeamBox = ({
    showMoreDetail,
    borderColor,
    showWaitingJoin,
    showSubBox,
    postContent,
}) => {
    const partNames = ['기획', '디자인', '프론트엔드', '백엔드', '기타'];

    const [data, setData] = useState({
        제목: '공작소 프로젝트',
        팀장명: '최수빈',
        활동기간: '2개월',
        날짜: '2024.01',
        마감일수: '19',
        스크랩횟수: '30',
    });

    return (
        <S.Box borderColor={borderColor} showMoreDetail={showMoreDetail}>
            <S.BoxTopDetail>
                <S.MainBox>
                    <S.Title>{data.제목}</S.Title>
                    <S.subTitle>
                        | {data.팀장명} | {data.활동기간} | {data.날짜}
                    </S.subTitle>
                </S.MainBox>
                {showSubBox ? (
                    <S.SubBox>
                        <S.DeadLine>
                            <S.FireImage />
                            마감 D-{data.마감일수}
                        </S.DeadLine>
                        <S.ScrapNum>
                            <S.UnScrapImage />
                            스크랩 {data.스크랩횟수}회
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
            {showMoreDetail && (
                <Link to="/teamdetail">
                    <S.MoreDetail />
                </Link>
            )}
        </S.Box>
    );
};

export default TeamBox;
