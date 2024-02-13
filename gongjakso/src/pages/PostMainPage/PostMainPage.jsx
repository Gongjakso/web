import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import * as S from './PostMainPage.Styled';
import SwiperBanner from '../../components/SwiperBanner/SwiperBanner';
import Pagination from '../../components/Pagination/Pagination';
import { SelectInput } from '../../components/common/Input/Input';
import {
    getContestBanner,
    getMainBanner,
    getProjectBanner,
} from '../../service/banner_service';
import TopButton from '../HomePage/TopButton';

import Multilevel from '../../components/common/Input/Multilevel';

const PostMainPage = () => {
    const location = useLocation();
    const isProject = location.pathname.includes('/project');
    const isColor = isProject ? '#E789FF' : '#00A3FF';
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(6);
    const [page, setPage] = useState(1);
    const [banners, setBanners] = useState([]);

    const offset = (page - 1) * limit;

    useEffect(() => {
        setPage(1); // isProject가 변경될 때마다 페이지를 1로 초기화
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
        defaultValues: {
            category: '책상',
            productName: null,
            price: null,
            store: null,
            link: null,
        },
    });

    const options = ['서울', '인천', '경기도', '부산', '대구', '전라도'];

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
        getProjectBanner().then(res => {
            const imageUrls = res.data.map(item => item.imageUrl);
            setBanners(imageUrls);
        });
    }, []);

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
                    {/* <S.Fillter1>
                        <SelectInput
                            id={'local'}
                            error={errors.local}
                            selectOptions={options}
                            placeholder={'지역'}
                            register={register}
                        />
                    </S.Fillter1> */}

                    <Multilevel />

                    <S.Fillter1>
                        <SelectInput
                            id={'local'}
                            error={errors.local}
                            selectOptions={options}
                            placeholder={'정렬'}
                            register={register}
                        />
                    </S.Fillter1>
                    {isProject && (
                        <S.Fillter1>
                            <SelectInput
                                id={'local'}
                                error={errors.local}
                                selectOptions={options}
                                placeholder={'기술 스택'}
                                register={register}
                            />
                        </S.Fillter1>
                    )}
                </S.Fillterbox>

                <S.PostContent>
                    {posts
                        .slice(offset, offset + limit)
                        .map(({ id, title }) => (
                            <S.Article $isColor={isColor} key={id}>
                                <h3>
                                    {id}. {title}
                                </h3>
                            </S.Article>
                        ))}
                </S.PostContent>

                <Pagination
                    total={posts.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
            </S.MainContent>
        </>
    );
};

export default PostMainPage;
