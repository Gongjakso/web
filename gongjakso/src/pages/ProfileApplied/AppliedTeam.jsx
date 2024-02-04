import React from 'react';
import * as S from './AppliedTeamStyled';
import TeamBox from '../TeamBox/TeamBox';
//import { useHistory } from 'react-router-dom';

const TeamSupport = () => {
    return (
        <div>
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
            <S.Div>
                <S.UpImage onClick={() => window.scrollTo(0, 0)}></S.UpImage>
            </S.Div>
        </div>
    );
};

export default TeamSupport;
