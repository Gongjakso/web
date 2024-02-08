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
        제목: '회의 일정 조정 서비스',
        팀장명: '최수빈',
        활동기간: '2024.1.2~2.4',
        마감일수: 0,
        스크랩횟수: '30',
    });
    const [isOverlayVisible, setIsOverlayVisible] = useState(true);

    return (
        <S.Box
            borderColor={borderColor}
            showMoreDetail={showMoreDetail}
            deadline={data.마감일수 === 0}
        >
            <S.BoxTopDetail>
                <S.MainBox>
                    <S.Title>{data.제목}</S.Title>
                    <S.subTitle>
                        | {data.팀장명} | {data.활동기간} |
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
            {showWaitingJoin && data.마감일수 === 0 && isOverlayVisible && (
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
