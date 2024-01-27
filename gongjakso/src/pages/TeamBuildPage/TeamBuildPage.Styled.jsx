import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 25px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TitleContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    border: 1px solid black;
    border-radius: 35px;
    background-color: #0054ff;
    gap: 55px;
`;
export const ImageContent = styled.div`
    width: 100%;
    max-width: 515px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    @media (min-width: 1641px) and (max-width: 1920px) {
        padding: 150px 0;
    }

    @media (max-width: 1640px) {
        padding: 73px 0;
    }
`;

export const ImageDiv = styled.div`
    width: 100%;
    height: 100%;
    max-width: 340px;
    min-width: 120px;
    max-height: 340px;
    min-height: 120px;
    background-color: gray;

    @media (min-width: 1641px) and (max-width: 1920px) {
        width: 340px; // 화면 폭이 1461px 이상 1920px 이하일 때
        height: 340px; // 화면 높이가 1461px 이상 1920px 이하일 때
    }

    @media (max-width: 1640px) {
        width: 220px; // 화면 폭이 1460px 이하일 때
        height: 220px; // 화면 높이가 1460px 이하일 때
    }
`;

export const BuildDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid black;
    /* background-color: gray; */
    @media (min-width: 1641px) and (max-width: 1920px) {
        padding: 150px 0;
    }

    @media (max-width: 1640px) {
        padding: 73px 0;
    }
`;

export const ButtonSet = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 360px;
    height: 80px;
    border: 1px solid #ffffff;
    border-radius: 12px;
`;

export const Text = styled.p`
    color: ${props => (props.$isMain === 'main' ? 'black' : '#ffffff')};
    font-weight: 700;
    font-size: 30px;
`;
