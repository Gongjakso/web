import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import * as S from './PostMainPage.Styled';
import SwiperBanner from '../../components/SwiperBanner/SwiperBanner';
import Pagination from '../../components/Pagination/Pagination';
import { SelectInput } from '../../components/common/Input/Input';
import { getProjectBanner } from '../../service/banner_service';
import TopButton from '../HomePage/TopButton';

import Multilevel from '../../components/common/Input/Multilevel';
import { getContestPosts, getProjectPosts } from '../../service/post_service';
import TeamBox from '../TeamBox/TeamBox';
import Modal2 from '../../features/modal/LoginModal2';
import Modal1 from '../../features/modal/LoginModal1';
import NoContents from '../../features/NoContents/NoContents';

const PostMainPage = () => {
    const authenticated = localStorage.getItem('accessToken');
    const [isLoggedIn, setIsLoggedIn] = useState(!!authenticated);

    const location = useLocation();
    const isProject = location.pathname.includes('/project');
    const isColor = isProject ? '#E789FF' : '#00A3FF';
    const [contestPosts, setContestPosts] = useState();
    const [projectPosts, setProjectPosts] = useState();
    // const [limit, setLimit] = useState(6);
    const [page, setPage] = useState(1);
    const [banners, setBanners] = useState([]);
    const [contestTotalPage, setContestTotalPage] = useState();
    const [ProjectTotalPage, setProjectTotalPage] = useState();
    const [sortBy, setSortBy] = useState('createdAt');

    const [selectedLocalData, setSelectedLocalData] = useState('');
    const [selectedStack, setSelectedStack] = useState('');
    const [searchKeyword, setSearchKeyword] = useState('');

    const [modal1Open, setModal1Open] = useState(false);

    // const offset = (page - 1) * limit;

    useEffect(() => {
        setPage(1);
    }, [isProject, sortBy, selectedLocalData]);

    useEffect(() => {
        setSortBy('createdAt');
        setSelectedLocalData('');
    }, [isProject]);

    const {
        register,
        handleSubmit,
        setFocus,
        setValue,
        setError,
        clearErrors,
        control,
        trigger,
        formState: { errors, isSubmitted },
    } = useForm({
        mode: 'onSubmit',
        defaultValues: {},
    });

    const options = ['전체', '인기순', '최신순'];
    const stackOptions = [
        'React',
        'TypeScript',
        'JavaScript',
        'Nextjs',
        'Nodejs',
        'Java',
        'Spring',
        'Kotlin',
        'Swift',
        'Flutter',
        '기타',
    ];
    useEffect(() => {
        getProjectBanner().then(res => {
            const imageUrls = res?.data?.map(item => item.imageUrl);
            setBanners(imageUrls);
        });
        loadContestPosts(page, sortBy, selectedLocalData, searchKeyword);
        loadProjectPosts(
            page,
            sortBy,
            selectedLocalData,
            selectedStack,
            searchKeyword,
        );
    }, [page, selectedLocalData, sortBy, selectedStack, searchKeyword]);

    const loadContestPosts = (page, sort, selectedLocalData, searchKeyword) => {
        getContestPosts(page, sort, selectedLocalData, searchKeyword).then(
            res => {
                // console.log(res?.data);
                setContestPosts(res?.data?.content);
                setContestTotalPage(res?.data?.totalPages);
            },
        );
    };
    const loadProjectPosts = (
        page,
        sort,
        selectedLocalData,
        selectedStack,
        searchKeyword,
    ) => {
        getProjectPosts(
            page,
            sort,
            selectedLocalData,
            selectedStack,
            searchKeyword,
        ).then(res => {
            // console.log(res?.data);
            setProjectPosts(res?.data?.content);
            setProjectTotalPage(res?.data?.totalPages);
        });
    };

    const handleSelectChange = selectedValue => {
        //선택한 정렬 방식으로 반환
        if (selectedValue === '인기순') {
            setSortBy('scrapCount');
        } else if (selectedValue === '최신순') {
            setSortBy('createdAt');
        } else {
            setSortBy(null);
        }
    };

    const handleSelectStack = selectedStack => {
        //기술 스택
        setSelectedStack(selectedStack);
    };

    const handleSelectedData = data => {
        //선택한 지역 반환
        setSelectedLocalData(data);
    };

    const showModal1 = () => {
        setModal1Open(true);
    };

    const closeModal1 = () => {
        setModal1Open(false);
    };

    return (
        <>
            <TopButton />
            <S.MainContent>
                <S.Div>
                    <SwiperBanner BannerImg={banners} />
                </S.Div>
                <S.Search>
                    <S.SearchBar>
                        <S.Searchmark>
                            <S.Searchicon />
                        </S.Searchmark>
                        <S.SearchUsernameInput
                            type="text"
                            placeholder={
                                isProject
                                    ? '찾고 있는 프로젝트가 있나요?'
                                    : '찾고 있는 공모전이 있나요?'
                            }
                            value={searchKeyword}
                            onChange={e => setSearchKeyword(e.target.value)}
                        />
                    </S.SearchBar>
                </S.Search>
                <S.Fillterbox>
                    <Multilevel
                        isPost={false}
                        onItemSelected={handleSelectedData}
                    />

                    <S.Fillter1>
                        <SelectInput
                            id={'sortBy'}
                            error={errors.sortBy}
                            selectOptions={options}
                            placeholder={'정렬'}
                            register={register}
                            onChange={handleSelectChange}
                            scroll={false}
                            case={true}
                        />
                    </S.Fillter1>
                    {isProject && (
                        <S.Fillter1>
                            <SelectInput
                                id={'local'}
                                error={errors.local}
                                selectOptions={stackOptions}
                                placeholder={'사용 언어'}
                                register={register}
                                case={true}
                                scroll={true}
                                onChange={handleSelectStack}
                            />
                        </S.Fillter1>
                    )}
                </S.Fillterbox>
                {isProject ? ( //여기는 프로젝트
                    <S.PostContent>
                        {projectPosts && projectPosts.length > 0 ? (
                            projectPosts.map(project => (
                                <React.Fragment key={project?.postId}>
                                    {isLoggedIn ? (
                                        <Link
                                            to={`/project/${project?.postId}`}
                                        >
                                            <TeamBox
                                                showWaitingJoin={false}
                                                showSubBox={true}
                                                borderColor={
                                                    'rgba(231, 137, 255, 0.5)'
                                                }
                                                postContent={project}
                                                isMyParticipation={null}
                                            />
                                        </Link>
                                    ) : (
                                        <button onClick={() => showModal1()}>
                                            <TeamBox
                                                showWaitingJoin={false}
                                                showSubBox={true}
                                                borderColor={
                                                    'rgba(231, 137, 255, 0.5)'
                                                }
                                                postContent={project}
                                                isMyParticipation={null}
                                            />
                                        </button>
                                    )}
                                    {isProject ? (
                                        <Pagination
                                            total={ProjectTotalPage}
                                            page={page}
                                            setPage={setPage}
                                            loadPosts={loadContestPosts}
                                        />
                                    ) : (
                                        <Pagination
                                            total={contestTotalPage}
                                            page={page}
                                            setPage={setPage}
                                            loadPosts={loadProjectPosts}
                                        />
                                    )}
                                </React.Fragment>
                            ))
                        ) : (
                            <NoContents
                                mainTxt={'찾으시는 내용을 발견하지 못했어요!'}
                                subTxt={'다른 내용을 검색해보세요'}
                            />
                        )}
                    </S.PostContent>
                ) : (
                    //아래는 공모전
                    <S.PostContent>
                        {contestPosts && contestPosts.length > 0 ? (
                            contestPosts.map(contest => (
                                <React.Fragment key={contest?.postId}>
                                    {isLoggedIn ? (
                                        <Link
                                            key={contest?.postId}
                                            to={`/contest/${contest?.postId}`}
                                        >
                                            <TeamBox
                                                showWaitingJoin={false}
                                                showSubBox={true}
                                                borderColor={
                                                    'rgba(0, 163, 255, 0.5)'
                                                }
                                                postContent={contest}
                                                isMyParticipation={null}
                                            />
                                        </Link>
                                    ) : (
                                        <button onClick={() => showModal1()}>
                                            <TeamBox
                                                showWaitingJoin={false}
                                                showSubBox={true}
                                                borderColor={
                                                    'rgba(0, 163, 255, 0.5)'
                                                }
                                                postContent={contest}
                                                isMyParticipation={null}
                                            />
                                        </button>
                                    )}
                                    {isProject ? (
                                        <Pagination
                                            total={ProjectTotalPage}
                                            page={page}
                                            setPage={setPage}
                                            loadPosts={loadContestPosts}
                                        />
                                    ) : (
                                        <Pagination
                                            total={contestTotalPage}
                                            page={page}
                                            setPage={setPage}
                                            loadPosts={loadProjectPosts}
                                        />
                                    )}
                                </React.Fragment>
                            ))
                        ) : (
                            <NoContents
                                mainTxt={'찾으시는 내용을 발견하지 못했어요!'}
                                subTxt={'다른 내용을 검색해보세요'}
                            />
                        )}
                    </S.PostContent>
                )}
            </S.MainContent>
            {modal1Open && <Modal1 closeModal1={closeModal1} />}
        </>
    );
};

export default PostMainPage;
