import styled from 'styled-components';

export const Globalstyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

// 전체 감싸는 틀
export const Layout = styled(Globalstyle)`
    flex-direction: column;
    margin-bottom: 100px;
`;

// 틀 세분화
export const Background = styled.div`
    margin-top: ${props => props.mgt};
    width: ${props => props.s};
    position: relative;
`;

// X 버튼
export const BgButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    margin-bottom: 50px;
    img {
        width: 2.5%;
        cursor: pointer;
    }
`;

// 상단 타이틀 틀
export const TitleBox = styled.div`
    display: flex;
    align-items: center;
    width: 800px;
    padding: 0px 40px;
`;

export const TitleBox2 = styled(TitleBox)`
    justify-content: space-between;
    margin-left: 30px;
    margin-bottom: 30px;
`;

export const BtnLayout = styled.div`
    display: flex;
    position: absolute;
<<<<<<< HEAD
    top: 105px;
    right: 50px;
=======
    top: 98px;
    right: 70px;
>>>>>>> 1b0e67038e720a95583f7f7ebfd25b868040af18
`;

// 타이틀
export const Title = styled.div`
    display: flex;
    font-family: 'TheJamsilRegular';
    font-size: ${({ theme }) => theme.fontSize.xl};
    img {
        width: 45px;
    }
    p {
        margin: 15px;
    }
    margin-left: 80px;
    margin-bottom: 35px;
`;

// 타이틀 옆 합류 대기 박스
export const Status = styled.div`
    padding: 10px;
    text-align: center;
    width: 130px;
    background: ${({ theme }) => theme.Light1};
    border-radius: 20px;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: white;
    font-family: 'PreBold';
`;

export const ApplyBtn = styled.button`
    position: relative;
    padding-right: 10px;
    background: none;
    width: 132px;
    border: 2px solid #c8c8c8;
    font-size: ${({ theme }) => theme.fontSize.md};
    margin-left: 20px;
    border-radius: 10px;
    font-family: 'PreBold';
    img {
        position: absolute;
        top: 10px;
        right: 5px;
        width: 17px;
    }
`;

// 팀장 표시 부분
export const TitleBottom = styled.div`
    font-size: 1.45rem;
    margin-left: 45px;
`;

export const BlueBox = styled.div`
    width: 100%;
    min-width: 650px;
    height: auto;
    border: 2px solid ${props => props.bg};
    border-radius: 40px;
    margin-top: 15px;
    padding: 55px;
`;

// 박스 안 텍스트 박스 전체 틀
export const TextBox = styled.div`
    width: 100%;
    align-items: center;
    padding: 20px 1px 20px 20px;
    display: flex;
`;

// 텍스트 박스 안 굵은 제목
export const TextTitle = styled.p`
    width: 23%;
    font-size: 1.6rem;
    font-family: 'PreBold';
`;

// 텍스트 박스 안 세부 내용
export const TextDetail = styled.div`
    width: 75%;
    font-family: 'PreMedium';
    font-size: 1.45rem;
    display: flex;
`;

export const Meeting = styled(TextDetail)`
    align-items: center;
    img {
        width: 4%;
        margin-right: 10px;
    }
`;

export const OpenKakao = styled(TextDetail)`
    align-items: center;
    img {
        width: 18%;
        cursor: pointer;
    }
`;

// 검은색 둥근 틀
export const RoundForm = styled(Globalstyle)`
    width: 150px;
    padding: 12px 6px;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    font-size: 1.13rem;
    color: white;
    text-align: center;
    margin-right: 10px;
`;

export const Line = styled.div`
    width: 100%;
    border: 1px solid #cecbcb;
    margin: 30px 0px;
`;

// 설명글 안 내용
export const MainText = styled.p`
    font-size: 1.45rem;
    padding-left: 20px;
    line-height: 2;
    height: ${props => props.h};
    padding-bottom: 180px;
`;

// 스크랩하기 & 지원하기 버튼
export const ScrapButton = styled.button`
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 60px;
    border-radius: 15px;
    margin: 15px;
    padding: 18px;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: bold;

    background: ${props =>
        props.click === false ? 'none' : ({ theme }) => theme.Green};
    color: ${props => (props.click === false ? 'black' : 'white')};
    border: 2px solid ${props => props.bc};

    img {
        margin-right: 18px;
        margin-left: -20px;
    }
`;

export const ApplyButton = styled(ScrapButton)`
    background: ${props => props.bg};
    color: white;
`;
