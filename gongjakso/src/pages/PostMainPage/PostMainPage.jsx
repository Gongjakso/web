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

const PostMainPage = () => {
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
    const [sortBy, setSortBy] = useState(null);

    const [selectedLocalData, setSelectedLocalData] = useState('');
    const [selectedStack, setSelectedStack] = useState('');
    // const offset = (page - 1) * limit;

    useEffect(() => {
        setPage(1);
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
    ];
    useEffect(() => {
        getProjectBanner().then(res => {
            const imageUrls = res?.data?.map(item => item.imageUrl);
            setBanners(imageUrls);
        });
        loadContestPosts(page, sortBy, selectedLocalData);
        loadProjectPosts(page, sortBy, selectedLocalData);
    }, [page, selectedLocalData, sortBy]);

    const loadContestPosts = (page, sort, selectedLocalData) => {
        getContestPosts(page, sort, selectedLocalData).then(res => {
            console.log(res?.data.content);
            setContestPosts(res?.data?.content);
            setContestTotalPage(res?.data?.totalPages);
        });
    };
    const loadProjectPosts = (page, sort, selectedLocalData) => {
        getProjectPosts(page, sort, selectedLocalData).then(res => {
            setProjectPosts(res?.data?.content);
            setProjectTotalPage(res?.data?.totalPages);
        });
    };

    const handleSelectChange = selectedValue => {
        //선택한 정렬 방식으로 반환
        if (selectedValue === '인기순') {
            setSortBy('scrapCount');
        } else if (selectedValue === '최신순') {
            setSortBy('createdDate');
        } else {
            setSortBy(null);
        }
    };

    const handleSelectStack = selectedStack => {
        setSelectedStack(selectedStack);
    };

    const handleSelectedData = data => {
        //선택한 지역 반환
        setSelectedLocalData(data);
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
                            placeholder="찾고 있는 공모전이 있나요?"
                        />
                    </S.SearchBar>
                </S.Search>
                <S.Fillterbox>
                    <Multilevel onItemSelected={handleSelectedData} />

                    <S.Fillter1>
                        <SelectInput
                            id={'sortBy'}
                            error={errors.sortBy}
                            selectOptions={options}
                            placeholder={'정렬'}
                            register={register}
                            onChange={handleSelectChange}
                        />
                    </S.Fillter1>
                    {isProject && (
                        <S.Fillter1>
                            <SelectInput
                                id={'local'}
                                error={errors.local}
                                selectOptions={stackOptions}
                                placeholder={'기술 스택'}
                                register={register}
                                onChange={handleSelectStack}
                            />
                        </S.Fillter1>
                    )}
                </S.Fillterbox>
                {isProject ? ( //여기는 프로젝트
                    <S.PostContent>
                        {projectPosts?.map(project => (
                            <Link
                                key={project?.postId}
                                to={`/project/${project?.postId}`}
                            >
                                <TeamBox
                                    showWaitingJoin={false}
                                    showSubBox={true}
                                    borderColor={'rgba(231, 137, 255, 0.5)'}
                                    postContent={project}
                                    isMyParticipation={null}
                                />
                            </Link>
                        ))}
                    </S.PostContent>
                ) : (
                    //아래는 공모전
                    <S.PostContent>
                        {contestPosts?.map(contest => (
                            <Link
                                key={contest?.postId}
                                to={`/contest/${contest?.postId}`}
                            >
                                <TeamBox
                                    showWaitingJoin={false}
                                    showSubBox={true}
                                    borderColor={'rgba(0, 163, 255, 0.5)'}
                                    postContent={contest}
                                    isMyParticipation={null}
                                />
                            </Link>
                        ))}
                    </S.PostContent>
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
            </S.MainContent>
        </>
    );
};

export default PostMainPage;
