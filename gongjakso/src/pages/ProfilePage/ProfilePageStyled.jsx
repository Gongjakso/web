import styled from 'styled-components';

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
    transform: translateY(150%);
    padding-right: 30px;
    line-height: 25px;
    text-align: right;
`;

//이름, 소제목
export const Subtitle1 = styled.p`
    font-size: 25px;
    font-weight: bold;
`;

//학과
export const Subtitle2 = styled.p`
    font-size: 15px;
`;

//프로필 이미지
export const ProfileImage = styled.img`
    width: 150px;
    margin-right: 10px;
    transform: translateY(50%);
`;

export const ArrowImage = styled.img`
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

export const TopDetail = styled.div`
    padding: 10px 200px;
    padding-top: 150px;
`;

export const GlobalDetail = styled.div`
    padding: 10px 200px;
    display: flex;
    align-items: center;
`;
