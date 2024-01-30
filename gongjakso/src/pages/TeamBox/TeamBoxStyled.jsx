import styled from 'styled-components';
import { borderColor } from '../ProfilePage/ProfilePage';

export const Box = styled.div`
    width: 1200px;
    height: 170px;
    background-color: transparent;
    border: 1px solid ${props => borderColor(props.color)};
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.mainFont};
    border-radius: 15px;
    padding: 25px;
    margin: 10px 0px;
`;

export const Title = styled.p`
    font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize]};
    color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MainBox = styled.div`
    width: 35%;
    display: flex;
    justify-content: space-between;
`;

export const SubBox = styled.div`
    width: 27%;
    display: flex;
    justify-content: space-between;
`;

export const DeadLine = styled.div`
    width: 140px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: 2px solid ${({ theme }) => theme.Purple};
    border-radius: 50px;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme.Purple};
    img {
        width: 20px;
        margin-right: 13px;
    }
`;

export const ScrapNum = styled.div`
    width: 140px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: 2px solid #00efaf;
    border-radius: 50px;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme.Green};
    img {
        width: 20px;
        margin-right: 13px;
    }
`;

//프로필페이지-제목 등
export const BoxTopDetail = styled.div`
    height: 33%;
    display: flex;
    justify-content: space-between;
    text-align: left;
`;

//프로필페이지-파트명
export const BoxBottomDetail = styled.div`
    height: 33%;
    font-size: 16px;
    display: flex;
    align-items: center;
`;

//프로필페이지-자세히보기
export const MoreDetail = styled.button`
    height: 33%;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: bold;
    color: #8c8c8c;
    margin-top: auto;
`;

// 검은색 둥근 틀
export const RoundForm = styled.div`
    min-width: 120px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;
    border-radius: 15px;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 500;
    color: ${({ theme }) => theme.mainFont2};
    margin-right: 10px;
`;
