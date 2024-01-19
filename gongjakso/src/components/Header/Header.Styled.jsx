import styled from 'styled-components';

export const HeaderBase = styled.div`
    display: flex;
    flex-direction: row;
    position: abosoulte;
    align-items: center;
    justify-content: center;
    width: 100vw;
    order: 1;
    height: 60px;
`;
export const ItemList = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 5px;
    justify-content: flex-start;
    align-items: center;
`;

export const Button = styled.button`
    margin-left: 70px;
    font-weight: 500px;
    font-size: 15px;
    background-color: transparent;
    text-align: center;
    border: none;
    cursor: pointer;
    text-decoration: none;
`;
