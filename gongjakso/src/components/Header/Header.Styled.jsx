import styled from 'styled-components';
// import backGroundImage from '../../assets/images/background.png';

export const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    height: 60px;
    position: absolute;
    top: 0;
`;
export const HeaderBase = styled.div`
    display: flex;
    width: 1380px;
    justify-content: start;
    height: 60px;
`;
export const ItemList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 30px;
`;

export const ProfileArea = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 500px;
    align-items: center;
    width: 0;
    font-weight: 700;
    justify-content: flex-end;
    font-size: ${({ theme }) => theme.fontSize.lg};
`;
