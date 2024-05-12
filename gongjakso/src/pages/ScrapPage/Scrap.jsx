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
    const [postContent, setPostContent] = useState([]);
    const [postContent4, setPostContent4] = useState([]); //스크랩 공모전
    const [postContent5, setPostContent5] = useState([]); //스크랩 프로젝트
    const [totalPage, setTotalPage] = useState();
    const [selectedOption, setSelectedOption] = useState(null);
    const [previousOption, setPreviousOption] = useState(null);

    useEffect(() => {
        setPage(1);
        setSelectedOption(null);
        loadScrapedposts(1, 'contest');
        loadScrapedposts(1, 'project');
    }, []);

    const loadScrapedposts = (page, option = selectedOption) => {
        if (previousOption === option) return;

        if (option === 'contest') {
            getMyContestScrap(page).then(response => {
                setPostContent4(response?.data.content);
            });
        } else if (option === 'project') {
            getMyProjectScrap(page).then(response => {
                setPostContent5(response?.data.content);
            });
        } else {
            Promise.all([
                getMyContestScrap(page),
                getMyProjectScrap(page),
            ]).then(([contestResponse, projectResponse]) => {
                setPostContent4(contestResponse?.data.content);
                setPostContent5(projectResponse?.data.content);
            });
        }
        setPreviousOption(option);
    };

    const showContest = () => {
        setSelectedOption('contest');
        loadScrapedposts(1, 'contest');
    };

    const showProject = () => {
        setSelectedOption('project');
        loadScrapedposts(1, 'project');
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
                {(selectedOption === 'contest' || selectedOption === null) &&
                    postContent4.map((postContent4, index) => (
                        <TeamBox
                            key={index}
                            showMoreDetail={false}
                            showWaitingJoin={false}
                            showSubBox={true}
                            borderColor={'rgba(0, 163, 255, 0.5)'}
                            postContent={postContent4}
                            isMyParticipation={null}
                            postId={postContent4?.postId}
                        />
                    ))}
                {(selectedOption === 'project' || selectedOption === null) &&
                    postContent5.map((postContent5, index) => (
                        <TeamBox
                            key={index}
                            showMoreDetail={false}
                            showWaitingJoin={false}
                            showSubBox={true}
                            borderColor={'rgba(231, 137, 255, 0.5)'}
                            postContent={postContent5}
                            isMyParticipation={null}
                            postId={postContent5?.postId}
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
