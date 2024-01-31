import React from 'react';
import * as S from '../TeamBox/TeamBoxStyled';
import ScrapNum from '../../assets/images/UnScrap.svg';
import DeadLineDay from '../../assets/images/Fire.svg';

const TeamBox = () => {
    const partNames = ['기획', '디자인', '프론트엔드', '백엔드', '기타'];
    return (
        <S.Box>
            <S.BoxTopDetail>
                <S.MainBox>
                    <S.Title fontSize="lg" color="#00000">
                        리액트 활용 프젝이요~
                    </S.Title>
                    <S.Title fontSize="base" color="#6c6c6c">
                        | 팀장명 | 활동 기간 | 날짜
                    </S.Title>
                </S.MainBox>
                <S.SubBox>
                    <S.DeadLine>
                        <img src={DeadLineDay} />
                        마감 일수
                    </S.DeadLine>
                    <S.ScrapNum>
                        <img src={ScrapNum} />
                        스크랩 횟수
                    </S.ScrapNum>
                </S.SubBox>
            </S.BoxTopDetail>
            <S.BoxBottomDetail>
                {partNames.map((partName, index) => (
                    <S.RoundForm key={index}>{partName}</S.RoundForm>
                ))}
            </S.BoxBottomDetail>

            <S.MoreDetail>자세히보기</S.MoreDetail>
        </S.Box>
    );
};

export default TeamBox;
