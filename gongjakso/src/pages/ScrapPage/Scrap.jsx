import React, { useEffect, useState } from 'react';
import * as S from './Scrap.Styled';
import TeamBox from '../TeamBox/TeamBox';
import TopButton from '../HomePage/TopButton';
import Pagination from '../../components/Pagination/Pagination';
import {
    getMyContestScrap,
    getMyProjectScrap,
} from '../../service/profile_service';

const Scrap = () => {
    const [limit, setLimit] = useState(6);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    const [data, setData] = useState([]);
    const [postContent4, setPostContent4] = useState([]); //스크랩 공모전
    const [postContent5, setPostContent5] = useState([]); //스크랩 프로젝트
    const [totalPage, setTotalPage] = useState();
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        setPage(1);
        getMyContestScrap().then(response => {
            setPostContent4(response?.data);
            console.log(response?.data);
        });
        getMyProjectScrap().then(response => {
            setPostContent5(response?.data);
            console.log(response?.data);
        });
    }, []);

    const showContest = page => {
        getMyContestScrap(page).then(response => {
            setPostContent4(response?.data);
        });
        setSelectedOption('contest');
    };

    const showProject = page => {
        getMyProjectScrap(page).then(response => {
            setPostContent5(response?.data);
        });
        setSelectedOption('project');
    };

    const loadScrapedposts = page => {
        getMyContestScrap(page).then(response => {
            setPostContent4(response?.data);
        });
        getMyProjectScrap(page).then(response => {
            setPostContent5(response?.data);
        });
    };
    return (
        <div>
            <TopButton />
            <S.TopBox>
                <S.Spacer />
                <S.Title>나의 스크랩</S.Title>
            </S.TopBox>
            <S.OptionBox>
                <S.Option
                    onClick={showContest}
                    style={{
                        color:
                            selectedOption === 'contest' ? 'black' : '#D9D9D9',
                        borderBottomColor:
                            selectedOption === 'contest' ? 'black' : '#D9D9D9',
                    }}
                >
                    공모전
                </S.Option>
                <S.Option
                    onClick={showProject}
                    style={{
                        color:
                            selectedOption === 'project' ? 'black' : '#D9D9D9',
                        borderBottomColor:
                            selectedOption === 'project' ? 'black' : '#D9D9D9',
                    }}
                >
                    프로젝트
                </S.Option>
            </S.OptionBox>
            <S.BoxDetail>
                {(Array.isArray(postContent4) && Array.isArray(postContent5)
                    ? postContent4.concat(postContent5)
                    : []
                )
                    .slice(offset, offset + limit)
                    .map((postContent, index) => (
                        <TeamBox
                            key={index}
                            showMoreDetail={true}
                            showWaitingJoin={false}
                            showSubBox={true}
                            borderColor={
                                postContent.postType === true
                                    ? 'rgba(0, 163, 255, 0.5)'
                                    : 'rgba(231, 137, 255, 0.5)'
                            }
                            postContent={postContent}
                            isMyParticipation={false}
                            postId={postContent?.postId}
                        />
                    ))}
                <Pagination
                    total={totalPage}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                    loadPosts={loadScrapedposts}
                />
            </S.BoxDetail>
        </div>
    );
};

export default Scrap;
