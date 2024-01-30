import styled from 'styled-components';
import { borderColor } from '../ProfilePage/ProfilePage';

export const TeamBox = styled.div`
    width: 1200px;
    height: 150px;
    font-size: 20px;
    font-weight: bold;
    background-color: transparent;
    border: 1px solid ${props => borderColor(props.color)};
    display: flex;
    flex-direction: column;
    color: #000000;
    border-radius: 10px;
    padding: 25px;
    margin: 10px 0px;
`;

//프로필페이지-자세히보기
export const MoreDetail = styled.button`
    font-size: 15px;
    color: #8c8c8c;
    margin-top: auto;
`;
