import styled from 'styled-components';
import { ReactComponent as UnScrap } from '../../assets/images/UnScrap.svg';
import { ReactComponent as Fire } from '../../assets/images/Fire.svg';

export const Box = styled.div`
    width: 1200px;
    height: 190px;
    background-color: transparent;
    border: 1px solid ${props => props.borderColor || '#0054FF'};
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.mainFont};
    border-radius: 15px;
    padding: 25px 50px;
    margin: 10px 0px;
`;

export const Title = styled.p`
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.mainFont};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'TheJamsilRegular';
`;

export const subTitle = styled.p`
    font-size: ${({ theme }) => theme.fontSize.base};
    color: #616161;
    display: flex;
    align-items: center;
    justify-content: center;
`;

//프로필페이지-제목 등
export const BoxTopDetail = styled.div`
    height: 30%;
    display: flex;
    justify-content: space-between;
    text-align: left;
`;

export const MainBox = styled.div`
    width: 35%;
    display: flex;
    justify-content: space-between;
`;

export const SubBox = styled.div`
    width: 28%;
    display: flex;
    justify-content: space-between;
`;

//프로필페이지-파트명
export const BoxBottomDetail = styled.div`
    height: 50%;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
`;

//프로필 이미지
export const UnScrapImage = styled(UnScrap)`
    width: 20px;
    margin-right: 13px;
`;

//프로필 이미지
export const FireImage = styled(Fire)`
    width: 20px;
    margin-right: 13px;
`;

//마감일수
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
`;

//스크랩 횟수
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
`;

//합류 대기중
export const WaitingJoin = styled.div`
    width: 140px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.Light1};
    border-radius: 50px;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme.mainFont2};
`;

//활동 중 or 활동 중단
export const ActivityStatus = styled.div`
    width: 140px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0054ff;
    border-radius: 50px;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme.mainFont2};
`;

//검은색 둥근 틀
export const RoundForm = styled.div`
    min-width: 120px;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;
    border-radius: 16px;
    font-size: ${({ theme }) => theme.fontSize.mm};
    font-weight: 500;
    color: ${({ theme }) => theme.mainFont2};
    margin-right: 10px;
`;

//프로필페이지-자세히보기
export const MoreDetail = styled.button`
    height: 30%;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: #8c8c8c;
`;