import React from 'react';
import * as S from './ParticipatedTeamStyled';
import TeamBox from '../TeamBox/TeamBox';

const TeamPart = () => {
    return (
        <div>
            <S.TopBox>
                <S.Spacer />
                <S.Title>내가 참여한 공모전/프로젝트</S.Title>
            </S.TopBox>
            <S.BoxDetail>
                <TeamBox
                    showMoreDetail={false}
                    borderColor="#6F6F6F"
                    showWaitingJoin={false}
                    showSubBox={false}
                />
                <TeamBox
                    showMoreDetail={false}
                    borderColor="#6F6F6F"
                    showWaitingJoin={false}
                    showSubBox={false}
                />
            </S.BoxDetail>
        </div>
    );
};

export default TeamPart;
