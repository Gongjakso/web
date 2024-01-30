import styled from 'styled-components';
import TopButtonimg from '../../assets/images/TopButton.svg';

export const Container = styled.div`
    position: fixed;
    width: 100%;
    transition: opacity 2s ease-in-out;
    bottom: 200px;
    z-index: 1000;
`;

export const Button = styled.button`
    background: url(${TopButtonimg});
    right: 150px;
    background-size: contain;
    width: 70px;
    height: 70px;
    border-radius: 100%;
    position: absolute;
    cursor: pointer;
`;
