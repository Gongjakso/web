import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import * as S from './DefaultLayout.styled';

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <S.Main>
                <Outlet />
            </S.Main>
            <Footer />
        </>
    );
};
export default DefaultLayout;
