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
    //const partNames = ['기획', '디자인', '프론트엔드', '백엔드', '기타'];

    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [startDate, setstartDate] = useState('');
    const [endDate, setendDate] = useState('');
    const [deadline, setDeadline] = useState('');
    const [scrapnum, setScrapnum] = useState('');

    const [isOverlayVisible, setIsOverlayVisible] = useState(true);

    //console.log(postContent?.title);

    return (
        <S.Box
            borderColor={borderColor}
            showMoreDetail={showMoreDetail}
            deadline={postContent?.deadline === 0}
        >
            <S.BoxTopDetail>
                <S.MainBox>
                    <S.Title>{postContent?.title}</S.Title>
                    <S.subTitle>
                        | {postContent?.name} | 활동기간 정보 |
                    </S.subTitle>
                </S.MainBox>
                {showSubBox ? (
                    <S.SubBox>
                        <S.DeadLine>
                            <S.FireImage />
                            마감 D-{postContent?.deadline}
                        </S.DeadLine>
                        <S.ScrapNum>
                            <S.UnScrapImage />
                            스크랩 {postContent?.scrap}회
                        </S.ScrapNum>
                    </S.SubBox>
                ) : (
                    <S.ActivityStatus>활동 중</S.ActivityStatus>
                )}
            </S.BoxTopDetail>
            <S.BoxBottomDetail>
                <S.MainBox>
                    {postContent?.part.map((partName, index) => (
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
            {showWaitingJoin &&
                postContent?.deadline === 0 &&
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
