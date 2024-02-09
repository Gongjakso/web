import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './ProfilePageStyled';
import TeamBox from '../TeamBox/TeamBox';
import TopButton from '../../pages/HomePage/TopButton';

const ProfilePage = () => {
    const [userInfo, setUserInfo] = useState({
        name: '최수빈',
        major: '공학계열/컴퓨터공학',
        desiredJob: '',
    });

    return (
        <div>
            <TopButton />
            <S.TopBox>
                <S.InfoBox>
                    <S.DetailBox>
                        <S.NameTitle>{userInfo.name}</S.NameTitle>
                        <Link to="/MyInfo">
                            <S.EditImage />
                        </Link>
                    </S.DetailBox>
                    <S.MajorTitle>{userInfo.major}</S.MajorTitle>
                </S.InfoBox>
                <S.ProfileImage />
                <Link to="/teamPortfolio">
                    <S.PortfolioBox>나의 포트폴리오</S.PortfolioBox>
                </Link>
            </S.TopBox>

            <S.GlobalBox>
                <S.BoxDetail>
                    <S.SubTitle>내가 모집 중인 팀</S.SubTitle>
                    <TeamBox
                        showMoreDetail={true}
                        showWaitingJoin={false}
                        showSubBox={true}
                    />
                </S.BoxDetail>

                <S.BoxDetail>
                    <S.SubTitle>
                        <span>내가 지원한 팀</span>
                        <Link to="/appliedTeam">
                            <S.ArrowImage />
                        </Link>
                    </S.SubTitle>
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

                <S.BoxDetail>
                    <S.SubTitle>
                        <span>내가 참여한 공모전/프로젝트</span>
                        <Link to="/participatedTeam">
                            <S.ArrowImage />
                        </Link>
                    </S.SubTitle>
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
                {/*
                <S.Div>
                    <S.UpImage
                        onClick={() => window.scrollTo(0, 0)}
                    ></S.UpImage>
                </S.Div>
                */}
            </S.GlobalBox>
        </div>
    );
};

export default ProfilePage;
