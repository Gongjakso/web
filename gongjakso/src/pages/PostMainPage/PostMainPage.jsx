import React from 'react';
import * as S from './PostMainPage.Styled';
import SwiperBanner from '../../components/SwiperBanner/SwiperBanner';

const PostMainPage = () => {
    return (
        <>
            <S.MainContent>
                <S.Div>
                    <SwiperBanner banner1={S.Banners} />
                </S.Div>
                <div>프로젝트/공모전 공고 메인 페이지</div>
                <div>프로젝트/공모전 공고 메인 페이지</div>
                <div>프로젝트/공모전 공고 메인 페이지</div>
            </S.MainContent>
        </>
    );
};

export default PostMainPage;
