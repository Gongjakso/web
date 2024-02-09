import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import * as S from './DefaultLayout.styled';

const DefaultLayout = () => {
    const location = useLocation();

    const isContestDetail = location.pathname.includes('/contest/');
    const isProjectDetail2 = location.pathname.includes('/project/');

    return (
        <>
            {isContestDetail ? null : isProjectDetail2 ? null : <Header />}
            <S.Main>
                <Outlet />
            </S.Main>
            <Footer />
        </>
    );
};
export default DefaultLayout;
