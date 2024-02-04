import styled from 'styled-components';
import { ReactComponent as Banner } from '../../assets/images/banner.svg';

export const MainContent = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Banners = styled(Banner)`
    svg {
        width: 100%;
        height: auto;
    }
`;

export const Div = styled.div`
    width: 1200px;
    height: 100%;
    display: flex;
`;
