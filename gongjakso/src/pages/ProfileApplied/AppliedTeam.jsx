import React from 'react';
import * as S from './AppliedTeamStyled';
import TeamBox from '../TeamBox/TeamBox';
import TopButton from '../../pages/HomePage/TopButton';
//import { useHistory } from 'react-router-dom';

const TeamSupport = () => {
    return (
        <div>
            <TopButton />
            <S.TopBox>
                <S.Spacer />
                <S.Title>내가 지원한 팀</S.Title>
            </S.TopBox>
            <S.BoxDetail>
                <TeamBox
                    showMoreDetail={false}
                    showWaitingJoin={true}
                    showSubBox={true}
                    borderColor="rgba(0, 163, 255, 0.5)"
                />
                <TeamBox
                    showMoreDetail={false}
                    showWaitingJoin={true}
                    showSubBox={true}
                    borderColor="rgba(231, 137, 255, 0.5)"
                />
            </S.BoxDetail>
        </div>
    );
};

export default TeamSupport;
