import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './ProfilePageStyled';
import TeamBox from '../TeamBox/TeamBox';
import { getMyRecruiting } from '../../service/profile_service';
import { getMyInfo } from '../../service/profile_service';

const ProfilePage = () => {
    /*
    const [name, setName] = useState('');
    const [major, setMajor] = useState('');
    const [data, setData] = useState(null);
    const [userInfo, setUserInfo] = useState({
        name: name,
        major: major,
    });

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
    */

    const [data, setData] = useState([]);
    //프로필 정보
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getMyInfo();
                setData(response?.data); // 'response'를 바로 전달
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    //내가 모집 중인 팀
    const [postContent1, setPostContent] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getMyRecruiting();
                setData(response?.data);
                setPostContent(response?.data); // 데이터를 postContents에 저장
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const postContent2 = {
        //내가 지원한 팀 데이터
        title: '두번째 프로젝트',
        memberName: '최진',
        categoryList: ['프론트엔드'],
        daysRemaining: 2,
        startDate: '2024-02-01T10:00:00',
        endDate: '2024-02-25T10:00:00',
        scrapCount: 20,
        //0->공모전 1->프로젝트
        isState: 1,
    };
    const postContent3 = {
        //내가 참여한 팀 데이터
        title: '공공 프로젝트',
        memberName: '최혀진',
        categoryList: ['디자인'],
        startDate: '2024-02-01T10:00:00',
        endDate: '2024-02-25T10:00:00',
        status: 'RECRUITING',
        isState: 0,
    };

    //내가 모집중인 팀 데이터
    //const postContent1 = data;

    return (
        <div>
            <S.TopBox>
                <S.InfoBox>
                    <S.DetailBox>
                        <S.NameTitle>{data?.name}</S.NameTitle>
                        <Link to="/MyInfo">
                            <S.EditImage src={data?.profileUrl} />
                        </Link>
                    </S.DetailBox>
                    <S.MajorTitle>{data?.major}</S.MajorTitle>
                </S.InfoBox>
                <S.ProfileImage />
                <Link to="/teamPortfolio">
                    <S.PortfolioBox>나의 포트폴리오</S.PortfolioBox>
                </Link>
            </S.TopBox>

            <S.GlobalBox>
                <S.BoxDetail>
                    <S.SubTitle>내가 모집 중인 팀</S.SubTitle>
                    {postContent1.map((postContent1, index) => (
                        <TeamBox
                            showMoreDetail={true}
                            showWaitingJoin={false}
                            showSubBox={true}
                            postContent={postContent1}
                        />
                    ))}
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
                        borderColor={
                            postContent2.isState === 0
                                ? 'rgba(0, 163, 255, 0.5)'
                                : 'rgba(231, 137, 255, 0.5)'
                        }
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
                </S.BoxDetail>
            </S.GlobalBox>
        </div>
    );
};

export default ProfilePage;
