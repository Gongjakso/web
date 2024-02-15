import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './ProfilePageStyled';
import TeamBox from '../TeamBox/TeamBox';

const ProfilePage = () => {
    const [name, setName] = useState('');
    const [major, setMajor] = useState('');

    const postContent1 = {
        // 내가 모집중인 팀 데이터
        title: '공작소 프로젝트',
        name: '최수빈',
        part: ['기획', '디자인', '프론트엔드', '백엔드', '기타'],
        deadline: 13,
        scrap: 30,
        isState: 0,
    };
    const postContent2 = {
        //내가 지원한 팀 데이터
        title: '두번째 프로젝트',
        name: '최혀진',
        part: ['프론트엔드'],
        deadline: 0,
        scrap: 20,
        isState: 0,
    };
    const postContent3 = {
        //내가 참여한 팀 데이터
        title: '공공 프로젝트',
        name: '최혀진',
        part: ['디자인'],
        isState: 0,
    };

    useEffect(() => {
        const savedInfo = localStorage.getItem('myInfoData');

        if (savedInfo) {
            const parsedInfo = JSON.parse(savedInfo);
            setName(parsedInfo.name);
            setMajor(parsedInfo.major);
            setUserInfo({
                name: parsedInfo.name,
                major: parsedInfo.major,
            });
        }
    }, []);

    const [userInfo, setUserInfo] = useState({
        name: name,
        major: major,
    });

    return (
        <div>
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
                        postContent={postContent1}
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
                        postContent={postContent2}
                    />
                    <TeamBox
                        showMoreDetail={false}
                        showWaitingJoin={true}
                        showSubBox={true}
                        borderColor="rgba(231, 137, 255, 0.5)"
                        postContent={postContent2}
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
                        postContent={postContent3}
                    />
                    <TeamBox
                        showMoreDetail={false}
                        borderColor="#6F6F6F"
                        showWaitingJoin={false}
                        showSubBox={false}
                        postContent={postContent3}
                    />
                </S.BoxDetail>
            </S.GlobalBox>
        </div>
    );
};

export default ProfilePage;
