import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './ProfilePageStyled';
import * as T from '../TeamBox/TeamBoxStyled';

export function borderColor(color) {
    return color || '#0054FF';
}

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

            <S.GlobalBox>
                <S.GlobalDetail>
                    <S.BoxDetail>
                        <S.SubTitle>내가 모집 중인 팀</S.SubTitle>
                        <T.TeamBox>
                            리액트 활용 프젝이요~
                            <T.MoreDetail>자세히보기</T.MoreDetail>
                        </T.TeamBox>
                        <T.TeamBox>리액트 활용 프젝이요~</T.TeamBox>
                    </S.BoxDetail>
                </S.GlobalDetail>

                <S.GlobalDetail>
                    <S.BoxDetail>
                        <S.SubTitle>
                            <span>내가 지원한 팀</span>
                            <Link to="/appliedTeam">
                                <S.ArrowImage />
                            </Link>
                        </S.SubTitle>

                        <T.TeamBox color="#00A3FF">
                            리액트 활용 프젝이요~
                        </T.TeamBox>
                        <T.TeamBox color="#E789FF">
                            리액트 활용 프젝이요~
                        </T.TeamBox>
                    </S.BoxDetail>
                </S.GlobalDetail>

                <S.GlobalDetail>
                    <S.BoxDetail>
                        <S.SubTitle>
                            <span>내가 참여한 공모전/프로젝트</span>{' '}
                            <Link to="/participatedTeam">
                                <S.ArrowImage />
                            </Link>
                        </S.SubTitle>
                        <T.TeamBox color="#6F6F6F">
                            리액트 활용 프젝이요~
                        </T.TeamBox>
                        <T.TeamBox color="#6F6F6F">
                            리액트 활용 프젝이요~
                        </T.TeamBox>
                    </S.BoxDetail>
                </S.GlobalDetail>
            </S.GlobalBox>
        </div>
    );
};

export default ProfilePage;
