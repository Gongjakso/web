import styled from 'styled-components';

export const HeaderBase = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
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
    margin: 0 50px;
`;

export const ProfileArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 0;
    margin-left: 200px;
    font-weight: 700;
    justify-content: flex-end;
    font-size: ${({ theme }) => theme.fontSize.lg};
`;
