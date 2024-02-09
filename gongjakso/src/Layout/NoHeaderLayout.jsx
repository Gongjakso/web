import { Outlet } from 'react-router-dom';
import * as S from './DefaultLayout.styled.styled';
import Footer from '../components/Footer/Footer';
const NoHeaderLayout = () => {
    return (
        <>
            <S.NoHeaderMain>
                <Outlet />
            </S.NoHeaderMain>
            <Footer />
        </>
    );
};

export default NoHeaderLayout;
