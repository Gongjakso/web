import React from 'react';
import { Link } from 'react-router-dom';
import Arrow from '../../assets/images/Arrow.svg';
import My_page_big from '../../assets/images/My_page_big.svg';
import * as S from './ProfilePageStyled';

const ProfilePage = () => {
    return (
        <div>
            <S.TopBox>
                <S.DetailBox>
                    <S.Subtitle1>최수빈</S.Subtitle1>
                    <S.Subtitle2>공학/소프트웨어학</S.Subtitle2>
                </S.DetailBox>
                <S.ProfileImage src={My_page_big} alt="My_page_big" />
                <Link to="/teamPortfolio">
                    <S.PortfolioBox>나의 포트폴리오</S.PortfolioBox>
                </Link>
            </S.TopBox>
            <S.TopDetail>
                <S.Subtitle1>내가 모집 중인 팀</S.Subtitle1>
            </S.TopDetail>

            <S.GlobalDetail>
                <S.Subtitle1>내가 지원한 팀</S.Subtitle1>
                <Link to="/appliedTeam">
                    <S.ArrowImage src={Arrow} alt="myPageNext" />
                </Link>
            </S.GlobalDetail>

            <S.GlobalDetail>
                <S.Subtitle1>내가 참여한 공모전/프로젝트</S.Subtitle1>
                <Link to="/participatedTeam">
                    <S.ArrowImage src={Arrow} alt="myPageNext" />
                </Link>
            </S.GlobalDetail>
        </div>
    );
};

export default ProfilePage;
