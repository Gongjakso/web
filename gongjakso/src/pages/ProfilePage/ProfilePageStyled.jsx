import styled from 'styled-components';
import { ReactComponent as My_page_big } from '../../assets/images/My_page_big.svg';
import { ReactComponent as Edit } from '../../assets/images/Edit.svg';
import { ReactComponent as Arrow } from '../../assets/images/Arrow.svg';

export const TopBox = styled.div`
    height: 250px;
    width: 100%;
    background-color: rgba(195, 233, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

export const DetailBox = styled.div`
    position: relative;
    line-height: 30px;
    text-align: left;
    display: flex;
    justify-content: space-between;
`;

export const InfoBox = styled.div`
    position: relative;
    transform: translateY(150%);
    padding-right: 45px;
    line-height: 25px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

//이름
export const NameTitle = styled.p`
    font-size: ${({ theme }) => theme.fontSize.ll};
    font-family: 'PreBold';
    margin-right: 50px;
    margin-bottom: 5px;
`;

//학과
export const MajorTitle = styled.p`
    margin-right: 50px;
    font-family: 'PreRegular';
    font-size: ${({ theme }) => theme.fontSize.md};
`;

//소제목
export const SubTitle = styled.p`
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 900;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
`;

//프로필 이미지
export const ProfileImage = styled(My_page_big)`
    width: 200px;
    transform: translateY(50%);
    display: flex;
    justify-content: center;
`;

export const EditImage = styled(Edit)`
    height: 28px;
`;

export const ArrowImage = styled(Arrow)`
    width: 80px;
    display: flex;
    align-items: center;
    height: 25px;
`;

//나의 포트폴리오 박스
export const PortfolioBox = styled.button`
    width: 170px;
    height: 45px;
    font-size: ${({ theme }) => theme.fontSize.md};
    background-color: #0054ff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.mainFont2};
    transform: translateY(150%);
    border-radius: 25px;
    margin-left: 45px;
`;

export const GlobalBox = styled.div`
    width: 1200px; // 원하는 너비로 설정
    margin: 180px auto 150px auto; // 가운데 정렬
`;

export const BoxDetail = styled.div`
    height: 25%;
    flex-direction: row;
    margin-top: 90px;
`;
