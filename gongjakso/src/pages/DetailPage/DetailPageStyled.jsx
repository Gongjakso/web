import styled from 'styled-components';

export const Globalstyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

// 전체 감싸는 틀
export const Layout = styled(Globalstyle)`
    flex-direction: column;
`;

// 틀 세분화
export const Background = styled.div`
    margin-top: ${props => props.mgt};
    width: ${props => props.s};
`;

// X 버튼
export const BgButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    margin-bottom: 50px;
    img {
        width: 3%;
        cursor: pointer;
    }
`;

// 상단 타이틀 틀
export const TitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    width: 800px;
`;

// 타이틀
export const Title = styled.div`
    display: flex;
    font-family: 'TheJamsilRegular';
    font-size: ${({ theme }) => theme.fontSize.xlg};
    img {
        width: 45px;
    }
    p {
        margin: 15px;
    }
`;

// 타이틀 옆 스크랩 횟수 표시 박스
export const ScrapNum = styled.div`
    display: flex;
    padding: 7px 10px;
    text-align: center;
    width: 180px;
    background: none;
    border: 3px solid ${({ theme }) => theme.Green};
    border-radius: 55px;
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: bold;
    color: ${({ theme }) => theme.Green};
    img {
        margin-right: 12px;
    }
`;

// 팀장 표시 부분
export const TitleBottom = styled.div`
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 10px;
`;

export const BlueBox = styled.div`
    width: 100%;
    min-width: 600px;
    height: 1300px;
    border: 3px solid ${props => props.bg};
    border-radius: 40px 40px 0 0;
    border-bottom: none;
    margin-top: 10px;
    padding: 55px;
`;

// 박스 안 텍스트 박스 전체 틀
export const TextBox = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
`;

// 텍스트 박스 안 굵은 제목
export const TextTitle = styled.p`
    width: 25%;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-family: 'PreBold';
    font-weight: bold;
`;

// 텍스트 박스 안 세부 내용
export const TextDetail = styled.div`
    width: 75%;
    font-size: ${({ theme }) => theme.fontSize.l};
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
    width: 160px;
    padding: 12px;
    background: black;
    border-radius: 20px;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: white;
    text-align: center;
    margin-right: 10px;
`;

export const Line = styled.div`
    width: 100%;
    border: 1.5px solid #cecbcb;
    margin: 30px 0px;
`;

// 설명글 안 내용
export const MainText = styled.p`
    font-size: ${({ theme }) => theme.fontSize.l};
    padding-left: 20px;
    line-height: 2;
    height: ${props => props.h};
`;

// 스크랩하기 & 지원하기 버튼
export const ScrapButton = styled.button`
    width: 290px;
    border-radius: 15px;
    margin: 15px;
    padding: 18px;
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: bold;

    background: ${props =>
        props.click === false ? 'none' : ({ theme }) => theme.Green};
    color: ${props => (props.click === false ? 'black' : 'white')};
    border: 3px solid ${props => props.bc};

    img {
        margin-right: 20px;
    }
`;

export const ApplyButton = styled(ScrapButton)`
    background: ${({ theme }) => theme.box1};
    color: white;
`;
