import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './ProfilePageStyled';

const ProfilePage = () => {
    return (
        <div>
            <S.TopBox>
                <S.InfoBox>
                    <S.DetailBox>
                        <S.NameTitle>최수빈</S.NameTitle>
                        <Link to="/MyInfo">
                            <S.EditImage />
                        </Link>
                    </S.DetailBox>
                    <S.MajorTitle>공학계열/소프트웨어학</S.MajorTitle>
                </S.InfoBox>
                <S.ProfileImage />
                <Link to="/teamPortfolio">
                    <S.PortfolioBox>나의 포트폴리오</S.PortfolioBox>
                </Link>
            </S.TopBox>

            <S.GlobalDetail>
                <S.SubTitle>내가 모집 중인 팀</S.SubTitle>
            </S.GlobalDetail>

            <S.GlobalDetail>
                <S.SubTitle>내가 지원한 팀</S.SubTitle>
                <Link to="/appliedTeam">
                    <S.ArrowImage />
                </Link>
            </S.GlobalDetail>

            <S.GlobalDetail>
                <S.SubTitle>내가 참여한 공모전/프로젝트</S.SubTitle>
                <Link to="/participatedTeam">
                    <S.ArrowImage />
                </Link>
            </S.GlobalDetail>
        </div>
    );
};

export default ProfilePage;
