import styled from 'styled-components';
import { ReactComponent as My_page_big } from '../../assets/images/My_page_big.svg';
import { ReactComponent as Edit } from '../../assets/images/Edit.svg';
import { ReactComponent as Arrow } from '../../assets/images/Arrow.svg';

export const Container = styled.div`
    width: 1200px; // 원하는 너비로 설정
    margin: 0 auto; // 가운데 정렬
`;

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
    line-height: 25px;
    text-align: left;
    display: flex;
    justify-content: space-between;
`;

export const InfoBox = styled.div`
    position: relative;
    transform: translateY(150%);
    padding-right: 30px;
    line-height: 25px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

//이름
export const NameTitle = styled.p`
    font-size: 25px;
    font-weight: bold;
`;

//학과
export const MajorTitle = styled.p`
    font-size: 15px;
`;

//소제목
export const SubTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin-top: 50px;
`;

//프로필 이미지
export const ProfileImage = styled(My_page_big)`
    width: 150px;
    margin-right: 10px;
    transform: translateY(50%);
`;

export const EditImage = styled(Edit)`
    height: 22px;
    align-items: right;
`;

export const ArrowImage = styled(Arrow)`
    width: 50px;
    height: 22px;
`;

//나의 포트폴리오 박스
export const PortfolioBox = styled.button`
    width: 150px;
    height: 40px;
    font-size: 15px;
    background-color: #0054ff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    transform: translateY(150%);
    border-radius: 25px;
    margin-left: 30px;
`;

export const GlobalDetail = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const GlobalBox = styled.div`
    width: 100%;
    padding: 100px 200px;
`;

export const BoxDetail = styled.div`
    height: 25%;
    flex-direction: row;
`;
