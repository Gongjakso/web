import styled from 'styled-components';

export const Background = styled.div`
    width: ${props => props.s};
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-left: ${props => props.p};
`;

// X 버튼
export const BgButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    margin-bottom: 50px;
    img {
        width: 20px;
        cursor: pointer;
    }
`;

// 상단 타이틀 부분
export const TitleBox = styled.div`
    font-size: 30px;
    font-weight: 900;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    img {
        width: 30px;
    }
    p {
        margin: 15px;
        min-width: 215px;
    }
`;

// 타이틀 옆 스크랩 횟수 표시 박스
export const ScrapNum = styled.div`
    min-width: 100px;
    height: 30px;
    padding: 4px 4px 4px 13px;
    background: none;
    border: 2px solid #00efaf;
    border-radius: 50px;
    font-size: 18px;
    font-weight: 600;
    color: #00efaf;
    img {
        width: 20px;
        margin-right: 13px;
    }
`;

export const BlueBox = styled.div`
    width: 100%;
    min-width: 600px;
    height: 1100px;
    border: 2px solid #195ee6;
    border-radius: 30px 30px 0 0;
    border-bottom: none;
    margin-top: 10px;
    padding: 30px;
`;

// 박스 안 텍스트 박스 전체 틀
export const TextBox = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    margin: 20px 20px 0px 25px;
`;

// 텍스트 박스 안 굵은 제목
export const TextTitle = styled.p`
    width: 25%;
    height: 40px;
    font-size: 19px;
    font-weight: 600;
`;

// 텍스트 박스 안 세부 내용
export const TextDetail = styled.div`
    width: 75%;
    height: 40px;
    font-size: 17px;
    font-weight: 500;
    display: flex;
`;

// 검은색 둥근 틀
export const RoundForm = styled.div`
    min-width: 120px;
    height: 30px;
    padding-top: 6px;
    background: black;
    border-radius: 13px;
    font-size: 13px;
    font-weight: 500;
    color: white;
    text-align: center;
    margin: 0px 8px 0px -2px;
`;

export const Line = styled.div`
    width: 100%;
    border: 1.5px solid #cecbcb;
    margin-top: 30px;
`;

// 설명글 안 내용
export const MainText = styled.p`
    margin: -5px 20px 10px 20px;
    font-size: 17px;
    line-height: 2;
    height: 250px;
`;

// 스크랩하기 & 지원하기 버튼
export const MainButton = styled.button`
    width: 200px;
    height: 55px;
    border-radius: 10px;
    margin: 15px;
    padding: 15px;
    font-size: 17px;
    font-weight: 600;
    span {
        margin-left: 10px;
    }
`;
